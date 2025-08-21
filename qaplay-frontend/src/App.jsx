import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun, Menu, X, Play, Award, BookOpen, User, Mail, Github, Linkedin, Instagram, MessageCircle, Code, Zap, Target, Trophy, Star, ArrowRight, CheckCircle } from 'lucide-react';
import './App.css';

// Componente Header Inovador
const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Inovador */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">Q</span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                QA Play
              </span>
              <div className="text-xs text-muted-foreground">Interactive Learning</div>
            </div>
          </div>

          {/* Navigation Moderna */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Home', 'Treinamentos', 'Blog', 'Sobre', 'Contato'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative group text-foreground hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-secondary/50 hover:bg-accent transition-all duration-300 hover:scale-110"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-secondary/50 hover:bg-accent transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-border pt-6">
            <div className="flex flex-col space-y-4">
              {['Home', 'Treinamentos', 'Blog', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-foreground hover:text-blue-600 transition-colors py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Revolucionário
const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { number: "500+", label: "Questões Únicas", icon: <Target className="w-6 h-6" /> },
    { number: "6", label: "Áreas de Conhecimento", icon: <BookOpen className="w-6 h-6" /> },
    { number: "∞", label: "Certificados Válidos", icon: <Trophy className="w-6 h-6" /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Título Principal */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Plataforma #1 em QA Interativo
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block text-foreground">Evolua seu</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                QA Game
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Transforme conhecimento em conquistas. Domine Quality Assurance através de 
              <span className="text-blue-600 font-semibold"> desafios gamificados</span>, 
              <span className="text-purple-600 font-semibold"> certificações reconhecidas</span> e 
              <span className="text-emerald-600 font-semibold"> experiência prática</span>.
            </p>

            {/* CTAs Inovadores */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <Zap className="w-6 h-6" />
                  <span>Iniciar Jornada QA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-border hover:border-blue-600 text-foreground rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <div className="flex items-center space-x-3">
                  <User className="w-6 h-6" />
                  <span>Explorar Portfólio</span>
                </div>
              </button>
            </div>
          </div>

          {/* Stats Animadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-3xl transition-all duration-500 ${
                  currentStat === index 
                    ? 'bg-white dark:bg-gray-800 shadow-2xl scale-105 border-2 border-blue-200 dark:border-blue-800' 
                    : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                  currentStat === index 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-black mb-2 transition-colors duration-300 ${
                  currentStat === index ? 'text-blue-600' : 'text-foreground'
                }`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Training Section Inovadora
const TrainingSection = () => {
  const [hoveredQuiz, setHoveredQuiz] = useState(null);
  
  const quizzes = [
    {
      id: 'fundamentals',
      title: "Fundamentos de Testes",
      description: "Conceitos essenciais de Quality Assurance",
      note: "Baseado em padrões internacionais",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-50 dark:bg-blue-900/20",
      level: "Iniciante",
      questions: 20,
      time: 40
    },
    {
      id: 'cypress',
      title: "Cypress Mastery",
      description: "Testes de UI modernos e eficientes",
      note: "Framework de nova geração",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "bg-green-50 dark:bg-green-900/20",
      level: "Intermediário",
      questions: 15,
      time: 30
    },
    {
      id: 'java',
      title: "Java Testing Pro",
      description: "Lógica de programação para testes",
      note: "Orientado a objetos",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      bgPattern: "bg-orange-50 dark:bg-orange-900/20",
      level: "Intermediário",
      questions: 15,
      time: 25
    },
    {
      id: 'javascript',
      title: "JavaScript Testing",
      description: "Programação funcional para QA",
      note: "Linguagem versátil",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500",
      bgPattern: "bg-yellow-50 dark:bg-yellow-900/20",
      level: "Intermediário",
      questions: 15,
      time: 25
    },
    {
      id: 'selenium',
      title: "Selenium Expert",
      description: "Automação web profissional",
      note: "Padrão da indústria",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-purple-50 dark:bg-purple-900/20",
      level: "Avançado",
      questions: 15,
      time: 30
    },
    {
      id: 'quality',
      title: "Quality Engineering",
      description: "Metodologias e práticas avançadas",
      note: "DevOps e Agilidade",
      icon: <Trophy className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgPattern: "bg-red-50 dark:bg-red-900/20",
      level: "Avançado",
      questions: 20,
      time: 35
    }
  ];

  return (
    <section id="treinamentos" className="py-24 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900/50">
      <div className="container mx-auto px-6">
        {/* Header da Seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Treinamentos Gamificados
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Escolha sua <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Especialização</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada trilha foi cuidadosamente projetada para elevar suas habilidades em QA. 
            Conquiste certificações e destaque-se no mercado.
          </p>
        </div>

        {/* Grid de Quizzes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {quizzes.map((quiz, index) => (
            <div 
              key={quiz.id}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${quiz.bgPattern}`}
              onMouseEnter={() => setHoveredQuiz(index)}
              onMouseLeave={() => setHoveredQuiz(null)}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${quiz.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Level Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${quiz.gradient} text-white`}>
                    {quiz.level}
                  </span>
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${quiz.gradient} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {quiz.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {quiz.title}
                </h3>
                
                <p className="text-muted-foreground mb-2 leading-relaxed">
                  {quiz.description}
                </p>
                
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-6 italic">
                  {quiz.note}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>{quiz.questions} questões</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="w-4 h-4" />
                    <span>{quiz.time} min</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${quiz.gradient} transform group-hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2`}>
                  <Play className="w-5 h-5" />
                  <span>Iniciar Desafio</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredQuiz === index ? 'translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Moderno
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">Q</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  QA Play
                </span>
                <div className="text-sm text-gray-400">Interactive Learning</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Revolucionando o aprendizado em Quality Assurance através de experiências 
              gamificadas e certificações reconhecidas pela indústria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Navegação</h3>
            <div className="space-y-3">
              {['Home', 'Treinamentos', 'Blog', 'Sobre', 'Contato'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`} 
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Conecte-se</h3>
            <div className="space-y-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://www.linkedin.com/in/nilsondasilvabrites/" },
                { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/nilrd" },
                { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", url: "https://wa.me/5511940825120" },
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram", url: "https://instagram.com/nilsbrites" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", url: "mailto:nilson.brites@gmail.com" }
              ].map((contact) => (
                <a 
                  key={contact.label}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 QA Play. Desenvolvido com ❤️ por{' '}
            <span className="text-blue-400 font-semibold">Nilson da Silva Brites</span>. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Componente Principal
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <TrainingSection />
            </>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

