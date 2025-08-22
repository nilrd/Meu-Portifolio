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

const QAPlayTrainingPage = () => {
  const [completedModules, setCompletedModules] = useState(new Set());
  const [userProgress, setUserProgress] = useState({
    totalModules: 12,
    completedModules: 0,
    totalPoints: 0,
    currentLevel: 'Iniciante',
    certificates: []
  });

  // Carregar progresso do localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('qaPlayTrainingProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setUserProgress(progress);
      setCompletedModules(new Set(progress.completedModuleIds || []));
    }
  }, []);

  const modules = [
    {
      id: 'fundamentos',
      title: 'Fundamentos de QA',
      description: 'Conceitos básicos, ciclo de vida do software e tipos de teste.',
      icon: Shield,
      color: 'blue',
      duration: '2-3 horas',
      lessons: 8,
      points: 100,
      difficulty: 'Básico',
      topics: ['Conceitos de QA', 'SDLC', 'Tipos de Teste', 'Documentação']
    },
    {
      id: 'automacao',
      title: 'Automação de Testes',
      description: 'Ferramentas, frameworks e boas práticas de automação.',
      icon: Code,
      color: 'purple',
      duration: '4-5 horas',
      lessons: 12,
      points: 150,
      difficulty: 'Intermediário',
      topics: ['Selenium', 'Cypress', 'Page Object Model', 'CI/CD']
    },
    {
      id: 'api-testing',
      title: 'Testes de API',
      description: 'REST, SOAP, autenticação e ferramentas como Postman.',
      icon: Globe,
      color: 'green',
      duration: '3-4 horas',
      lessons: 10,
      points: 120,
      difficulty: 'Intermediário',
      topics: ['REST API', 'Postman', 'Autenticação', 'Validação JSON']
    },
    {
      id: 'performance',
      title: 'Testes de Performance',
      description: 'Load testing, stress testing e ferramentas de monitoramento.',
      icon: TrendingUp,
      color: 'orange',
      duration: '3-4 horas',
      lessons: 9,
      points: 130,
      difficulty: 'Avançado',
      topics: ['JMeter', 'Load Testing', 'Métricas', 'Otimização']
    },
    {
      id: 'security',
      title: 'Testes de Segurança',
      description: 'Vulnerabilidades, OWASP Top 10 e ferramentas de security testing.',
      icon: Lock,
      color: 'red',
      duration: '4-5 horas',
      lessons: 11,
      points: 140,
      difficulty: 'Avançado',
      topics: ['OWASP', 'Vulnerabilidades', 'Penetration Testing', 'Security Tools']
    },
    {
      id: 'mobile',
      title: 'Testes Mobile',
      description: 'Testes em dispositivos móveis, emuladores e ferramentas específicas.',
      icon: Smartphone,
      color: 'pink',
      duration: '3-4 horas',
      lessons: 8,
      points: 110,
      difficulty: 'Intermediário',
      topics: ['Appium', 'Emuladores', 'Device Testing', 'Mobile UX']
    },
    {
      id: 'database',
      title: 'Testes de Banco de Dados',
      description: 'SQL, validação de dados e testes de integridade.',
      icon: Database,
      color: 'indigo',
      duration: '2-3 horas',
      lessons: 7,
      points: 90,
      difficulty: 'Básico',
      topics: ['SQL Básico', 'Validação de Dados', 'Triggers', 'Backup/Recovery']
    },
    {
      id: 'agile',
      title: 'QA em Metodologias Ágeis',
      description: 'Scrum, Kanban, BDD, TDD e integração contínua.',
      icon: Users,
      color: 'teal',
      duration: '2-3 horas',
      lessons: 6,
      points: 80,
      difficulty: 'Básico',
      topics: ['Scrum', 'BDD/TDD', 'User Stories', 'Sprint Testing']
    },
    {
      id: 'tools',
      title: 'Ferramentas de QA',
      description: 'JIRA, TestRail, Bugzilla e outras ferramentas essenciais.',
      icon: Settings,
      color: 'gray',
      duration: '2-3 horas',
      lessons: 8,
      points: 85,
      difficulty: 'Básico',
      topics: ['JIRA', 'TestRail', 'Bug Tracking', 'Test Management']
    },
    {
      id: 'web-testing',
      title: 'Testes Web',
      description: 'Cross-browser testing, responsividade e acessibilidade.',
      icon: Monitor,
      color: 'cyan',
      duration: '3-4 horas',
      lessons: 9,
      points: 105,
      difficulty: 'Intermediário',
      topics: ['Cross-browser', 'Responsividade', 'Acessibilidade', 'SEO Testing']
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills para QA',
      description: 'Comunicação, liderança e trabalho em equipe.',
      icon: MessageCircle,
      color: 'yellow',
      duration: '2-3 horas',
      lessons: 6,
      points: 70,
      difficulty: 'Básico',
      topics: ['Comunicação', 'Liderança', 'Feedback', 'Apresentações']
    },
    {
      id: 'career',
      title: 'Carreira em QA',
      description: 'Certificações, portfolio e crescimento profissional.',
      icon: Trophy,
      color: 'emerald',
      duration: '1-2 horas',
      lessons: 5,
      points: 60,
      difficulty: 'Básico',
      topics: ['Certificações', 'Portfolio', 'Networking', 'Entrevistas']
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
      gray: 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400',
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
    };
    return colors[color] || colors.blue;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Básico': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'Intermediário': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      case 'Avançado': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const markModuleComplete = (moduleId) => {
    const newCompleted = new Set(completedModules);
    newCompleted.add(moduleId);
    setCompletedModules(newCompleted);
    
    const module = modules.find(m => m.id === moduleId);
    const newProgress = {
      ...userProgress,
      completedModules: newCompleted.size,
      totalPoints: userProgress.totalPoints + module.points,
      completedModuleIds: [...newCompleted]
    };
    
    // Atualizar nível baseado nos pontos
    if (newProgress.totalPoints >= 1000) newProgress.currentLevel = 'Expert';
    else if (newProgress.totalPoints >= 600) newProgress.currentLevel = 'Avançado';
    else if (newProgress.totalPoints >= 300) newProgress.currentLevel = 'Intermediário';
    else newProgress.currentLevel = 'Iniciante';
    
    setUserProgress(newProgress);
    localStorage.setItem('qaPlayTrainingProgress', JSON.stringify(newProgress));
  };

  const progressPercentage = (userProgress.completedModules / userProgress.totalModules) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            QA Play Training
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprimore suas habilidades em Quality Assurance com nossos módulos de treinamento interativos e gamificados.
          </p>
        </div>

        {/* Dashboard do Usuário */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Seu Progresso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{userProgress.completedModules}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Módulos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{userProgress.totalPoints}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pontos Totais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{userProgress.currentLevel}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Nível Atual</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{Math.round(progressPercentage)}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Progresso Geral</div>
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Módulos de Treinamento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modules.map((module) => {
            const Icon = module.icon;
            const isCompleted = completedModules.has(module.id);
            
            return (
              <div key={module.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(module.color)}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  {isCompleted && (
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{module.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{module.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Duração:</span>
                    <span className="text-gray-700 dark:text-gray-300">{module.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Lições:</span>
                    <span className="text-gray-700 dark:text-gray-300">{module.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Pontos:</span>
                    <span className="text-gray-700 dark:text-gray-300">{module.points}</span>
                  </div>
                </div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getDifficultyColor(module.difficulty)}`}>
                  {module.difficulty}
                </div>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Tópicos:</div>
                  <div className="flex flex-wrap gap-1">
                    {module.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                    {module.topics.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">+{module.topics.length - 3}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {isCompleted ? (
                    <button className="flex-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 py-2 px-4 rounded-lg font-medium text-sm">
                      Concluído
                    </button>
                  ) : (
                    <button 
                      onClick={() => markModuleComplete(module.id)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200"
                    >
                      Iniciar
                    </button>
                  )}
                  <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recursos Adicionais */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recursos Adicionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">E-books</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Guias completos em PDF</p>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                Baixar
              </button>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <Video className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vídeo Aulas</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Conteúdo em vídeo</p>
              <button className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline">
                Assistir
              </button>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <Headphones className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Podcasts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Episódios sobre QA</p>
              <button className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline">
                Ouvir
              </button>
            </div>
            
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <Award className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Certificados</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Certificações válidas</p>
              <button className="text-orange-600 dark:text-orange-400 text-sm font-medium hover:underline">
                Ver
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
          <p className="text-xl mb-6 opacity-90">
            Transforme sua carreira em QA com nosso treinamento completo e certificações reconhecidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/jogos"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Play className="w-5 h-5 mr-2" />
              Jogar Agora
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar Conosco
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAPlayTrainingPage;

