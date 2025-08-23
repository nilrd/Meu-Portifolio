import React, { useState, useEffect } from 'react';
import { Trophy, Clock, Target, CheckCircle, XCircle, RotateCcw, Share2, Award, Shuffle } from 'lucide-react';
import BadgeGenerator from './BadgeGenerator';

const QuizGame = ({ allQuestions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutos = 1200 segundos
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showBadgeGenerator, setShowBadgeGenerator] = useState(false);
  const [finalResult, setFinalResult] = useState(null);
  const [gameQuestions, setGameQuestions] = useState([]);
  const [usedQuestionIds, setUsedQuestionIds] = useState(new Set());

  // Função para embaralhar array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Função para selecionar questões sem repetição
  const selectUniqueQuestions = (allQuestions, count = 20) => {
    // Recuperar IDs de questões já usadas do localStorage
    const storedUsedIds = JSON.parse(localStorage.getItem('usedQuestionIds') || '[]');
    const currentUsedIds = new Set(storedUsedIds);
    
    // Filtrar questões não utilizadas
    const availableQuestions = allQuestions.filter(q => !currentUsedIds.has(q.id));
    
    // Se não há questões suficientes disponíveis, resetar o histórico
    if (availableQuestions.length < count) {
      currentUsedIds.clear();
      localStorage.setItem('usedQuestionIds', JSON.stringify([]));
      return shuffleArray(allQuestions).slice(0, count);
    }
    
    // Selecionar questões aleatórias das disponíveis
    const selectedQuestions = shuffleArray(availableQuestions).slice(0, count);
    
    // Atualizar IDs usados
    selectedQuestions.forEach(q => currentUsedIds.add(q.id));
    localStorage.setItem('usedQuestionIds', JSON.stringify([...currentUsedIds]));
    setUsedQuestionIds(currentUsedIds);
    
    return selectedQuestions;
  };

  // Inicializar questões do jogo
  useEffect(() => {
    if (allQuestions && allQuestions.length > 0) {
      // Selecionar 20 questões aleatórias de todas as questões disponíveis
      const selectedQuestions = selectUniqueQuestions(allQuestions, 20);
      setGameQuestions(selectedQuestions);
    }
  }, [allQuestions]);

  // Timer effect - 20 minutos total
  useEffect(() => {
    if (gameStarted && !gameFinished && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      finishGame();
    }
  }, [timeLeft, gameStarted, gameFinished]);

  const startGame = () => {
    setGameStarted(true);
    setTimeLeft(1200); // 20 minutos
  };

  const handleAnswer = (answerIndex) => {
    const question = gameQuestions[currentQuestion];
    const isCorrect = answerIndex === question.correctAnswer;
    const newAnswer = {
      questionId: question.id,
      selectedAnswer: answerIndex,
      correctAnswer: question.correctAnswer,
      isCorrect,
      points: isCorrect ? question.points : 0,
      timeSpent: 1200 - timeLeft
    };

    setSelectedAnswer(answerIndex);
    setAnswers([...answers, newAnswer]);
    setShowExplanation(true);
    
    if (isCorrect) {
      setScore(score + question.points);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < gameQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      finishGame();
    }
  };

  const finishGame = () => {
    setGameFinished(true);
    const totalQuestions = gameQuestions.length;
    const correctAnswers = answers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    let levelAchieved = 'Iniciante';
    if (percentage >= 90) levelAchieved = 'Expert';
    else if (percentage >= 75) levelAchieved = 'Avançado';
    else if (percentage >= 60) levelAchieved = 'Intermediário';
    else if (percentage >= 40) levelAchieved = 'Básico';

    const result = {
      score,
      totalQuestions,
      correctAnswers,
      percentage,
      levelAchieved,
      category,
      level: level === 'mixed' ? 'Níveis Mistos' : level,
      timeSpent: 1200 - timeLeft,
      answers
    };

    setFinalResult(result);
    onComplete(result);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowExplanation(false);
    setTimeLeft(1200);
    setGameStarted(false);
    setGameFinished(false);
    setScore(0);
    setShowBadgeGenerator(false);
    setFinalResult(null);
    
    // Reselecionar questões para evitar repetição
    if (allQuestions && allQuestions.length > 0) {
      const selectedQuestions = selectUniqueQuestions(allQuestions, 20);
      setGameQuestions(selectedQuestions);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeLeft > 600) return 'text-green-600'; // > 10 min
    if (timeLeft > 300) return 'text-yellow-600'; // > 5 min
    return 'text-red-600'; // < 5 min
  };

  if (!gameStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz Completo - Todos os Níveis e Categorias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Questões</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">20</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Minutos</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                <Shuffle className="w-6 h-6 mx-auto" />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mix de Níveis
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl mb-6">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              ⚠️ <strong>Importante:</strong> As questões não se repetirão em futuras rodadas. 
              Você tem 20 minutos para responder todas as 20 questões.
            </p>
          </div>
          
          <button
            onClick={startGame}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Iniciar Desafio
          </button>
        </div>
      </div>
    );
  }

  if (gameFinished) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Desafio Concluído!
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{finalResult?.score}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pontos</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{finalResult?.percentage}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Acertos</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{finalResult?.correctAnswers}/20</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Corretas</div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {formatTime(finalResult?.timeSpent || 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tempo</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Nível Alcançado: {finalResult?.levelAchieved}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {finalResult?.percentage >= 90 && "Excelente! Você domina completamente este assunto!"}
              {finalResult?.percentage >= 75 && finalResult?.percentage < 90 && "Muito bom! Você tem conhecimento avançado."}
              {finalResult?.percentage >= 60 && finalResult?.percentage < 75 && "Bom trabalho! Continue estudando para aprimorar."}
              {finalResult?.percentage >= 40 && finalResult?.percentage < 60 && "Você está no caminho certo! Pratique mais."}
              {finalResult?.percentage < 40 && "Continue estudando! A prática leva à perfeição."}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowBadgeGenerator(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Award className="w-5 h-5 mr-2" />
              Gerar Certificado
            </button>
            
            <button
              onClick={resetGame}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Novo Desafio
            </button>
          </div>
        </div>

        {showBadgeGenerator && (
          <BadgeGenerator
            result={finalResult}
            onClose={() => setShowBadgeGenerator(false)}
          />
        )}
      </div>
    );
  }

  if (gameQuestions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">Carregando questões...</p>
        </div>
      </div>
    );
  }

  const question = gameQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / gameQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header com progresso e timer */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Questão {currentQuestion + 1} de {gameQuestions.length}
            </span>
            <div className="flex items-center space-x-2">
              <Clock className={`w-4 h-4 ${getTimeColor()}`} />
              <span className={`text-sm font-medium ${getTimeColor()}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Pontos: {score}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Questão */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {question.question}
          </h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showExplanation && handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  showExplanation
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : selectedAnswer === index
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                      : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    : selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    showExplanation && index === question.correctAnswer
                      ? 'border-green-500 bg-green-500'
                      : showExplanation && selectedAnswer === index && index !== question.correctAnswer
                      ? 'border-red-500 bg-red-500'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {showExplanation && index === question.correctAnswer && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                    {showExplanation && selectedAnswer === index && index !== question.correctAnswer && (
                      <XCircle className="w-4 h-4 text-white" />
                    )}
                    {!showExplanation && selectedAnswer === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {showExplanation && (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Explicação:</h4>
            <p className="text-blue-800 dark:text-blue-200">{question.explanation}</p>
            <div className="mt-3 text-sm text-blue-700 dark:text-blue-300">
              Pontos: {question.points}
            </div>
          </div>
        )}

        {showExplanation && (
          <div className="flex justify-end">
            <button
              onClick={nextQuestion}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {currentQuestion < gameQuestions.length - 1 ? 'Próxima Questão' : 'Finalizar'}
              <Target className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;

