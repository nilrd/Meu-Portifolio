# Banco de Questões - Fundamentos de Testes

## Questões Nível K1 (Conhecimento)

### Questão 1
**Tópico:** Conceitos Básicos de Teste
**Pergunta:** Qual é o principal objetivo dos testes de software?

A) Provar que o software não possui defeitos
B) Encontrar todos os defeitos existentes no software
C) Reduzir o risco de falhas em produção e fornecer informações sobre a qualidade
D) Garantir que o software atenda a todos os requisitos funcionais

**Resposta Correta:** C
**Explicação:** O principal objetivo dos testes é reduzir o risco de falhas em produção e fornecer informações sobre a qualidade do software. Não é possível provar a ausência de defeitos ou encontrar todos os defeitos existentes.

### Questão 2
**Tópico:** Princípios de Teste
**Pergunta:** Qual princípio de teste afirma que "testes mostram a presença de defeitos, não sua ausência"?

A) Teste exaustivo é impossível
B) Testes mostram a presença de defeitos
C) Agrupamento de defeitos
D) Paradoxo do pesticida

**Resposta Correta:** B
**Explicação:** Este é o primeiro princípio fundamental de teste, estabelecendo que os testes podem revelar defeitos, mas não podem provar que não existem defeitos.

### Questão 3
**Tópico:** Processo de Teste
**Pergunta:** Em qual atividade do processo de teste são definidos os critérios de entrada e saída?

A) Planejamento de teste
B) Monitoramento e controle de teste
C) Análise de teste
D) Implementação de teste

**Resposta Correta:** A
**Explicação:** Durante o planejamento de teste são definidos os critérios de entrada e saída, além da estratégia e abordagem de teste.

### Questão 4
**Tópico:** Níveis de Teste
**Pergunta:** Qual nível de teste foca na verificação das interfaces entre componentes ou sistemas?

A) Teste de componente
B) Teste de integração
C) Teste de sistema
D) Teste de aceite

**Resposta Correta:** B
**Explicação:** O teste de integração foca especificamente na verificação das interfaces e interações entre componentes ou sistemas.

### Questão 5
**Tópico:** Tipos de Teste
**Pergunta:** Qual tipo de teste verifica se o sistema pode lidar com a carga esperada?

A) Teste funcional
B) Teste de usabilidade
C) Teste de performance
D) Teste de segurança

**Resposta Correta:** C
**Explicação:** O teste de performance verifica características como capacidade de carga, tempo de resposta e uso de recursos.

## Questões Nível K2 (Compreensão)

### Questão 6
**Tópico:** Técnicas de Teste
**Pergunta:** Ao aplicar a técnica de particionamento de equivalência, como devemos tratar um campo que aceita valores de 1 a 100?

A) Testar apenas os valores 1 e 100
B) Testar valores válidos (1-100) e inválidos (menor que 1 e maior que 100)
C) Testar todos os valores de 1 a 100
D) Testar apenas valores no meio do intervalo

**Resposta Correta:** B
**Explicação:** O particionamento de equivalência divide os dados em classes válidas e inválidas. Para o intervalo 1-100, testaríamos valores válidos (ex: 50) e inválidos (ex: 0, 101).

### Questão 7
**Tópico:** Análise de Valor Limite
**Pergunta:** Para um campo que aceita valores de 10 a 50, quais valores devem ser testados usando análise de valor limite?

A) 9, 10, 50, 51
B) 10, 30, 50
C) 1, 25, 100
D) 9, 11, 49, 51

**Resposta Correta:** A
**Explicação:** A análise de valor limite testa os valores nos limites e imediatamente fora dos limites: 9 (inválido), 10 (limite inferior válido), 50 (limite superior válido), 51 (inválido).

### Questão 8
**Tópico:** Teste Caixa Branca vs Caixa Preta
**Pergunta:** Qual característica diferencia o teste caixa branca do teste caixa preta?

A) O teste caixa branca é mais eficaz
B) O teste caixa branca requer conhecimento da estrutura interna do código
C) O teste caixa preta encontra mais defeitos
D) O teste caixa preta é mais rápido de executar

**Resposta Correta:** B
**Explicação:** O teste caixa branca (estrutural) requer conhecimento da estrutura interna do código, enquanto o caixa preta (funcional) foca apenas nas entradas e saídas.

