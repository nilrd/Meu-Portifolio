import React, { useState, useEffect } from 'react';
import { Trophy, Clock, Target, CheckCircle, XCircle, RotateCcw, Share2, Award } from 'lucide-react';
import BadgeGenerator from './BadgeGenerator';

const QuizGame = ({ category, level, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showBadgeGenerator, setShowBadgeGenerator] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  // Timer effect
  useEffect(() => {
    if (gameStarted && !gameFinished && !showExplanation && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showExplanation) {
      handleAnswer(null); // Auto-submit when time runs out
    }
  }, [timeLeft, gameStarted, gameFinished, showExplanation]);

  const startGame = () => {
    setGameStarted(true);
    setTimeLeft(30);
  };

  const handleAnswer = (answerIndex) => {
    const question = questions[currentQuestion];
    const isCorrect = answerIndex === question.correctAnswer;
    const newAnswer = {
      questionId: question.id,
      selectedAnswer: answerIndex,
      correctAnswer: question.correctAnswer,
      isCorrect,
      points: isCorrect ? question.points : 0,
      timeSpent: 30 - timeLeft
    };

    setSelectedAnswer(answerIndex);
    setAnswers([...answers, newAnswer]);
    setShowExplanation(true);
    
    if (isCorrect) {
      setScore(score + question.points);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(30);
    } else {
      finishGame();
    }
  };

  const finishGame = () => {
    setGameFinished(true);
    const totalPoints = answers.reduce((sum, answer) => sum + answer.points, 0);
    const correctAnswers = answers.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    const result = {
      category,
      level,
      score: totalPoints,
      correctAnswers,
      totalQuestions: questions.length,
      percentage,
      answers,
      badge: getBadge(percentage)
    };
    
    setFinalResult(result);
    onComplete(result);
  };

  const getBadge = (percentage) => {
    if (percentage >= 90) return { name: 'Expert', color: 'gold', icon: '🏆' };
    if (percentage >= 80) return { name: 'Avançado', color: 'silver', icon: '🥈' };
    if (percentage >= 70) return { name: 'Competente', color: 'bronze', icon: '🥉' };
    if (percentage >= 60) return { name: 'Iniciante', color: 'blue', icon: '📚' };
    return { name: 'Estudante', color: 'gray', icon: '📖' };
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowExplanation(false);
    setTimeLeft(30);
    setGameStarted(false);
    setGameFinished(false);
    setScore(0);
    setShowBadgeGenerator(false);
    setFinalResult(null);
  };

  const shareResult = () => {
    const correctAnswers = answers.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const badge = getBadge(percentage);
    
    const text = `🎯 Acabei de completar o quiz de ${category} (${level}) no QA Play!\n\n` +
                 `📊 Resultado: ${correctAnswers}/${questions.length} (${percentage}%)\n` +
                 `🏆 Badge: ${badge.icon} ${badge.name}\n` +
                 `💯 Pontuação: ${score} pontos\n\n` +
                 `#QAPlay #QualityAssurance #Testing`;

    if (navigator.share) {
      navigator.share({
        title: 'Meu resultado no QA Play',
        text: text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Resultado copiado para a área de transferência!');
    }
  };

  if (!gameStarted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz: {category}
          </h2>
          
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            Nível: {level}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{questions.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Questões</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">30s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Por questão</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {questions.reduce((sum, q) => sum + q.points, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pontos máximos</div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Teste seus conhecimentos em {category}! Responda as questões no tempo limite e ganhe pontos baseados na dificuldade.
            <br />
            <small className="text-xs text-gray-500">
              * As questões são inspiradas em padrões internacionais como ISTQB e CTFL para fins educacionais.
            </small>
          </p>
          
          <button
            onClick={startGame}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Target className="w-5 h-5 mr-2" />
            Iniciar Quiz
          </button>
        </div>
      </div>
    );
  }

  if (gameFinished) {
    const correctAnswers = answers.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    const badge = getBadge(percentage);
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl ${
            badge.color === 'gold' ? 'bg-yellow-100 text-yellow-600' :
            badge.color === 'silver' ? 'bg-gray-100 text-gray-600' :
            badge.color === 'bronze' ? 'bg-orange-100 text-orange-600' :
            badge.color === 'blue' ? 'bg-blue-100 text-blue-600' :
            'bg-gray-100 text-gray-500'
          }`}>
            {badge.icon}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Quiz Concluído!
          </h2>
          
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full mb-6">
            Badge: {badge.name}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{score}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pontos</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{correctAnswers}/{questions.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Acertos</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{percentage}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Aproveitamento</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {Math.round(answers.reduce((sum, a) => sum + a.timeSpent, 0) / answers.length)}s
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tempo médio</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowBadgeGenerator(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Award className="w-5 h-5 mr-2" />
              Gerar Badge
            </button>
            <button
              onClick={shareResult}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar Resultado
            </button>
            <button
              onClick={restartGame}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Jogar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Questão {currentQuestion + 1} de {questions.length}
          </div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {question.points} pontos
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-400" />
          <div className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-gray-900 dark:text-white'}`}>
            {timeLeft}s
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-8">
        <div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          let buttonClass = "w-full p-4 text-left border rounded-lg transition-all duration-200 ";
          
          if (showExplanation) {
            if (index === question.correctAnswer) {
              buttonClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
            } else if (index === selectedAnswer && index !== question.correctAnswer) {
              buttonClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
            } else {
              buttonClass += "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300";
            }
          } else {
            if (selectedAnswer === index) {
              buttonClass += "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300";
            } else {
              buttonClass += "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/10";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !showExplanation && handleAnswer(index)}
              disabled={showExplanation}
              className={buttonClass}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center">
                  {showExplanation && index === question.correctAnswer && (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {showExplanation && index === selectedAnswer && index !== question.correctAnswer && (
                    <XCircle className="w-4 h-4" />
                  )}
                  {!showExplanation && (
                    <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>
                  )}
                </div>
                {option}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Explicação:</h4>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Next Button */}
      {showExplanation && (
        <div className="text-center">
          <button
            onClick={nextQuestion}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            {currentQuestion < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
          </button>
        </div>
      )}

      {/* Badge Generator Modal */}
      {showBadgeGenerator && finalResult && (
        <BadgeGenerator
          result={finalResult}
          userName="QA Professional"
          onClose={() => setShowBadgeGenerator(false)}
        />
      )}
    </div>
  );
};

export default QuizGame;

