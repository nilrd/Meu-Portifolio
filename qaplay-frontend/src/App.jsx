import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun, Menu, X, Play, Award, BookOpen, User, Mail, Github, Linkedin, Instagram, MessageCircle, Code, Zap, Target, Trophy, Star, ArrowRight, CheckCircle, MapPin, Calendar, Briefcase, GraduationCap, Download, ExternalLink } from 'lucide-react';
import './App.css';

// Componente Modal de Contato
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contacts = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "nilsondasilvabrites",
      url: "https://www.linkedin.com/in/nilsondasilvabrites/",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "nilrd",
      url: "https://github.com/nilrd",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "(11) 94082-5120",
      url: "https://wa.me/5511940825120",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@nilsbrites",
      url: "https://instagram.com/nilsbrites",
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "nilson.brites@gmail.com",
      url: "mailto:nilson.brites@gmail.com",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Vamos Conversar!</h3>
          <p className="text-muted-foreground">Escolha a melhor forma de entrar em contato</p>
        </div>

        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-4 rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${contact.color}`}
            >
              <div className="flex-shrink-0">
                {contact.icon}
              </div>
              <div className="flex-grow">
                <div className="font-semibold">{contact.label}</div>
                <div className="text-sm opacity-90">{contact.value}</div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

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
            {[
              { name: 'Home', id: 'home' },
              { name: 'Treinamentos', id: 'treinamentos' },
              { name: 'Blog', id: 'blog' },
              { name: 'Sobre', id: 'sobre' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-foreground hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
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
              {[
                { name: 'Home', id: 'home' },
                { name: 'Treinamentos', id: 'treinamentos' },
                { name: 'Blog', id: 'blog' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Contato', id: 'contato' }
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-blue-600 transition-colors py-2 font-medium"
                >
                  {item.name}
                </button>
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
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
              <button 
                onClick={() => scrollToSection('treinamentos')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <Zap className="w-6 h-6" />
                  <span>Iniciar Jornada QA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('sobre')}
                className="group px-8 py-4 border-2 border-border hover:border-blue-600 text-foreground rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
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

// Seção Sobre Mim
const AboutSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const experiences = [
    {
      period: "05/2022 - atual",
      company: "E2E Coders",
      role: "Analista de Testes de Software",
      description: "Planejamento e execução de testes manuais e automatizados, desenvolvimento de scripts em Gherkin, automação com Java/Selenium, testes de API com Postman."
    }
  ];

  const skills = [
    { name: "Java", level: 85, color: "bg-orange-500" },
    { name: "Selenium", level: 90, color: "bg-green-500" },
    { name: "Cypress", level: 80, color: "bg-blue-500" },
    { name: "Postman", level: 85, color: "bg-purple-500" },
    { name: "Git/GitHub", level: 80, color: "bg-gray-600" },
    { name: "MySQL", level: 75, color: "bg-blue-600" }
  ];

  const projects = [
    {
      name: "QA Play",
      description: "Plataforma interativa para aprendizado e prática de Quality Assurance",
      tech: ["React", "Flask", "Python", "SQLite"],
      status: "Em desenvolvimento"
    },
    {
      name: "Site Toque Ideal",
      description: "Desenvolvimento e testes QA completos",
      tech: ["HTML", "CSS", "JavaScript", "Testes Manuais"],
      url: "https://www.toqueideal.com/",
      status: "Concluído"
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
              <User className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Conheça o Profissional
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
              Sobre <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Nilson Brites</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Perfil Principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-blue-600" />
                  Perfil Profissional
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Profissional hands-on, autodidata e comprometido com o aprendizado contínuo, sempre buscando qualidade e superação de desafios. 
                  Com perfil analítico e boa comunicação, atuo como Analista de Testes em times ágeis com framework Scrum, participando de todo o ciclo de desenvolvimento (SDLC).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Tenho experiência com testes manuais e automatizados, aplicando técnicas de caixa preta como Particionamento de Equivalência, 
                  Análise de Valor Limite, Tabela de Decisão e Transição de Estado, garantindo maior assertividade na cobertura dos testes.
                </p>
              </div>

              {/* Experiência */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-purple-600" />
                  Experiência Profissional
                </h3>
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                    <p className="text-lg text-purple-600 mb-3">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>

              {/* Projetos */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3 text-emerald-600" />
                  Projetos Desenvolvidos
                </h3>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-foreground">{project.name}</h4>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.status === 'Concluído' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Ver projeto</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Target className="w-5 h-5 mr-3 text-orange-600" />
                  Habilidades Técnicas
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formação */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-3 text-green-600" />
                  Formação
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground">Ciência da Computação</h4>
                    <p className="text-muted-foreground">Impacta Tecnologia (Cursando)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Qualidade de Software</h4>
                    <p className="text-muted-foreground">E2E Treinamentos</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Back-end Oracle Next Education</h4>
                    <p className="text-muted-foreground">Alura</p>
                  </div>
                </div>
              </div>

              {/* CTA Contato */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-4">Vamos Conversar?</h3>
                <p className="text-blue-100 mb-6">
                  Interessado em colaborar ou discutir oportunidades em QA?
                </p>
                <button 
                  onClick={() => setContactModalOpen(true)}
                  className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-2xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Entrar em Contato</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </section>
  );
};

// Footer Moderno
const Footer = () => {
  return (
    <footer id="contato" className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
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
              <AboutSection />
            </>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