### Questão 9
**Tópico:** Defeitos e Falhas
**Pergunta:** Qual é a diferença entre um defeito e uma falha?

A) Não há diferença, são sinônimos
B) Defeito é no código, falha é o comportamento observado
C) Falha é mais grave que defeito
D) Defeito ocorre em produção, falha em teste

**Resposta Correta:** B
**Explicação:** Defeito (bug) é um problema no código ou documentação. Falha é o comportamento incorreto observado quando o defeito é executado.

### Questão 10
**Tópico:** Critérios de Cobertura
**Pergunta:** O que significa atingir 100% de cobertura de decisão?

A) Todos os caminhos possíveis foram testados
B) Todas as linhas de código foram executadas
C) Todas as decisões (verdadeiro/falso) foram testadas
D) Todos os defeitos foram encontrados

**Resposta Correta:** C
**Explicação:** Cobertura de decisão significa que todas as decisões no código foram testadas tanto para resultado verdadeiro quanto falso.

## Questões Nível K3 (Aplicação)

### Questão 11
**Tópico:** Aplicação de Técnicas
**Pergunta:** Um sistema de login permite 3 tentativas antes de bloquear a conta. Usando técnicas de teste, quais cenários você testaria?

A) Apenas login correto
B) Login correto, 1 tentativa incorreta, 3 tentativas incorretas, 4 tentativas incorretas
C) Apenas 3 tentativas incorretas
D) Login com diferentes navegadores

**Resposta Correta:** B
**Explicação:** Devemos testar o comportamento normal (login correto), valores limite (exatamente 3 tentativas) e valores inválidos (mais de 3 tentativas).

### Questão 12
**Tópico:** Priorização de Testes
**Pergunta:** Em um projeto com prazo apertado, como você priorizaria os testes?

A) Executar todos os testes planejados
B) Focar nos testes de funcionalidades críticas e de alto risco
C) Executar apenas testes automatizados
D) Testar apenas as funcionalidades novas

**Resposta Correta:** B
**Explicação:** Com recursos limitados, a priorização deve focar nas funcionalidades críticas para o negócio e áreas de maior risco.

### Questão 13
**Tópico:** Análise de Risco
**Pergunta:** Qual fator é mais importante ao avaliar o risco de uma funcionalidade?

A) Complexidade técnica apenas
B) Probabilidade de falha e impacto no negócio
C) Tempo de desenvolvimento
D) Número de desenvolvedores envolvidos

**Resposta Correta:** B
**Explicação:** O risco é calculado considerando a probabilidade de falha multiplicada pelo impacto que essa falha teria no negócio.

### Questão 14
**Tópico:** Estratégia de Teste
**Pergunta:** Para um e-commerce, qual seria a estratégia de teste mais apropriada para o módulo de pagamento?

A) Apenas testes funcionais básicos
B) Testes funcionais, segurança, performance e usabilidade
C) Apenas testes de segurança
D) Apenas testes automatizados

**Resposta Correta:** B
**Explicação:** O módulo de pagamento é crítico e requer múltiplos tipos de teste: funcional (processamento correto), segurança (proteção de dados), performance (tempo de resposta) e usabilidade (experiência do usuário).

### Questão 15
**Tópico:** Métricas de Teste
**Pergunta:** Se em um projeto foram executados 100 casos de teste, 85 passaram e 15 falharam, qual é a taxa de aprovação?

A) 15%
B) 85%
C) 100%
D) Não é possível calcular

**Resposta Correta:** B
**Explicação:** Taxa de aprovação = (Casos que passaram / Total de casos) × 100 = (85/100) × 100 = 85%

## Questões Avançadas

### Questão 16
**Tópico:** Teste Baseado em Risco
**Pergunta:** Em uma abordagem de teste baseada em risco, como você determinaria a intensidade de teste para cada funcionalidade?

A) Todas as funcionalidades recebem a mesma intensidade
B) Baseado na complexidade do código apenas
C) Proporcional ao nível de risco (probabilidade × impacto)
D) Baseado na preferência da equipe

**Resposta Correta:** C
**Explicação:** No teste baseado em risco, a intensidade de teste é proporcional ao nível de risco, que é calculado multiplicando a probabilidade de falha pelo impacto no negócio.

### Questão 17
**Tópico:** Automação de Testes
**Pergunta:** Qual cenário é mais adequado para automação de testes?

