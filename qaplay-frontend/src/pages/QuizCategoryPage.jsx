import React, { useState } from 'react';
import { Play, Trophy, Target, Clock, Star, Code, Database, Globe, Zap, GitBranch, TestTube, ArrowRight, BookOpen } from 'lucide-react';
import QuizGame from '../components/QuizGame';

// Importar todos os bancos de questões
import cypressQuestions from '../data/cypress-questions.json';
import javaQAQuestions from '../data/java-qa-questions.json';
import javascriptQAQuestions from '../data/javascript-qa-questions.json';
import seleniumQuestions from '../data/selenium-questions.json';
import agileCICDQuestions from '../data/agile-cicd-questions.json';
import bddTDDQuestions from '../data/bdd-tdd-questions.json';
import performanceQuestions from '../data/performance-testing-questions.json';
import apiTestingQuestions from '../data/api-testing-questions.json';
import allMixedQuestions from '../data/qa-questions-mixed.json';

const QuizCategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameResult, setGameResult] = useState(null);

  const quizCategories = [
    {
      id: 'mixed',
      title: 'Quiz Completo - Mix de Tudo',
      description: 'Questões de todas as categorias e níveis misturadas',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      questions: allMixedQuestions,
      totalQuestions: 20,
      timeLimit: 1200, // 20 minutos
      difficulty: 'Todos os Níveis'
    },
    {
      id: 'cypress',
      title: 'Cypress E2E Testing',
      description: 'Automação de testes end-to-end com Cypress',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      questions: cypressQuestions,
      totalQuestions: 15,
      timeLimit: 900, // 15 minutos
      difficulty: 'Básico ao Avançado'
    },
    {
      id: 'java-qa',
      title: 'Java para QA',
      description: 'Lógica de programação Java voltada para testes',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      questions: javaQAQuestions,
      totalQuestions: 15,
      timeLimit: 900,
      difficulty: 'Básico ao Avançado'
    },
    {
      id: 'javascript-qa',
      title: 'JavaScript para QA',
      description: 'Lógica de programação JavaScript voltada para testes',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      questions: javascriptQAQuestions,
      totalQuestions: 15,
      timeLimit: 900,
      difficulty: 'Básico ao Avançado'
    },
    {
      id: 'selenium',
      title: 'Selenium WebDriver',
      description: 'Automação de testes web com Selenium',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      questions: seleniumQuestions,
      totalQuestions: 15,
      timeLimit: 900,
      difficulty: 'Básico ao Avançado'
    },
    {
      id: 'agile-cicd',
      title: 'Metodologias Ágeis & CI/CD',
      description: 'Scrum, DevOps, Pipelines e Integração Contínua',
      icon: GitBranch,
      color: 'from-indigo-500 to-purple-500',
      questions: agileCICDQuestions,
      totalQuestions: 15,
      timeLimit: 900,
      difficulty: 'Básico ao Avançado'
    },
    {
      id: 'bdd-tdd',
      title: 'BDD & TDD',
      description: 'Desenvolvimento orientado por comportamento e testes',
      icon: TestTube,
      color: 'from-pink-500 to-rose-500',
      questions: bddTDDQuestions,
      totalQuestions: 15,
      timeLimit: 900,
      difficulty: 'Básico ao Avançado'
    },
    {
      id: 'performance',
      title: 'Performance Testing',
      description: 'Testes de carga, stress e performance',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500',
      questions: performanceQuestions,
      totalQuestions: 15,
      timeLimit: 900,
      difficulty: 'Básico ao Avançado'
    },
    {
      id: 'api-testing',
      title: 'API Testing',
      description: 'Testes de APIs REST, GraphQL e Web Services',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500',
      questions: apiTestingQuestions,
      totalQuestions: 15,
      timeLimit: 900,
      difficulty: 'Básico ao Avançado'
    }
  ];

  const handleGameComplete = (result) => {
    setGameStarted(false);
    setGameResult(result);
  };

  const startQuiz = (category) => {
    setSelectedCategory(category);
    setGameStarted(true);
    setGameResult(null);
  };

  const resetGame = () => {
    setGameStarted(false);
    setSelectedCategory(null);
    setGameResult(null);
  };

  if (gameStarted && selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        <QuizGame
          allQuestions={selectedCategory.questions}
          onComplete={handleGameComplete}
          onBack={resetGame}
          category={selectedCategory.id}
          level="mixed"
          totalQuestions={selectedCategory.totalQuestions}
          timeLimit={selectedCategory.timeLimit}
          pointsPerQuestion={20}
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
            <BookOpen className="w-4 h-4" />
            QA Play - Escolha sua Categoria
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Explore Diferentes Áreas do QA
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Escolha uma categoria específica ou teste seus conhecimentos gerais com o quiz completo. 
            Cada categoria oferece questões cuidadosamente elaboradas para diferentes níveis de experiência.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            * Questões baseadas em padrões da indústria e melhores práticas para fins educacionais.<br />
            Badges e certificados são gerados para diversão e aprendizado.
          </p>
        </div>

        {/* Se o jogo terminou, mostrar resultado */}
        {gameResult && (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-12 border border-gray-200 dark:border-gray-700 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Quiz Concluído!</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
              Categoria: <span className="font-bold text-indigo-600 dark:text-indigo-400">{selectedCategory?.title}</span>
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
              Sua Pontuação: <span className="font-bold text-indigo-600 dark:text-indigo-400">{gameResult.score}</span>
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
              Taxa de Acerto: <span className="font-bold text-green-600 dark:text-green-400">{gameResult.accuracy}%</span>
            </p>
            <button
              onClick={() => setGameResult(null)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Escolher Nova Categoria
            </button>
          </div>
        )}

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {category.totalQuestions} questões
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {Math.floor(category.timeLimit / 60)} min
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                      {category.difficulty}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => startQuiz(category)}
                    className={`w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${category.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Iniciar Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Estatísticas Gerais */}
        <div className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Estatísticas do QA Play
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {quizCategories.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categorias</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                {quizCategories.reduce((total, cat) => total + cat.questions.length, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Questões Totais</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Níveis de Dificuldade</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Diversão Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCategoryPage;

