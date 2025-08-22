import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Zap,
  ArrowRight,
  User,
  Target,
  BookOpen,
  Trophy,
  Play,
  Award,
  Users
} from 'lucide-react';

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
              Criado por <strong>Nilson da Silva Brites</strong>, especialista em Quality Assurance. 
              Transforme conhecimento em conhecimento através de{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">desafios gamificados</span>,{" "}
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

      {/* Seção sobre o Criador */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Conheça o Criador
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg">
                  <strong className="text-gray-900 dark:text-white">Nilson da Silva Brites</strong> é um especialista em Quality Assurance 
                  com vasta experiência em metodologias ágeis, automação de testes e liderança de equipes de QA.
                </p>
                <p>
                  Apaixonado por educação e tecnologia, Nilson criou o QA Play para democratizar o conhecimento 
                  em Quality Assurance através de uma abordagem gamificada e interativa.
                </p>
                <p>
                  Sua missão é formar a próxima geração de profissionais de QA, combinando teoria sólida 
                  com prática real do mercado.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Profissionais Treinados</div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/sobre"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <User className="w-5 h-5 mr-2" />
                  Saiba Mais Sobre Mim
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="lg:text-center">
              <div className="relative">
                {/* Card com foto e informações */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    {/* Foto circular com bordas animadas */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-full p-2">
                        <img 
                          src="/images/NilsonBrites1.jpg" 
                          alt="Nilson da Silva Brites - Especialista em QA" 
                          className="w-32 h-32 object-cover rounded-full"
                        />
                      </div>
                      {/* Badge flutuante */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                        <Trophy className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Nome e título */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Nilson da Silva Brites
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      Especialista em Quality Assurance
                    </p>
                    
                    {/* Tags de especialidades */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        Automação
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        Metodologias Ágeis
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                        Liderança
                      </span>
                    </div>
                    
                    {/* Quote inspiracional */}
                    <blockquote className="text-gray-600 dark:text-gray-300 italic text-center mb-6 border-l-4 border-blue-500 pl-4">
                      "A qualidade não é um acidente; é sempre o resultado de um esforço inteligente."
                    </blockquote>
                    
                    {/* Botão de ação */}
                    <Link
                      to="/sobre"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <User className="w-5 h-5 mr-2" />
                      Conheça Minha História
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -left-6 w-6 h-6 bg-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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

export default HomePage;


