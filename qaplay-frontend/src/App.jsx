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
  Target,
  ExternalLink,
  MessageCircle,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react';

// Importar as novas páginas
import HomePage from './pages/HomePage';
import QAPlayTrainingPage from './pages/QAPlayTrainingPage';
import QuizPage from './pages/QuizPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';


// Hook para gerenciar tema
const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Verificar se estamos no browser
    if (typeof window === 'undefined') return false;
    
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved ? saved === 'dark' : prefersDark;
  });

  useEffect(() => {
    // Garantir que estamos no browser
    if (typeof window === 'undefined') return;
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Aplicar a classe dark no documentElement
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Log para debug
    console.log('Theme changed to:', isDark ? 'dark' : 'light');
    console.log('HTML classes:', root.classList.toString());
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
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Animado */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-float">
              <Target className="w-6 h-6 text-white animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift">
                QA Play
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 animate-float">
                por Nilson Brites
              </span>
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
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover-lift btn-animated ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg animate-pulse-glow'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover-glow'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'animate-float' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover-lift hover-glow"
            >
              {isDark ? (
                <Sun className="w-5 h-5 animate-float text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 animate-float text-blue-500" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover-lift"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 animate-scale-in" />
              ) : (
                <Menu className="w-5 h-5 animate-scale-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-in-up glass dark:glass-dark">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover-lift ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white animate-pulse-glow'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover-glow'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'animate-float' : ''}`} />
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
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">QA Play</h3>
                <p className="text-sm text-gray-400">por Nilson Brites</p>
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
                className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/nilrd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511940825120"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors group"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/nilsbrites"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors group"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
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

const App = () => {
  const [isDark, setIsDark] = useTheme();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/training" element={<QAPlayTrainingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


