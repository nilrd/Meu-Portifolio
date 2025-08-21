from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.models.quiz import db, Question, QuizSession, QuizAnswer, Certificate
from src.models.user import User
import random
import json
import hashlib
from datetime import datetime, timedelta

quiz_bp = Blueprint('quiz', __name__)

@quiz_bp.route('/quiz/types', methods=['GET'])
def get_quiz_types():
    """Retorna os tipos de quiz disponíveis"""
    quiz_types = [
        {
            'id': 'istqb',
            'name': 'CTFL ISTQB',
            'description': 'Questões baseadas no syllabus oficial ISTQB v4.0.1',
            'total_questions': 20,
            'time_limit': 40,
            'passing_score': 70
        },
        {
            'id': 'cypress',
            'name': 'Cypress',
            'description': 'Testes de UI modernos com Cypress',
            'total_questions': 15,
            'time_limit': 30,
            'passing_score': 70
        },
        {
            'id': 'java',
            'name': 'Java para Testes',
            'description': 'Lógica de programação Java aplicada a testes',
            'total_questions': 15,
            'time_limit': 25,
            'passing_score': 70
        },
        {
            'id': 'javascript',
            'name': 'JavaScript para Testes',
            'description': 'Lógica de programação JavaScript para QA',
            'total_questions': 15,
            'time_limit': 25,
            'passing_score': 70
        },
        {
            'id': 'selenium',
            'name': 'Selenium WebDriver',
            'description': 'Automação de testes web com Selenium',
            'total_questions': 15,
            'time_limit': 30,
            'passing_score': 70
        },
        {
            'id': 'quality',
            'name': 'Qualidade de Software',
            'description': 'Metodologias Ágeis, CI/CD, BDD, TDD',
            'total_questions': 20,
            'time_limit': 35,
            'passing_score': 70
        }
    ]
    return jsonify(quiz_types)

@quiz_bp.route('/quiz/start', methods=['POST'])
@jwt_required()
def start_quiz():
    """Inicia um novo quiz"""
    try:
        data = request.get_json()
        quiz_type = data.get('quiz_type')
        user_id = get_jwt_identity()
        
        if not quiz_type:
            return jsonify({'error': 'Tipo de quiz é obrigatório'}), 400
        
        # Verificar se há questões suficientes para o tipo de quiz
        available_questions = Question.query.filter_by(quiz_type=quiz_type).all()
        
        if len(available_questions) < 15:
            return jsonify({'error': 'Questões insuficientes para este quiz'}), 400
        
        # Determinar número de questões baseado no tipo
        num_questions = 20 if quiz_type in ['istqb', 'quality'] else 15
        
        # Selecionar questões aleatórias
        selected_questions = random.sample(available_questions, min(num_questions, len(available_questions)))
        
        # Embaralhar ordem das questões
        random.shuffle(selected_questions)
        
        # Criar sessão do quiz
        questions_data = []
        for i, question in enumerate(selected_questions):
            # Embaralhar opções para cada questão
            options = ['A', 'B', 'C', 'D']
            random.shuffle(options)
            
            # Mapear a resposta correta para a nova posição
            option_mapping = {
                'A': question.option_a,
                'B': question.option_b,
                'C': question.option_c,
                'D': question.option_d
            }
            
            shuffled_options = {}
            correct_answer_new_position = None
            
            for j, original_option in enumerate(options):
                new_position = ['A', 'B', 'C', 'D'][j]
                shuffled_options[new_position] = option_mapping[original_option]
                
                if original_option == question.correct_answer:
                    correct_answer_new_position = new_position
            
            questions_data.append({
                'question_id': question.id,
                'order': i + 1,
                'shuffled_options': shuffled_options,
                'correct_answer': correct_answer_new_position
            })
        
        # Criar sessão no banco
        session = QuizSession(
            user_id=user_id,
            quiz_type=quiz_type,
            questions_data=json.dumps(questions_data),
            total_questions=len(selected_questions)
        )
        
        db.session.add(session)
        db.session.commit()
        
        # Retornar dados da sessão (sem respostas corretas)
        session_data = {
            'session_id': session.id,
            'quiz_type': quiz_type,
            'total_questions': len(selected_questions),
            'questions': []
        }
        
        for item in questions_data:
            question = Question.query.get(item['question_id'])
            session_data['questions'].append({
                'id': question.id,
                'order': item['order'],
                'question_text': question.question_text,
                'options': item['shuffled_options']
            })
        
        return jsonify(session_data)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@quiz_bp.route('/quiz/answer', methods=['POST'])
