import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Home as HomeIcon, 
  BookOpen, 
  FileText, 
  User, 
  Mail,
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
  MessageCircle
} from 'lucide-react';

// Hook para gerenciar tema
const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return [isDark, setIsDark];
};

// Componente Header
const Header = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/training', label: 'QA Play Training', icon: BookOpen },
    { path: '/blog', label: 'Blog', icon: FileText },
    { path: '/sobre', label: 'Sobre Mim', icon: User },
    { path: '/contato', label: 'Contato', icon: Mail }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                QA Play
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Interactive Learning</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">QA Play</h3>
                <p className="text-sm text-gray-400">Interactive Learning</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Transforme conhecimento em conquistas. Domine Quality Assurance através de desafios gamificados.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-white transition-colors">QA Play Training</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Mim</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Conecte-se */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/nilsondasilvabrites/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/nilrd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511940825120"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/nilsbrites"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <a
                href="mailto:nilson.brites@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                nilson.brites@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 QA Play. Desenvolvido por Nilson da Silva Brites.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Página Home
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Plataforma #1 em QA Interativo
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Evolua seu{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                QA Game
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforme conhecimento em conquistas. Domine Quality Assurance através de{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">desafios gamificados</span>,{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">certificações reconhecidas</span> e{' '}
              <span className="text-green-600 dark:text-green-400 font-semibold">experiência prática</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/training"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Zap className="w-5 h-5 mr-2" />
                Iniciar Jornada QA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200"
              >
                <User className="w-5 h-5 mr-2" />
                Explorar Portfólio
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Questões Únicas</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">6</div>
                <div className="text-gray-600 dark:text-gray-400">Áreas de Conhecimento</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">∞</div>
                <div className="text-gray-600 dark:text-gray-400">Certificados Válidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Por que escolher o QA Play?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Uma plataforma completa que combina aprendizado, prática e certificação em um ambiente gamificado único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gamificação Inteligente</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sistema de pontuação, badges e certificados que tornam o aprendizado envolvente e motivador.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certificações Reconhecidas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Certificados válidos baseados em padrões internacionais que agregam valor ao seu currículo.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Comunidade Ativa</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conecte-se com outros profissionais de QA e compartilhe conhecimentos e experiências.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para elevar suas habilidades em QA?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a centenas de profissionais que já transformaram suas carreiras com o QA Play.
          </p>
          <Link
            to="/training"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Zap className="w-5 h-5 mr-2" />
            Começar Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// Página QA Play Training
const TrainingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const quizzes = [
    {
      id: 'fundamentos',
      title: 'Fundamentos de Testes',
      description: 'Conceitos essenciais de Quality Assurance',
      subtitle: 'Baseado em padrões internacionais',
      questions: 20,
      duration: 40,
      level: 'Iniciante',
      color: 'from-blue-500 to-blue-600',
      icon: Shield
    },
    {
      id: 'cypress',
      title: 'Cypress Mastery',
      description: 'Testes de UI modernos e eficientes',
      subtitle: 'Framework de nova geração',
      questions: 15,
      duration: 30,
      level: 'Intermediário',
      color: 'from-green-500 to-green-600',
      icon: Zap
    },
    {
      id: 'java',
      title: 'Java Testing Pro',
      description: 'Lógica de programação para testes',
      subtitle: 'Orientado a objetos',
      questions: 15,
      duration: 25,
      level: 'Intermediário',
      color: 'from-orange-500 to-red-600',
      icon: Code
    },
    {
      id: 'javascript',
      title: 'JavaScript Testing',
      description: 'Programação funcional para QA',
      subtitle: 'Linguagem versátil',
      questions: 15,
      duration: 25,
      level: 'Intermediário',
      color: 'from-yellow-500 to-orange-600',
      icon: Code
    },
    {
      id: 'selenium',
      title: 'Selenium Expert',
      description: 'Automação web profissional',
      subtitle: 'Padrão da indústria',
      questions: 15,
      duration: 30,
      level: 'Avançado',
      color: 'from-purple-500 to-purple-600',
      icon: Globe
    },
    {
      id: 'quality-engineering',
      title: 'Quality Engineering',
      description: 'Metodologias e práticas avançadas',
      subtitle: 'DevOps e Agilidade',
      questions: 20,
      duration: 35,
      level: 'Avançado',
      color: 'from-pink-500 to-red-600',
      icon: Cpu
    }
  ];

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      // Aqui seria a integração com o backend
      alert(`Quiz ${selectedQuiz.title} iniciado para ${formData.name}!`);
      setShowModal(false);
      setFormData({ name: '', email: '' });
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Iniciante': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Intermediário': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Avançado': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-8">
            <Trophy className="w-4 h-4 mr-2" />
            Treinamentos Gamificados
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Escolha sua{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Especialização
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cada trilha foi cuidadosamente projetada para elevar suas habilidades em QA. 
            Conquiste certificações e destaque-se no mercado.
          </p>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz) => {
            const Icon = quiz.icon;
            return (
              <div
                key={quiz.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${quiz.color}`}></div>
                
                <div className="p-6">
                  {/* Level Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(quiz.level)}`}>
                      {quiz.level}
                    </span>
                    <div className={`w-12 h-12 bg-gradient-to-br ${quiz.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {quiz.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {quiz.description}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 italic mb-4">
                    {quiz.subtitle}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {quiz.questions} questões
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {quiz.duration} min
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleStartQuiz(quiz)}
                    className={`w-full py-3 px-4 bg-gradient-to-r ${quiz.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Iniciar Desafio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${selectedQuiz.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <selectedQuiz.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedQuiz.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Para iniciar o quiz, precisamos de algumas informações
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={`flex-1 py-3 px-4 bg-gradient-to-r ${selectedQuiz.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200`}
                >
                  Iniciar Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Página Blog
const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Artigos, tutoriais e insights sobre Quality Assurance
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Em Breve
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Estamos preparando conteúdo exclusivo sobre Quality Assurance, 
              automação de testes e as melhores práticas da indústria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Página Sobre Mim
const SobrePage = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const skills = [
    { name: 'Java', level: 85 },
    { name: 'Selenium', level: 90 },
    { name: 'Cypress', level: 80 },
    { name: 'Postman', level: 85 },
    { name: 'Git/GitHub', level: 80 },
    { name: 'MySQL', level: 75 }
  ];

  const contacts = [
    {
      platform: 'LinkedIn',
      handle: 'nilsondasilvabrites',
      url: 'https://www.linkedin.com/in/nilsondasilvabrites/',
      icon: ExternalLink,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      platform: 'GitHub',
      handle: 'nilrd',
      url: 'https://github.com/nilrd',
      icon: ExternalLink,
      color: 'bg-gray-700 hover:bg-gray-600'
    },
    {
      platform: 'WhatsApp',
      handle: '(11) 94082-5120',
      url: 'https://wa.me/5511940825120',
      icon: MessageCircle,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      platform: 'Instagram',
      handle: '@nilsbrites',
      url: 'https://instagram.com/nilsbrites',
      icon: ExternalLink,
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      platform: 'Email',
      handle: 'nilson.brites@gmail.com',
      url: 'mailto:nilson.brites@gmail.com',
      icon: Mail,
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 text-sm font-medium mb-8">
            <User className="w-4 h-4 mr-2" />
            Conheça o Profissional
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Nilson Brites
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Perfil Profissional */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Perfil Profissional</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Profissional hands-on, autodidata e comprometido com o aprendizado contínuo, 
                sempre buscando qualidade e superação de desafios. Com perfil analítico e boa 
                comunicação, atuo como Analista de Testes em times ágeis com framework Scrum, 
                participando de todo o ciclo de desenvolvimento (SDLC).
              </p>
              <p>
                Tenho experiência com testes manuais e automatizados, aplicando técnicas de 
                caixa preta como Particionamento de Equivalência, Análise de Valor Limite, 
                Tabela de Decisão e Transição de Estado, garantindo maior assertividade na 
                cobertura dos testes.
              </p>
            </div>
          </div>

          {/* Habilidades Técnicas */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-orange-600 dark:text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Habilidades Técnicas</h2>
            </div>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experiência Profissional */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experiência Profissional</h2>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              05/2022 - atual
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Analista de Testes de Software
            </h3>
            <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">E2E Coders</p>
            <p className="text-gray-600 dark:text-gray-300">
              Planejamento e execução de testes manuais e automatizados, desenvolvimento de 
              scripts em Gherkin, automação com Java/Selenium, testes de API com Postman.
            </p>
          </div>
        </div>

        {/* Projetos */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projetos Desenvolvidos</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">QA Play</h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm">
                  Em desenvolvimento
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plataforma interativa para aprendizado e prática de Quality Assurance
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-full text-sm">SQLite</span>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Site Toque Ideal</h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm">
                  Concluído
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Desenvolvimento e testes QA completos
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm">Testes Manuais</span>
              </div>
              <a
                href="https://github.com/nilrd/SiteToqueIdeal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver projeto
              </a>
            </div>
          </div>
        </div>

        {/* Formação */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Formação</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ciência da Computação</h3>
              <p className="text-gray-600 dark:text-gray-300">Impacta Tecnologia (Cursando)</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Qualidade de Software</h3>
              <p className="text-gray-600 dark:text-gray-300">E2E Treinamentos</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Back-end Oracle Next Education</h3>
              <p className="text-gray-600 dark:text-gray-300">Alura</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vamos Conversar?</h2>
          <p className="text-blue-100 mb-6">
            Interessado em colaborar ou discutir oportunidades em QA?
          </p>
          <button
            onClick={() => setShowContactModal(true)}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Entrar em Contato
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Vamos Conversar!</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Escolha a melhor forma de entrar em contato</p>
                </div>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.platform}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 ${contact.color} text-white rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <div>
                      <div className="font-semibold">{contact.platform}</div>
                      <div className="text-sm opacity-90">{contact.handle}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Página Contato
const ContatoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria a integração com o backend
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Entre em contato para discutir oportunidades, colaborações ou tirar dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envie uma Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Sua mensagem..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informações de Contato</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">nilson.brites@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                    <p className="text-gray-600 dark:text-gray-300">(11) 94082-5120</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-300">nilsondasilvabrites</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Vamos trabalhar juntos!</h3>
              <p className="text-blue-100 mb-6">
                Estou sempre aberto a novas oportunidades e colaborações interessantes na área de QA.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/nilsondasilvabrites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/nilrd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5511940825120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Principal
const App = () => {
  const [isDark, setIsDark] = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;