A) Testes exploratórios
B) Testes de usabilidade
C) Testes de regressão repetitivos
D) Testes de primeira execução

**Resposta Correta:** C
**Explicação:** Testes de regressão que são executados repetidamente são ideais para automação, pois oferecem melhor retorno sobre investimento.

### Questão 18
**Tópico:** Gestão de Defeitos
**Pergunta:** Qual informação é mais importante ao reportar um defeito?

A) Apenas a descrição do problema
B) Passos para reproduzir, resultado esperado vs obtido, ambiente
C) Apenas o resultado obtido
D) Apenas a severidade

**Resposta Correta:** B
**Explicação:** Um bom reporte de defeito deve incluir passos claros para reprodução, resultado esperado vs obtido, e informações do ambiente para facilitar a correção.

### Questão 19
**Tópico:** Teste de Aceite
**Pergunta:** Qual é a principal diferença entre teste de aceite do usuário (UAT) e teste de sistema?

A) UAT é executado pelos usuários finais para validar se o sistema atende às necessidades de negócio
B) UAT é mais técnico que teste de sistema
C) Não há diferença significativa
D) UAT é executado apenas por testadores

**Resposta Correta:** A
**Explicação:** UAT é executado pelos usuários finais ou representantes do negócio para validar se o sistema atende às necessidades reais de negócio, enquanto teste de sistema verifica requisitos técnicos.

### Questão 20
**Tópico:** Melhoria Contínua
**Pergunta:** Como uma equipe pode melhorar continuamente seu processo de teste?

A) Mantendo sempre os mesmos processos
B) Coletando métricas, analisando resultados e implementando melhorias
C) Aumentando apenas o número de testadores
D) Focando apenas em automação

**Resposta Correta:** B
**Explicação:** A melhoria contínua requer coleta de métricas, análise dos resultados, identificação de problemas e implementação de melhorias no processo.

---

**Nota:** Estas questões são baseadas em conceitos fundamentais de Quality Assurance e seguem padrões internacionais de certificação, proporcionando uma base sólida para profissionais de teste em qualquer nível de experiência.



## Questões Práticas e Cenários Reais

### Questão 21
**Tópico:** Análise de Cenário Real
**Pergunta:** Uma aplicação web de e-commerce apresenta lentidão durante a Black Friday. Qual seria a primeira ação de um testador?

A) Reiniciar o servidor
B) Analisar logs de performance e métricas de sistema
C) Aumentar o número de servidores
D) Desabilitar funcionalidades não essenciais

**Resposta Correta:** B
**Explicação:** A primeira ação deve ser coletar dados através da análise de logs e métricas para entender a causa raiz da lentidão antes de tomar qualquer ação corretiva.

### Questão 22
**Tópico:** Teste de API
**Pergunta:** Ao testar uma API REST, qual status code indica que a requisição foi processada com sucesso mas não retorna conteúdo?

A) 200 OK
B) 201 Created
C) 204 No Content
D) 404 Not Found

**Resposta Correta:** C
**Explicação:** O status code 204 No Content indica que a requisição foi processada com sucesso, mas não há conteúdo para retornar (comum em operações DELETE).

### Questão 23
**Tópico:** Teste Mobile
**Pergunta:** Qual aspecto é único ao testar aplicações móveis comparado a aplicações web?

A) Validação de campos obrigatórios
B) Teste de diferentes orientações de tela e interrupções (chamadas, SMS)
C) Verificação de links quebrados
D) Teste de compatibilidade de navegadores

**Resposta Correta:** B
**Explicação:** Aplicações móveis têm características únicas como mudança de orientação, interrupções por chamadas/SMS, diferentes tamanhos de tela e gestos touch.

### Questão 24
**Tópico:** Acessibilidade
**Pergunta:** Qual é um requisito básico de acessibilidade para usuários com deficiência visual?

A) Cores vibrantes em todos os elementos
B) Textos alternativos (alt text) em imagens
C) Animações constantes na interface
D) Fontes decorativas complexas

**Resposta Correta:** B
**Explicação:** Textos alternativos em imagens são essenciais para leitores de tela utilizados por usuários com deficiência visual.

### Questão 25
**Tópico:** Segurança
**Pergunta:** Qual vulnerabilidade é testada ao inserir código JavaScript malicioso em campos de entrada?

A) SQL Injection
B) Cross-Site Scripting (XSS)
C) Buffer Overflow
D) Man-in-the-Middle

