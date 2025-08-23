import React, { useState, useEffect } from 'react';
import { Play, Trophy, Target, Clock, Star, Shuffle, BookOpen, Award, TrendingUp, ArrowRight } from 'lucide-react';
import QuizGame from '../components/QuizGame';
import allMixedQuestions from '../data/qa-questions-mixed.json'; // Importa o arquivo com todas as questões misturadas

const QAPlayTrainingPage = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [userStats, setUserStats] = useState({
    badgesEarned: 0,
    quizzesCompleted: 0,
    totalPoints: 0,
    accuracy: 0
  });

  // Carregar estatísticas do localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('qaPlayGameStats');
    if (savedStats) {
      setUserStats(JSON.parse(savedStats));
    }
  }, []);

  const handleGameComplete = (result) => {
    setGameStarted(false);
    setGameResult(result);
    
    // Atualizar estatísticas
    const newStats = {
      ...userStats,
      quizzesCompleted: userStats.quizzesCompleted + 1,
      totalPoints: userStats.totalPoints + result.score,
      accuracy: Math.round(((userStats.accuracy * userStats.quizzesCompleted + result.accuracy) / (userStats.quizzesCompleted + 1)))
    };
    
    // Verificar se ganhou badge (exemplo, pode ser ajustado)
    if (result.accuracy >= 80) {
      newStats.badgesEarned += 1;
    }
    
    setUserStats(newStats);
    localStorage.setItem('qaPlayGameStats', JSON.stringify(newStats));
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameResult(null);
  };

  const startGame = () => {
    setGameStarted(true);
    setGameResult(null); // Resetar resultado do jogo anterior
  };

  if (gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        <QuizGame
          allQuestions={allMixedQuestions}
          onComplete={handleGameComplete}
          onBack={resetGame}
          category="mixed"
          level="mixed"
          totalQuestions={20}
          timeLimit={1200} // 20 minutos para 20 questões
          pointsPerQuestion={20} // Média de pontos por questão
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            QA Play Training
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Desafie Seus Conhecimentos em QA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Teste e aprimore seus conhecimentos em Quality Assurance com um quiz desafiador. 
            Questões de todas as categorias e níveis misturadas para uma experiência completa!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            * As questões são inspiradas em padrões internacionais como ISTQB e CTFL para fins educacionais.<br />
            Não somos uma escola certificadora - os badges são gerados para diversão e aprendizado.
          </p>
        </div>

        {/* Estatísticas do Usuário */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Suas Estatísticas</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{userStats.badgesEarned}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Badges Conquistados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{userStats.quizzesCompleted}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Quizzes Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{userStats.totalPoints}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pontos Totais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{userStats.accuracy}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Taxa de Acerto</div>
            </div>
          </div>
        </div>

        {/* Se o jogo terminou, mostrar resultado */}
        {gameResult && (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-12 border border-gray-200 dark:border-gray-700 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quiz Concluído!</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">Sua Pontuação: <span className="font-bold text-indigo-600 dark:text-indigo-400">{gameResult.score}</span></p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">Taxa de Acerto: <span className="font-bold text-green-600 dark:text-green-400">{gameResult.accuracy}%</span></p>
            <button
              onClick={resetGame}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <Play className="w-4 h-4 mr-2" />
              Jogar Novamente
            </button>
          </div>
        )}

        {/* Botão de Início */}
        {!gameResult && (
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para o Desafio?
              </h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                20 questões aleatórias de todas as categorias e níveis. Teste seu conhecimento completo em Quality Assurance!
              </p>
              <button
                onClick={startGame}
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-200 shadow-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Iniciar Quiz Completo
              </button>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400">
              * As questões não se repetem em rodadas consecutivas para uma experiência sempre nova.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QAPlayTrainingPage;

