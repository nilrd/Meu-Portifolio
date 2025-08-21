from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

db = SQLAlchemy()

class Question(db.Model):
    __tablename__ = 'questions'
    
    id = db.Column(db.Integer, primary_key=True)
    quiz_type = db.Column(db.String(50), nullable=False)  # 'istqb', 'cypress', 'java', 'javascript', 'selenium', 'quality'
    topic = db.Column(db.String(100), nullable=False)
    difficulty = db.Column(db.String(10), nullable=False)  # 'K1', 'K2', 'K3'
    question_text = db.Column(db.Text, nullable=False)
    option_a = db.Column(db.Text, nullable=False)
    option_b = db.Column(db.Text, nullable=False)
    option_c = db.Column(db.Text, nullable=False)
    option_d = db.Column(db.Text, nullable=False)
    correct_answer = db.Column(db.String(1), nullable=False)  # 'A', 'B', 'C', 'D'
    explanation = db.Column(db.Text)
    reference = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'quiz_type': self.quiz_type,
            'topic': self.topic,
            'difficulty': self.difficulty,
            'question_text': self.question_text,
            'option_a': self.option_a,
            'option_b': self.option_b,
            'option_c': self.option_c,
            'option_d': self.option_d,
            'correct_answer': self.correct_answer,
            'explanation': self.explanation,
            'reference': self.reference
        }

class QuizSession(db.Model):
    __tablename__ = 'quiz_sessions'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    quiz_type = db.Column(db.String(50), nullable=False)
    questions_data = db.Column(db.Text, nullable=False)  # JSON com IDs das questões e ordem
    start_time = db.Column(db.DateTime, default=datetime.utcnow)
    end_time = db.Column(db.DateTime)
    score = db.Column(db.Integer)
    total_questions = db.Column(db.Integer, default=20)
    status = db.Column(db.String(20), default='active')  # 'active', 'completed', 'abandoned'
    anti_cheat_flags = db.Column(db.Text)  # JSON com flags de anti-cola
    
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'quiz_type': self.quiz_type,
            'questions_data': json.loads(self.questions_data) if self.questions_data else [],
            'start_time': self.start_time.isoformat() if self.start_time else None,
            'end_time': self.end_time.isoformat() if self.end_time else None,
            'score': self.score,
            'total_questions': self.total_questions,
            'status': self.status,
            'anti_cheat_flags': json.loads(self.anti_cheat_flags) if self.anti_cheat_flags else []
        }

class QuizAnswer(db.Model):
    __tablename__ = 'quiz_answers'
    
    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.Integer, db.ForeignKey('quiz_sessions.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)
    user_answer = db.Column(db.String(1))  # 'A', 'B', 'C', 'D' ou None se não respondida
    is_correct = db.Column(db.Boolean)
    answer_time = db.Column(db.DateTime, default=datetime.utcnow)
    time_spent = db.Column(db.Integer)  # segundos gastos na questão
    
    def to_dict(self):
        return {
            'id': self.id,
            'session_id': self.session_id,
            'question_id': self.question_id,
            'user_answer': self.user_answer,
            'is_correct': self.is_correct,
            'answer_time': self.answer_time.isoformat() if self.answer_time else None,
            'time_spent': self.time_spent
        }

class Certificate(db.Model):
    __tablename__ = 'certificates'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    session_id = db.Column(db.Integer, db.ForeignKey('quiz_sessions.id'), nullable=False)
    certificate_type = db.Column(db.String(50), nullable=False)
    certificate_code = db.Column(db.String(100), unique=True, nullable=False)
    score = db.Column(db.Integer, nullable=False)
    issue_date = db.Column(db.DateTime, default=datetime.utcnow)
    is_valid = db.Column(db.Boolean, default=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'session_id': self.session_id,
            'certificate_type': self.certificate_type,
            'certificate_code': self.certificate_code,
            'score': self.score,
            'issue_date': self.issue_date.isoformat() if self.issue_date else None,
            'is_valid': self.is_valid
        }