**Resposta Correta:** B
**Explicação:** Cross-Site Scripting (XSS) ocorre quando código JavaScript malicioso é inserido e executado em campos de entrada não validados adequadamente.

### Questão 26
**Tópico:** DevOps e CI/CD
**Pergunta:** Em um pipeline de CI/CD, em qual estágio os testes de regressão automatizados devem ser executados?

A) Apenas em produção
B) Após cada commit no repositório
C) Apenas antes do deploy em produção
D) Somente aos finais de semana

**Resposta Correta:** B
**Explicação:** Testes de regressão automatizados devem ser executados após cada commit para detectar problemas rapidamente e manter a qualidade contínua.

### Questão 27
**Tópico:** Teste de Dados
**Pergunta:** Ao testar um sistema que processa grandes volumes de dados, qual aspecto é mais crítico?

A) Interface do usuário apenas
B) Integridade, consistência e performance dos dados
C) Cores e fontes utilizadas
D) Número de cliques necessários

**Resposta Correta:** B
**Explicação:** Em sistemas de grandes volumes de dados, é crucial verificar a integridade (dados corretos), consistência (dados coerentes) e performance (tempo de processamento).

### Questão 28
**Tópico:** Teste em Ambiente Cloud
**Pergunta:** Qual desafio é específico ao testar aplicações em ambiente cloud?

A) Validação de formulários
B) Latência de rede variável e disponibilidade de serviços
C) Teste de cores da interface
D) Verificação de ortografia

**Resposta Correta:** B
**Explicação:** Ambientes cloud introduzem variabilidade na latência de rede e dependência de múltiplos serviços, exigindo testes específicos para essas condições.

### Questão 29
**Tópico:** Microserviços
**Pergunta:** Ao testar uma arquitetura de microserviços, qual aspecto requer atenção especial?

A) Apenas a interface do usuário
B) Comunicação entre serviços e tolerância a falhas
C) Apenas o banco de dados
D) Apenas a documentação

**Resposta Correta:** B
**Explicação:** Em microserviços, é crucial testar a comunicação entre serviços, contratos de API, tolerância a falhas e comportamento quando serviços estão indisponíveis.

### Questão 30
**Tópico:** Inteligência Artificial
**Pergunta:** Ao testar um sistema com Machine Learning, qual aspecto adicional deve ser considerado?

A) Apenas a precisão do modelo
B) Bias, fairness, explicabilidade e degradação do modelo
C) Apenas a velocidade de processamento
D) Apenas a interface do usuário

**Resposta Correta:** B
**Explicação:** Sistemas de ML requerem testes específicos para bias (preconceito), fairness (justiça), explicabilidade (transparência) e degradação do modelo ao longo do tempo.

## Questões de Tendências e Futuro

### Questão 31
**Tópico:** Shift-Left Testing
**Pergunta:** O que significa "Shift-Left Testing" na prática?

A) Mover os testadores para o lado esquerdo da sala
B) Iniciar atividades de teste mais cedo no ciclo de desenvolvimento
C) Usar apenas ferramentas open source
D) Testar apenas no final do projeto

**Resposta Correta:** B
**Explicação:** Shift-Left Testing significa mover as atividades de teste para fases mais iniciais do desenvolvimento, incluindo testes desde a fase de requisitos.

### Questão 32
**Tópico:** Test-Driven Development (TDD)
**Pergunta:** Qual é a sequência correta no ciclo TDD?

A) Código → Teste → Refatoração
B) Teste → Código → Refatoração
C) Refatoração → Teste → Código
D) Documentação → Código → Teste

**Resposta Correta:** B
**Explicação:** No TDD, primeiro escreve-se o teste (que falha), depois o código mínimo para passar no teste, e por fim refatora-se o código mantendo os testes passando.

### Questão 33
**Tópico:** Behavior-Driven Development (BDD)
**Pergunta:** Qual formato é característico do BDD para especificar comportamentos?

A) Apenas código de teste
B) Given-When-Then (Dado-Quando-Então)
C) Apenas documentação técnica
D) Apenas diagramas UML

**Resposta Correta:** B
**Explicação:** BDD utiliza o formato Given-When-Then para especificar comportamentos de forma clara e compreensível para todos os stakeholders.

### Questão 34
**Tópico:** Chaos Engineering
**Pergunta:** Qual é o objetivo principal do Chaos Engineering?

