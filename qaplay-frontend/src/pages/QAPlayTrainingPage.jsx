import React from 'react';
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
  BookOpen
} from 'lucide-react';

const QAPlayTrainingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          QA Play Training
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Aprimore suas habilidades em Quality Assurance com nossos módulos de treinamento interativos e gamificados.
        </p>

        {/* Seção de Módulos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Fundamentos de QA</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Entenda os princípios básicos, ciclo de vida do software e tipos de teste.</p>
            <Link to="/training/fundamentos" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline">
              Iniciar Módulo <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Testes Automatizados</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Aprenda a criar e manter scripts de teste automatizados.</p>
            <Link to="/training/automacao" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline">
              Iniciar Módulo <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
              <Cpu className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Performance e Segurança</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Explore testes de performance, carga e segurança de aplicações.</p>
            <Link to="/training/performance" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline">
              Iniciar Módulo <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Testes Mobile e Web</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Estratégias e ferramentas para testar aplicações em diferentes plataformas.</p>
            <Link to="/training/mobile-web" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline">
              Iniciar Módulo <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Metodologias Ágeis</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">O papel do QA em Scrum, Kanban e outras metodologias ágeis.</p>
            <Link to="/training/agile" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline">
              Iniciar Módulo <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Preparação para Certificações</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Simulados e dicas para certificações como ISTQB e CTFL.</p>
            <Link to="/training/certificacoes" className="text-blue-600 dark:text-blue-400 font-semibold flex items-center hover:underline">
              Iniciar Módulo <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Seção de Benefícios */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Por que treinar com QA Play?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Aprendizado Gamificado</h3>
                <p className="text-gray-600 dark:text-gray-300">Desafios interativos e quizzes que tornam o estudo divertido e eficaz.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Badges e Certificados</h3>
                <p className="text-gray-600 dark:text-gray-300">Conquiste reconhecimento por suas habilidades e adicione ao seu portfólio.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Comunidade Ativa</h3>
                <p className="text-gray-600 dark:text-gray-300">Conecte-se com outros profissionais de QA e troque experiências.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Conteúdo Atualizado</h3>
                <p className="text-gray-600 dark:text-gray-300">Mantenha-se relevante com as últimas tendências e práticas em QA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar sua jornada QA?</h2>
          <p className="text-xl mb-6">Escolha seu primeiro módulo e eleve suas habilidades hoje mesmo!</p>
          <Link
            to="/training/fundamentos"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Zap className="w-5 h-5 mr-2" />
            Começar Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default QAPlayTrainingPage;


