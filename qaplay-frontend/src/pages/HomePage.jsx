import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  TestTube,
  Users,
  Award,
  ArrowRight,
  User,
  Briefcase,
  Target,
  CheckCircle
} from 'lucide-react';
import ContactModal from '../components/ContactModal';

const HomePage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Olá, eu sou{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Nilson Brites
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Especialista em <strong>Quality Assurance</strong> com experiência em automação de testes e 
                metodologias ágeis. Apaixonado por garantir a qualidade 
                de software e criar soluções inovadoras.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/sobre"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <User className="w-5 h-5 mr-2" />
                  Veja meu Currículo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Vamos Conversar
                </button>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Anos na E2E Coders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Principais</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">9+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologias</div>
                </div>
              </div>
            </div>
            
            <div className="lg:text-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-full p-2">
                        <img 
                          src="/images/NilsonBrites1.jpg" 
                          alt="Nilson da Silva Brites - Especialista em QA" 
                          className="w-32 h-32 object-cover rounded-full"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                        <Award className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Nilson da Silva Brites
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      Quality Assurance Specialist
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        Automação
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        Scrum
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                        QA Testing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Minhas Especialidades
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Áreas onde posso agregar valor ao seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Automação de Testes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Desenvolvimento de frameworks de automação robustos e eficientes 
                para garantir qualidade contínua.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Metodologias Ágeis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experiência em Scrum, participação ativa em refinamentos, dailies, 
                retrospectivas e implementação de processos ágeis.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Estratégia de Qualidade
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Definição de estratégias de teste e implementação de processos 
                de qualidade em metodologias ágeis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Alguns dos trabalhos que desenvolvi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Sistema de Corretagem - E2E Coders
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sistema de corretagem imobiliária com funcionalidades avançadas. 
                Responsável por testes manuais, automação com Playwright e Cucumber em ambiente Scrum.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">
                  Playwright
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">
                  Cucumber
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">
                  Scrum
                </span>
              </div>
              <Link
                to="/sobre"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Toque Ideal - Freelancer
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Site completo desenvolvido do zero utilizando HTML, CSS, JavaScript e 
                técnicas de IA. Inclui CMS headless e testes de qualidade.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">
                  HTML/CSS
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">
                  CMS Headless
                </span>
              </div>
              <a
                href="https://www.toqueideal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                Ver Site Live
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Estou sempre aberto a novos desafios e oportunidades de colaboração.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Entre em Contato
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;

