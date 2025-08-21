import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun, Menu, X, Play, Award, BookOpen, User, Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import './App.css';

// Componente Header
const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">QA Play</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-blue-600 transition-colors">Home</a>
            <a href="#training" className="text-foreground hover:text-blue-600 transition-colors">QA Play Training</a>
            <a href="#blog" className="text-foreground hover:text-blue-600 transition-colors">Blog</a>
            <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">Sobre Mim</a>
            <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">Contato</a>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-blue-600 transition-colors">Home</a>
              <a href="#training" className="text-foreground hover:text-blue-600 transition-colors">QA Play Training</a>
              <a href="#blog" className="text-foreground hover:text-blue-600 transition-colors">Blog</a>
              <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">Sobre Mim</a>
              <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Componente Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Domine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">QA</span> Brincando
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Plataforma interativa para aprender e praticar Quality Assurance com quizzes, jogos e certificações
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Começar Quiz ISTQB</span>
            </button>
            <button className="px-8 py-4 border border-border hover:bg-accent text-foreground rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <User className="w-5 h-5" />
              <span>Ver Portfólio</span>
            </button>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-muted-foreground">Questões ISTQB</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-muted-foreground">Jogos Interativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
              <div className="text-muted-foreground">Certificados Válidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente Training Section
const TrainingSection = () => {
  const quizzes = [
    {
      title: "CTFL ISTQB",
      description: "Questões baseadas no syllabus oficial ISTQB v4.0.1",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cypress",
      description: "Testes de UI modernos com Cypress",
      icon: <Play className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Java para Testes",
      description: "Lógica de programação Java aplicada a testes",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "JavaScript para Testes",
      description: "Lógica de programação JavaScript para QA",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Selenium WebDriver",
      description: "Automação de testes web com Selenium",
      icon: <Play className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Qualidade de Software",
      description: "Metodologias Ágeis, CI/CD, BDD, TDD",
      icon: <Award className="w-8 h-8" />,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="training" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">QA Play Training</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda Quality Assurance através de quizzes interativos e obtenha certificações reconhecidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${quiz.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {quiz.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{quiz.title}</h3>
                <p className="text-muted-foreground mb-4">{quiz.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2">
                  <span>Iniciar Quiz</span>
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">QA Play</span>
            </div>
            <p className="text-muted-foreground">
              Plataforma interativa para aprendizado e prática de Quality Assurance
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-blue-600 transition-colors">Home</a>
              <a href="#training" className="block text-muted-foreground hover:text-blue-600 transition-colors">QA Play Training</a>
              <a href="#blog" className="block text-muted-foreground hover:text-blue-600 transition-colors">Blog</a>
              <a href="#about" className="block text-muted-foreground hover:text-blue-600 transition-colors">Sobre Mim</a>
            </div>
          </div>

          {/* Contatos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/in/nilsondasilvabrites/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/nilrd" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://wa.me/5511940825120" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a href="https://instagram.com/nilsbrites" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href="mailto:nilson.brites@gmail.com"
                 className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 QA Play. Desenvolvido por Nilson da Silva Brites. Todos os direitos reservados.
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