@jwt_required()
def submit_answer():
    """Submete resposta para uma questão"""
    try:
        data = request.get_json()
        session_id = data.get('session_id')
        question_id = data.get('question_id')
        user_answer = data.get('answer')
        time_spent = data.get('time_spent', 0)
        
        user_id = get_jwt_identity()
        
        # Verificar se a sessão pertence ao usuário
        session = QuizSession.query.filter_by(id=session_id, user_id=user_id).first()
        if not session:
            return jsonify({'error': 'Sessão não encontrada'}), 404
        
        # Verificar se a sessão ainda está ativa
        if session.status != 'active':
            return jsonify({'error': 'Sessão não está ativa'}), 400
        
        # Obter dados da questão na sessão
        questions_data = json.loads(session.questions_data)
        question_data = None
        
        for q in questions_data:
            if q['question_id'] == question_id:
                question_data = q
                break
        
        if not question_data:
            return jsonify({'error': 'Questão não encontrada na sessão'}), 404
        
        # Verificar se já foi respondida
        existing_answer = QuizAnswer.query.filter_by(
            session_id=session_id,
            question_id=question_id
        ).first()
        
        if existing_answer:
            return jsonify({'error': 'Questão já foi respondida'}), 400
        
        # Verificar se a resposta está correta
        is_correct = user_answer == question_data['correct_answer']
        
        # Salvar resposta
        answer = QuizAnswer(
            session_id=session_id,
            question_id=question_id,
            user_answer=user_answer,
            is_correct=is_correct,
            time_spent=time_spent
        )
        
        db.session.add(answer)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'is_correct': is_correct
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@quiz_bp.route('/quiz/finish', methods=['POST'])
@jwt_required()
def finish_quiz():
    """Finaliza um quiz e calcula a pontuação"""
    try:
        data = request.get_json()
        session_id = data.get('session_id')
        user_id = get_jwt_identity()
        
        # Verificar sessão
        session = QuizSession.query.filter_by(id=session_id, user_id=user_id).first()
        if not session:
            return jsonify({'error': 'Sessão não encontrada'}), 404
        
        if session.status != 'active':
            return jsonify({'error': 'Sessão já foi finalizada'}), 400
        
        # Calcular pontuação
        answers = QuizAnswer.query.filter_by(session_id=session_id).all()
        correct_answers = sum(1 for answer in answers if answer.is_correct)
        score_percentage = int((correct_answers / session.total_questions) * 100)
        
        # Atualizar sessão
        session.end_time = datetime.utcnow()
        session.score = score_percentage
        session.status = 'completed'
        
        # Verificar se merece certificado (70% ou mais)
        certificate = None
        if score_percentage >= 70:
            certificate_code = generate_certificate_code(session.quiz_type, user_id)
            
            certificate = Certificate(
                user_id=user_id,
                session_id=session_id,
                certificate_type=session.quiz_type,
                certificate_code=certificate_code,
                score=score_percentage
            )
            
            db.session.add(certificate)
        
        db.session.commit()
        
        # Preparar resultado detalhado
        questions_data = json.loads(session.questions_data)
        detailed_results = []
        
        for q_data in questions_data:
            question = Question.query.get(q_data['question_id'])
            user_answer_obj = next((a for a in answers if a.question_id == question.id), None)
            
            detailed_results.append({
                'question_id': question.id,
                'question_text': question.question_text,
                'correct_answer': q_data['correct_answer'],
                'user_answer': user_answer_obj.user_answer if user_answer_obj else None,
                'is_correct': user_answer_obj.is_correct if user_answer_obj else False,
                'explanation': question.explanation
            })
        
        result = {
            'session_id': session_id,
            'score': score_percentage,
            'correct_answers': correct_answers,
            'total_questions': session.total_questions,
            'passed': score_percentage >= 70,
            'certificate': certificate.to_dict() if certificate else None,
            'detailed_results': detailed_results
        }
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@quiz_bp.route('/quiz/history', methods=['GET'])
@jwt_required()
def get_quiz_history():
    """Retorna histórico de quizzes do usuário"""
    try:
        user_id = get_jwt_identity()
        
        sessions = QuizSession.query.filter_by(
            user_id=user_id,
            status='completed'
        ).order_by(QuizSession.end_time.desc()).all()
        
        history = []
        for session in sessions:
            history.append({
                'session_id': session.id,
                'quiz_type': session.quiz_type,
                'score': session.score,
                'start_time': session.start_time.isoformat(),
                'end_time': session.end_time.isoformat() if session.end_time else None
            })
        
        return jsonify(history)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@quiz_bp.route('/certificate/verify/<certificate_code>', methods=['GET'])
def verify_certificate(certificate_code):
    """Verifica a validade de um certificado"""
    try:
        certificate = Certificate.query.filter_by(certificate_code=certificate_code).first()
        
        if not certificate:
            return jsonify({'valid': False, 'message': 'Certificado não encontrado'}), 404
        
        if not certificate.is_valid:
            return jsonify({'valid': False, 'message': 'Certificado inválido'}), 400
        
        user = User.query.get(certificate.user_id)
        
        return jsonify({
            'valid': True,
            'certificate': {
                'code': certificate.certificate_code,
                'type': certificate.certificate_type,
                'score': certificate.score,
                'issue_date': certificate.issue_date.isoformat(),
                'holder_name': user.username if user else 'Usuário não encontrado'
            }
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def generate_certificate_code(quiz_type, user_id):
    """Gera código único para certificado"""
    timestamp = datetime.utcnow().strftime('%Y%m%d%H%M%S')
    data = f"{quiz_type}_{user_id}_{timestamp}"
    hash_object = hashlib.sha256(data.encode())
    hash_hex = hash_object.hexdigest()[:8].upper()
    
    return f"QAP-{quiz_type.upper()}-{timestamp[:4]}-{hash_hex}"

