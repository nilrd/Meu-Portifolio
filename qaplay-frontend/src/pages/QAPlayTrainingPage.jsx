import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Trophy, 
  Target, 
  Clock, 
  Star,
  Shuffle,
  BookOpen,
  Award,
  TrendingUp,
  ArrowRight,
  Code,
  Globe,
  Users,
  Settings,
  Zap
} from 'lucide-react';
import QuizGame from '../components/QuizGame';
import qaQuestions from '../data/qa-questions.json';

const QAPlayTrainingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
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

  const gameCategories = {
    fundamentos: {
      name: 'Fundamentos de QA',
      description: 'Conceitos básicos de Quality Assurance, processos e metodologias.',
      icon: Target,
      color: 'blue',
      levels: {
        basico: { questions: 15, points: 100, time: 900 },
        intermediario: { questions: 15, points: 150, time: 900 },
        avancado: { questions: 15, points: 200, time: 900 }
      }
    },
    automacao: {
      name: 'Automação de Testes',
      description: 'Ferramentas, frameworks e boas práticas de automação.',
      icon: Code,
      color: 'purple',
      levels: {
        basico: { questions: 1, points: 100, time: 900 },
        intermediario: { questions: 0, points: 150, time: 900 },
        avancado: { questions: 0, points: 200, time: 900 }
      }
    },
    api: {
      name: 'Testes de API',
      description: 'REST, SOAP, autenticação e ferramentas como Postman.',
      icon: Globe,
      color: 'green',
      levels: {
        basico: { questions: 0, points: 100, time: 900 },
        intermediario: { questions: 0, points: 150, time: 900 },
        avancado: { questions: 0, points: 200, time: 900 }
      }
    },
    agile: {
      name: 'QA em Metodologias Ágeis',
      description: 'Scrum, Kanban, BDD, TDD e integração contínua.',
      icon: Users,
      color: 'teal',
      levels: {
        basico: { questions: 0, points: 100, time: 900 },
        intermediario: { questions: 0, points: 150, time: 900 },
        avancado: { questions: 0, points: 200, time: 900 }
      }
    },
    ferramentas: {
      name: 'Ferramentas de QA',
      description: 'Selenium, Cypress, JMeter, Postman e outras ferramentas essenciais.',
      icon: Settings,
      color: 'yellow',
      levels: {
        basico: { questions: 0, points: 100, time: 900 },
        intermediario: { questions: 0, points: 150, time: 900 },
        avancado: { questions: 0, points: 200, time: 900 }
      }
    },
    mixed: {
      name: 'Quiz Completo',
      description: 'Questões de todas as categorias e níveis misturadas.',
      icon: Shuffle,
      color: 'indigo',
      levels: {
        mixed: { questions: 20, points: 400, time: 1200 }
      }
    }
  };

  const levels = {
    basico: {
      name: 'Básico',
      description: 'Para iniciantes em QA',
      color: 'green',
      icon: BookOpen
    },
    intermediario: {
      name: 'Intermediário',
      description: 'Para profissionais com experiência',
      color: 'yellow',
      icon: Zap
    },
    avancado: {
      name: 'Avançado',
      description: 'Para especialistas em QA',
      color: 'red',
      icon: Trophy
    },
    mixed: {
      name: 'Níveis Mistos',
      description: 'Mistura de questões básicas, intermediárias e avançadas',
      color: 'purple',
      icon: Star
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
      teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800',
      gray: 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800',
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
    };
    return colors[color] || colors.blue;
  };

  const handleGameComplete = (result) => {
    setGameResult(result);
    
    // Atualizar estatísticas
    const newStats = {
      ...userStats,
      quizzesCompleted: userStats.quizzesCompleted + 1,
      totalPoints: userStats.totalPoints + result.score,
      accuracy: Math.round(((userStats.accuracy * userStats.quizzesCompleted + result.accuracy) / (userStats.quizzesCompleted + 1)))
    };
    
    // Verificar se ganhou badge
    if (result.accuracy >= 80) {
      newStats.badgesEarned += 1;
    }
    
    setUserStats(newStats);
    localStorage.setItem('qaPlayGameStats', JSON.stringify(newStats));
  };

  const resetGame = () => {
    setSelectedCategory(null);
    setSelectedLevel(null);
    setGameResult(null);
  };

  const getQuestionsForGame = (category, level) => {
    if (category === 'mixed') {
      // Para quiz completo, misturar todas as questões
      const allQuestions = [];
      Object.keys(qaQuestions).forEach(categoryKey => {
        const categoryData = qaQuestions[categoryKey];
        Object.keys(categoryData).forEach(levelKey => {
          const questions = categoryData[levelKey];
          questions.forEach(question => {
            allQuestions.push({
              ...question,
              category: categoryKey,
              level: levelKey
            });
          });
        });
      });
      return allQuestions;
    } else {
      return qaQuestions[category]?.[level] || [];
    }
  };

  // Se um jogo está sendo jogado
  if (selectedCategory && selectedLevel && !gameResult) {
    const category = gameCategories[selectedCategory];
    const levelData = category.levels[selectedLevel];
    const questions = getQuestionsForGame(selectedCategory, selectedLevel);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        <QuizGame
          category={selectedCategory}
          level={selectedLevel}
          questions={questions}
          allQuestions={questions}
          onComplete={handleGameComplete}
          onBack={resetGame}
          totalQuestions={selectedCategory === 'mixed' ? 20 : levelData.questions}
          timeLimit={levelData.time}
          pointsPerQuestion={Math.round(levelData.points / (selectedCategory === 'mixed' ? 20 : levelData.questions))}
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
            Treine Seus Conhecimentos em QA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Escolha uma categoria e nível para começar seu treinamento. Ganhe badges, compete com outros profissionais e evolua suas habilidades!
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

        {/* Seleção de Categoria */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(gameCategories).map(([key, category]) => {
              const Icon = category.icon;
              const totalQuestions = Object.values(category.levels).reduce((sum, level) => sum + level.questions, 0);
              
              return (
                <div key={key} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-lift cursor-pointer"
                     onClick={() => setSelectedCategory(key)}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(category.color)}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{category.description}</p>
                  
                  <div className="text-center mb-4">
                    <div className="font-bold text-purple-600 dark:text-purple-400 text-2xl">{totalQuestions}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Questões Disponíveis</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    {key === 'mixed' ? 'Iniciar Quiz' : 'Escolher Nível'}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Seleção de Nível */}
        {selectedCategory && !selectedLevel && selectedCategory !== 'mixed' && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Voltar às Categorias
              </button>
            </div>

            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 ${getColorClasses(gameCategories[selectedCategory].color)}`}>
                {React.createElement(gameCategories[selectedCategory].icon, { className: "w-10 h-10" })}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {gameCategories[selectedCategory].name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {gameCategories[selectedCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {Object.entries(levels).slice(0, 3).map(([levelKey, level]) => {
                const Icon = level.icon;
                const levelData = gameCategories[selectedCategory].levels[levelKey];
                const isAvailable = levelData && levelData.questions > 0;
                
                return (
                  <div key={levelKey} className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 ${isAvailable ? 'hover:shadow-xl hover-lift cursor-pointer' : 'opacity-60'}`}>
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(level.color)}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{level.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{level.description}</p>
                    
                    {isAvailable ? (
                      <>
                        <div className="space-y-2 mb-6">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Questões:</span>
                            <span className="font-medium text-gray-700 dark:text-gray-300">{levelData.questions}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Pontos:</span>
                            <span className="font-medium text-gray-700 dark:text-gray-300">{levelData.points}</span>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => setSelectedLevel(levelKey)}
                          className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <Play className="w-4 h-4" />
                          Iniciar Quiz
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2 mb-6">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Status:</span>
                            <span className="font-medium text-gray-500 dark:text-gray-400">Em breve</span>
                          </div>
                        </div>
                        
                        <button 
                          disabled
                          className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
                        >
                          Em Desenvolvimento
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Quiz Completo - Caso especial */}
        {selectedCategory === 'mixed' && !selectedLevel && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Voltar às Categorias
              </button>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para o Desafio Completo?
                </h3>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                  20 questões aleatórias de todas as categorias e níveis. Teste seu conhecimento completo em Quality Assurance!
                </p>
                <button
                  onClick={() => setSelectedLevel('mixed')}
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-200 shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Iniciar Quiz Completo
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Resultado do Jogo */}
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
      </div>
    </div>
  );
};

export default QAPlayTrainingPage;

