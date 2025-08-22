import React from 'react';
import { Mail, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sobre Mim
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <img 
              src="/images/NilsonBrites1.jpg" 
              alt="Nilson da Silva Brites" 
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-blue-400 dark:border-blue-600"
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nilson da Silva Brites</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Sou um profissional apaixonado por Qualidade de Software, com experiência em diversas metodologias e ferramentas.
              Minha jornada no mundo da tecnologia é impulsionada pela busca contínua por excelência e pela criação de produtos digitais robustos e confiáveis.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Acredito que a qualidade é responsabilidade de todos e que a colaboração é a chave para o sucesso de qualquer projeto.
              Fora do trabalho, sou entusiasta de novas tecnologias, jogos e aprendizado contínuo.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="mailto:nilson.brites@gmail.com" 
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nilsondasilvabrites/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/nilrd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/nilsbrites" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Habilidades (Exemplo) */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Minhas Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Testes Manuais e Exploratórios</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Automação de Testes (Selenium, Cypress)</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Testes de API (Postman, Rest Assured)</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Metodologias Ágeis (Scrum, Kanban)</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">SQL e Banco de Dados</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <ArrowRight className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Integração Contínua (CI/CD)</span>
            </div>
          </div>
        </section>

        {/* Galeria de Fotos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Galeria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover-lift">
              <img 
                src="/images/NilsonBrites1.jpg" 
                alt="Nilson da Silva Brites - Foto 1" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover-lift">
              <img 
                src="/images/NilsonBrites2.jpg" 
                alt="Nilson da Silva Brites - Foto 2" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover-lift">
              <img 
                src="/images/NilsonBrites3.jpg" 
                alt="Nilson da Silva Brites - Foto 3" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Seção de Contato Rápido */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Vamos Conectar?</h2>
          <p className="text-xl mb-6">Estou sempre aberto a novas oportunidades e colaborações.</p>
          <a
            href="/contato"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Entre em Contato
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;