A) Criar bugs propositalmente
B) Testar a resiliência do sistema introduzindo falhas controladas
C) Desorganizar a equipe de desenvolvimento
D) Aumentar a complexidade do código

**Resposta Correta:** B
**Explicação:** Chaos Engineering visa testar a resiliência e robustez do sistema introduzindo falhas controladas para identificar pontos fracos antes que causem problemas em produção.

### Questão 35
**Tópico:** Observabilidade
**Pergunta:** Quais são os três pilares da observabilidade em sistemas modernos?

A) Código, Testes, Documentação
B) Logs, Métricas, Traces
C) Frontend, Backend, Banco de dados
D) Desenvolvedores, Testadores, Usuários

**Resposta Correta:** B
**Explicação:** Os três pilares da observabilidade são Logs (eventos discretos), Métricas (dados numéricos agregados) e Traces (jornada de requisições através do sistema).

## Questões de Soft Skills e Carreira

### Questão 36
**Tópico:** Comunicação
**Pergunta:** Como um testador deve comunicar um bug crítico encontrado próximo ao release?

A) Apenas registrar no sistema de bugs
B) Comunicar imediatamente ao gerente de projeto e equipe, documentando claramente o impacto
C) Esperar o próximo daily meeting
D) Enviar apenas um email

**Resposta Correta:** B
**Explicação:** Bugs críticos próximos ao release requerem comunicação imediata e clara sobre o impacto, permitindo que a equipe tome decisões informadas rapidamente.

### Questão 37
**Tópico:** Trabalho em Equipe
**Pergunta:** Como um testador pode contribuir melhor em uma equipe ágil?

A) Trabalhando isoladamente
B) Colaborando ativamente, participando de cerimônias e compartilhando conhecimento
C) Apenas executando testes
D) Evitando reuniões

**Resposta Correta:** B
**Explicação:** Em equipes ágeis, testadores devem colaborar ativamente, participar de todas as cerimônias, compartilhar conhecimento e trabalhar em conjunto com desenvolvedores e POs.

### Questão 38
**Tópico:** Aprendizado Contínuo
**Pergunta:** Como um profissional de QA pode se manter atualizado com as tendências da área?

A) Apenas lendo documentação oficial
B) Participando de comunidades, conferências, cursos e experimentando novas ferramentas
C) Focando apenas em uma ferramenta
D) Evitando mudanças

**Resposta Correta:** B
**Explicação:** O campo de QA evolui rapidamente, exigindo aprendizado contínuo através de comunidades, conferências, cursos, experimentação e networking.

### Questão 39
**Tópico:** Pensamento Crítico
**Pergunta:** Ao encontrar um comportamento inesperado, qual deve ser a primeira reação de um testador?

A) Assumir que é um bug e reportar imediatamente
B) Investigar, reproduzir e analisar se é realmente um defeito ou comportamento esperado
C) Ignorar se não está na especificação
D) Perguntar apenas para o desenvolvedor

**Resposta Correta:** B
**Explicação:** Testadores devem exercer pensamento crítico, investigando e analisando comportamentos inesperados antes de concluir se é um defeito real.

### Questão 40
**Tópico:** Ética Profissional
**Pergunta:** Um testador descobre um bug crítico de segurança um dia antes do release planejado. Qual é a ação mais ética?

A) Não reportar para não atrasar o release
B) Reportar imediatamente, mesmo que cause atraso no release
C) Reportar apenas após o release
D) Reportar apenas se perguntado

**Resposta Correta:** B
**Explicação:** A ética profissional exige reportar bugs críticos de segurança imediatamente, independente do impacto no cronograma, pois a segurança dos usuários é prioritária.

---

**Resumo do Banco de Questões:**
- **Total:** 40 questões
- **Níveis:** K1 (Conhecimento), K2 (Compreensão), K3 (Aplicação)
- **Tópicos:** Conceitos básicos, técnicas de teste, níveis e tipos, processo de teste, qualidade, tendências modernas, soft skills
- **Formato:** Múltipla escolha com explicações detalhadas
- **Aplicação:** Adequado para certificação e avaliação de conhecimentos fundamentais em QA

Este banco de questões oferece uma base sólida e abrangente para avaliar conhecimentos em Quality Assurance, cobrindo desde conceitos fundamentais até tendências modernas da área.

