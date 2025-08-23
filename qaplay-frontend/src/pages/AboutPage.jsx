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
import ContactModal from '../components/ContactModal';

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
                mentalidade que deve permear todo o ciclo de vida do produto. Tenho experiência em trabalhar 
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
                Analista de Testes de Software
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                E2E Coders • Maio 2022 - Presente
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Planejamento e execução de testes manuais e automatizados com foco na qualidade e cumprimento de requisitos técnicos e funcionais</li>
                <li>• Desenvolvimento de scripts de testes em Step by Step e Gherkin, garantindo cobertura total dos cenários de teste</li>
                <li>• Automação de testes com Java, utilizando frameworks como Selenium, Cucumber e JUnit, organizando pacotes seguindo o padrão Page Objects</li>
                <li>• Realização de testes de API com Postman e gestão de bugs na ferramenta JIRA</li>
                <li>• Gestão de repositórios de testes automatizados no Git e GitHub, assegurando integração e colaboração na equipe</li>
                <li>• Aplicação de técnicas de testes como caixa preta, particionamento de equivalência, análise de valor limite e tabela de decisão</li>
                <li>• Participação ativa em times ágeis com framework Scrum, incluindo refinamento, dailies e retrospectivas</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Desenvolvedor & QA Freelancer
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                Projetos Independentes • 2021 - Presente
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Desenvolvimento completo do site Toque Ideal utilizando HTML, CSS, JavaScript e técnicas de Engenharia de Prompt com IA</li>
                <li>• Implementação de CMS headless para gestão de conteúdo dinâmico</li>
                <li>• Execução de testes manuais e automatizados para garantir qualidade e funcionalidade</li>
                <li>• Responsável por todo o ciclo de desenvolvimento, desde concepção até deploy e manutenção</li>
                <li>• Aplicação de boas práticas de UX/UI e otimização para dispositivos móveis</li>
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
                <li>• Playwright</li>
                <li>• Cypress</li>
                <li>• JUnit</li>
                <li>• Page Object Model</li>
                <li>• Cucumber/Gherkin</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-4">Linguagens</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Java</li>
                <li>• JavaScript</li>
                <li>• HTML/CSS</li>
                <li>• SQL (MySQL)</li>
                <li>• Gherkin</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-4">Ferramentas</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• JIRA</li>
                <li>• Qase</li>
                <li>• Postman</li>
                <li>• Git/GitHub</li>
                <li>• MySQL</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-yellow-700 dark:text-yellow-300 mb-4">Metodologias</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Scrum</li>
                <li>• Shift Left Testing</li>
                <li>• Test-Driven Development</li>
                <li>• Behavior-Driven Development</li>
                <li>• Continuous Integration</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-700 dark:text-red-300 mb-4">Técnicas de Teste</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Caixa Preta/Branca</li>
                <li>• Particionamento de Equivalência</li>
                <li>• Análise de Valor Limite</li>
                <li>• Tabela de Decisão</li>
                <li>• Transição de Estados</li>
                <li>• Testes de Regressão</li>
              </ul>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Comunicação Efetiva</li>
                <li>• Pensamento Analítico</li>
                <li>• Resolução de Problemas</li>
                <li>• Trabalho em Equipe</li>
                <li>• Aprendizado Contínuo</li>
                <li>• Atenção aos Detalhes</li>
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
                    Ciência da Computação (Em andamento)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Impacta Tecnologia
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-green-500" />
                Certificações & Cursos
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Certificação em Qualidade de Software e Lógica de Programação
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    E2E Treinamentos
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Formação Back-end Oracle Next Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Alura
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Formação: Iniciante em Programação
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Alura
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Lógica de Programação com JavaScript
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Alura
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    HTML e CSS
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Alura
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Git e GitHub: Colaboração em Projetos
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Alura
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">QA Play</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Plataforma interativa para aprendizado de QA.</p>
              <a 
                href="https://github.com/nilrd/QA-Play" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline flex items-center"
              >
                Ver Projeto <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Toque Ideal</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Website desenvolvido com HTML, CSS, JS e IA.</p>
              <a 
                href="https://github.com/nilrd/Toque-Ideal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline flex items-center"
              >
                Ver Projeto <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Pronto para Elevarmos a Qualidade Juntos?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Se você busca um especialista em QA dedicado e apaixonado por inovação, 
            estou pronto para contribuir com o sucesso do seu próximo projeto.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            Entre em Contato
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </section>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AboutPage;


