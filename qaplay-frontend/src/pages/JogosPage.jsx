import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Trophy,
  Target,
  Zap,
  Code,
  Shield,
  Cpu,
  Globe,
  Award,
  Clock,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  BookOpen,
  Download,
  FileText,
  Video,
  Headphones,
  Monitor,
  Database,
  Settings,
  Smartphone,
  Lock,
  TrendingUp
} from 'lucide-react';
import QuizGame from '../components/QuizGame';
import qaQuestions from '../data/qa-questions.json';

const JogosPage = () => {
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
        basico: { questions: 15, points: 100, time: 900 },
        intermediario: { questions: 15, points: 150, time: 900 },
        avancado: { questions: 15, points: 200, time: 900 }
      }
    },
    api: {
      name: 'Testes de API',
      description: 'REST, SOAP, autenticação e ferramentas como Postman.',
      icon: Globe,
      color: 'green',
      levels: {
        basico: { questions: 15, points: 100, time: 900 },
        intermediario: { questions: 15, points: 150, time: 900 },
        avancado: { questions: 15, points: 200, time: 900 }
      }
    },
    agile: {
      name: 'QA em Metodologias Ágeis',
      description: 'Scrum, Kanban, BDD, TDD e integração contínua.',
      icon: Users,
      color: 'teal',
      levels: {
        basico: { questions: 15, points: 100, time: 900 },
        intermediario: { questions: 15, points: 150, time: 900 },
        avancado: { questions: 15, points: 200, time: 900 }
      }
    },
    ferramentas: {
      name: 'Ferramentas de QA',
      description: 'Selenium, Cypress, JMeter, Postman e outras ferramentas essenciais.',
      icon: Settings,
      color: 'yellow',
      levels: {
        basico: { questions: 15, points: 100, time: 900 },
        intermediario: { questions: 15, points: 150, time: 900 },
        avancado: { questions: 15, points: 200, time: 900 }
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

  // Se um jogo está sendo jogado
  if (selectedCategory && selectedLevel && !gameResult) {
    const category = gameCategories[selectedCategory];
    const levelData = category.levels[selectedLevel];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        <QuizGame
          category={selectedCategory}
          level={selectedLevel}
          questions={qaQuestions[selectedCategory]?.[selectedLevel] || []}
          onComplete={handleGameComplete}
          onBack={resetGame}
          totalQuestions={levelData.questions}
          timeLimit={levelData.time}
          pointsPerQuestion={Math.round(levelData.points / levelData.questions)}
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
            Jogos Educacionais de QA
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            QA Play Games
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Teste e aprimore seus conhecimentos em Quality Assurance através de jogos interativos. 
            Ganhe badges, compete com outros profissionais e evolua suas habilidades!
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
              
              return (
                <div key={key} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-lift cursor-pointer"
                     onClick={() => setSelectedCategory(key)}>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(category.color)}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{category.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-green-600 dark:text-green-400">5</div>
                      <div className="text-gray-500 dark:text-gray-400">Básico</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-yellow-600 dark:text-yellow-400">5</div>
                      <div className="text-gray-500 dark:text-gray-400">Intermediário</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-red-600 dark:text-red-400">5</div>
                      <div className="text-gray-500 dark:text-gray-400">Avançado</div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="font-bold text-purple-600 dark:text-purple-400">0</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Níveis Mistos</div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Escolher Nível
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Seleção de Nível */}
        {selectedCategory && !selectedLevel && (
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
                
                return (
                  <div key={levelKey} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-lift">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(level.color)}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{level.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{level.description}</p>
                    
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
                  </div>
                );
              })}
            </div>

            {/* Níveis Mistos - Desabilitado por enquanto */}
            <div className="max-w-md mx-auto mt-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 opacity-60">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gray-200 dark:bg-gray-700 text-gray-400">
                  <Star className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-2">Níveis Mistos</h3>
                <p className="text-gray-400 dark:text-gray-500 mb-6 text-sm">
                  Mistura de questões básicas, intermediárias e avançadas
                </p>
                
                <button 
                  disabled
                  className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
                >
                  Em Breve
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Resultado do Jogo */}
        {gameResult && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Quiz Concluído!</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{gameResult.score}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Pontos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">{gameResult.accuracy}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Precisão</div>
                </div>
              </div>
              
              {gameResult.accuracy >= 80 && (
                <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                  <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                  <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                    Parabéns! Você ganhou um badge por sua excelente performance!
                  </p>
                </div>
              )}
              
              <div className="flex gap-4">
                <button 
                  onClick={resetGame}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                >
                  Jogar Novamente
                </button>
                <button 
                  onClick={() => setSelectedLevel(null)}
                  className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Escolher Outro Nível
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JogosPage;

