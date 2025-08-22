import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  ArrowRight, 
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Users,
  Target,
  Calendar,
  MapPin,
  Heart
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sobre Mim
        </h1>

        {/* Seção Principal */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/images/NilsonBrites1.jpg" 
                alt="Nilson da Silva Brites" 
                className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-blue-400 dark:border-blue-600"
              />
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Nilson da Silva Brites
              </h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                Quality Assurance Specialist & Tech Enthusiast
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  <span>São Paulo, Brasil</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  <span>5+ anos de experiência</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Especialista em QA</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  <span>Apaixonado por qualidade</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Sou um profissional apaixonado por Quality Assurance com mais de 5 anos de experiência 
                no desenvolvimento e implementação de estratégias de teste que garantem a entrega de 
                software de alta qualidade. Minha jornada na tecnologia começou com curiosidade sobre 
                como as coisas funcionam e evoluiu para uma carreira dedicada a garantir que funcionem perfeitamente.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Acredito firmemente que a qualidade não é apenas uma fase do desenvolvimento, mas uma 
                mentalidade que deve permear todo o ciclo de vida do produto. Tenho experiência em liderar 
                equipes, implementar processos ágeis e criar frameworks de automação que aumentam 
                significativamente a eficiência e confiabilidade dos testes.
              </p>

              <div className="flex justify-center lg:justify-start space-x-4">
                <a 
                  href="mailto:nilson.brites@gmail.com" 
                  className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors hover:scale-110 transform"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nilsondasilvabrites/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors hover:scale-110 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/nilrd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors hover:scale-110 transform"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://instagram.com/nilsbrites" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors hover:scale-110 transform"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experiência Profissional */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center">
            <Briefcase className="w-8 h-8 mr-3 text-blue-500" />
            Experiência Profissional
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Senior QA Analyst
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Tech Solutions Inc. • 2022 - Presente
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Liderança de equipe de 5 analistas de QA em projetos de grande escala</li>
                <li>• Implementação de framework de automação que reduziu tempo de testes em 60%</li>
                <li>• Definição de estratégias de teste para aplicações web e mobile</li>
                <li>• Mentoria de novos membros da equipe e disseminação de boas práticas</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                QA Analyst
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                Digital Innovations Ltd. • 2020 - 2022
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Desenvolvimento e execução de planos de teste para aplicações críticas</li>
                <li>• Automação de testes de API usando Postman e Rest Assured</li>
                <li>• Colaboração estreita com equipes de desenvolvimento em metodologia Scrum</li>
                <li>• Identificação e documentação de mais de 500 bugs críticos</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Junior QA Tester
              </h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                StartUp Ventures • 2019 - 2020
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Execução de testes manuais e exploratórios em aplicações web</li>
                <li>• Criação de casos de teste detalhados e documentação de defeitos</li>
                <li>• Participação ativa em cerimônias ágeis e melhoria contínua</li>
                <li>• Aprendizado e aplicação de ferramentas de automação básicas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Habilidades Técnicas */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center">
            <Code className="w-8 h-8 mr-3 text-blue-500" />
            Habilidades Técnicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-4">Automação</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Selenium WebDriver</li>
                <li>• Cypress</li>
                <li>• TestNG/JUnit</li>
                <li>• Page Object Model</li>
                <li>• Data-Driven Testing</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-4">Linguagens</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Java</li>
                <li>• Python</li>
                <li>• JavaScript</li>
                <li>• SQL</li>
                <li>• HTML/CSS</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-4">Ferramentas</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Postman</li>
                <li>• JIRA</li>
                <li>• Git/GitHub</li>
                <li>• Jenkins</li>
                <li>• Docker</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-yellow-700 dark:text-yellow-300 mb-4">Metodologias</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Scrum</li>
                <li>• Kanban</li>
                <li>• Test-Driven Development</li>
                <li>• Behavior-Driven Development</li>
                <li>• Continuous Integration</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-700 dark:text-red-300 mb-4">Tipos de Teste</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Testes Funcionais</li>
                <li>• Testes de API</li>
                <li>• Testes de Performance</li>
                <li>• Testes de Segurança</li>
                <li>• Testes de Usabilidade</li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Liderança de Equipe</li>
                <li>• Comunicação Efetiva</li>
                <li>• Pensamento Analítico</li>
                <li>• Resolução de Problemas</li>
                <li>• Mentoria</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Formação e Certificações */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-500" />
            Formação & Certificações
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-500" />
                Formação Acadêmica
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Tecnologia em Análise e Desenvolvimento de Sistemas
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Universidade Tecnológica • 2017-2019
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Curso Técnico em Informática
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    ETEC • 2015-2016
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-green-500" />
                Certificações
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    ISTQB Foundation Level
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    International Software Testing Qualifications Board • 2020
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Scrum Master Certified
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Scrum Alliance • 2021
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Selenium WebDriver Certification
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Test Automation University • 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos e Conquistas */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center">
            <Target className="w-8 h-8 mr-3 text-blue-500" />
            Projetos & Conquistas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                QA Play Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Desenvolvimento de plataforma interativa para ensino de QA através de jogos 
                educacionais, combinando teoria e prática de forma gamificada.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Framework de Automação
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Criação de framework robusto para automação de testes que aumentou 
                a cobertura de testes em 80% e reduziu o tempo de execução em 60%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">
                  Selenium
                </span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm">
                  Java
                </span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">
                  TestNG
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-gray-700 dark:text-gray-300">Bugs Identificados</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
              <div className="text-gray-700 dark:text-gray-300">Projetos Concluídos</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
              <div className="text-gray-700 dark:text-gray-300">Pessoas Mentoradas</div>
            </div>
          </div>
        </section>

        {/* Interesses Pessoais */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center">
            <Heart className="w-8 h-8 mr-3 text-red-500" />
            Interesses Pessoais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gaming</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Apaixonado por jogos, especialmente RPGs e estratégia
              </p>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Aprendizado</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sempre estudando novas tecnologias e metodologias
              </p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="text-4xl mb-3">🏃‍♂️</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Esportes</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Corrida e academia para manter corpo e mente saudáveis
              </p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Música</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Rock, eletrônica e música instrumental para programar
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Vamos Conectar?</h2>
          <p className="text-xl mb-6">
            Estou sempre aberto a novas oportunidades, colaborações e conversas interessantes sobre tecnologia e qualidade.
          </p>
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

