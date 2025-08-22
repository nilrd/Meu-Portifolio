import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Trophy, Star, Play, ArrowLeft } from 'lucide-react';
import QuizGame from '../components/QuizGame';
import qaQuestions from '../data/qa-questions.json';

const QuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [gameResult, setGameResult] = useState(null);

  const categories = {
    fundamentos: {
      name: 'Fundamentos de QA',
      description: 'Conceitos básicos de Quality Assurance, processos e metodologias.',
      icon: '🎯',
      color: 'blue'
    },
    automacao: {
      name: 'Automação de Testes',
      description: 'Ferramentas, frameworks e boas práticas de automação.',
      icon: '🤖',
      color: 'purple'
    }
  };

  const levels = {
    basico: {
      name: 'Básico',
      description: 'Para iniciantes em QA',
      color: 'green',
      icon: '📚'
    },
    intermediario: {
      name: 'Intermediário',
      description: 'Para profissionais com experiência',
      color: 'yellow',
      icon: '⚡'
    },
    avancado: {
      name: 'Avançado',
      description: 'Para especialistas em QA',
      color: 'red',
      icon: '🚀'
    },
    mixed: {
      name: 'Níveis Mistos',
      description: 'Mistura de questões básicas, intermediárias e avançadas',
      color: 'purple',
      icon: '🎲'
    }
  };

  const handleGameComplete = (result) => {
    setGameResult(result);
    // Aqui você pode salvar o resultado no localStorage ou enviar para uma API
    const savedResults = JSON.parse(localStorage.getItem('qaPlayResults') || '[]');
    savedResults.push({
      ...result,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('qaPlayResults', JSON.stringify(savedResults));
  };

  const resetGame = () => {
    setSelectedCategory(null);
    setSelectedLevel(null);
    setGameResult(null);
  };

  // Se um jogo está em andamento
  if (selectedCategory && selectedLevel && !gameResult) {
    let questions;
    
    if (selectedLevel === 'mixed') {
      // Para níveis mistos, combinar todas as questões da categoria
      const allQuestions = [];
      Object.keys(qaQuestions[selectedCategory]).forEach(level => {
        qaQuestions[selectedCategory][level].forEach(q => {
          allQuestions.push({ ...q, level });
        });
      });
      questions = allQuestions;
    } else {
      questions = qaQuestions[selectedCategory][selectedLevel];
    }
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={resetGame}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Jogos
            </button>
          </div>
          
          <QuizGame
            category={categories[selectedCategory].name}
            level={selectedLevel}
            questions={questions}
            onComplete={handleGameComplete}
          />
        </div>
      </div>
    );
  }

  // Se selecionou categoria mas não o nível
  if (selectedCategory && !selectedLevel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar às Categorias
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{categories[selectedCategory].icon}</div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {categories[selectedCategory].name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {categories[selectedCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(levels).map(([levelKey, level]) => {
              const questionsCount = qaQuestions[selectedCategory][levelKey]?.length || 0;
              const maxPoints = qaQuestions[selectedCategory][levelKey]?.reduce((sum, q) => sum + q.points, 0) || 0;
              
              return (
                <div
                  key={levelKey}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedLevel(levelKey)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{level.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {level.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {level.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{questionsCount}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Questões</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{maxPoints}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Pontos</div>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                      <Play className="w-5 h-5 mr-2" />
                      Iniciar Quiz
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Página principal de seleção de categoria
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Jogos Educacionais de QA
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              QA Play Games
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Teste e aprimore seus conhecimentos em Quality Assurance através de jogos interativos. 
            Ganhe badges, compete com outros profissionais e evolua suas habilidades!
          </p>

          <div className="text-xs text-gray-500 dark:text-gray-400 mb-8">
            * As questões são inspiradas em padrões internacionais como ISTQB e CTFL para fins educacionais.
            <br />
            Não somos uma escola certificadora - os badges são gerados para diversão e aprendizado.
          </div>
        </div>

        {/* Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(categories).map(([categoryKey, category]) => (
            <div
              key={categoryKey}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory(categoryKey)}
            >
              <div className="text-center">
                <div className="text-6xl mb-6">{category.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {category.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(levels).map(([levelKey, level]) => {
                    const questionsCount = qaQuestions[categoryKey][levelKey]?.length || 0;
                    return (
                      <div key={levelKey} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{questionsCount}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{level.name}</div>
                      </div>
                    );
                  })}
                </div>
                
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Target className="w-5 h-5 mr-2" />
                  Escolher Nível
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Suas Estatísticas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Badges Conquistados</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Target className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Quizzes Completados</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Star className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pontos Totais</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">0%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Taxa de Acerto</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

