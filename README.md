<h1 align="center">Full-Stack Portfolio — Wesley Zilva</h1>

<p align="center">
  <em>Nearshore-ready Angular + Java portfolio demonstrating production-grade full-stack engineering with AI-assisted workflows</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-20+-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  <img src="https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-15+-336791?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub%20Pages-Live-27AE60?style=for-the-badge&logo=github&logoColor=white"/>
</p>

**Live:** https://wesleyzilva.github.io/portfolioNearshoreWesIA/

---

> Full-stack portfolio showcasing production-grade Angular frontends integrated with AI-assisted development workflows and enterprise Java backends. Engineered to nearshore-ready standards: clean layered architecture, CI/CD via GitHub Actions, and live deployments available for immediate inspection by global clients.

---

## The Problem

Senior developers competing for nearshore contracts need more than a CV — they need a live, inspectable proof of craft that communicates engineering standards to international clients who cannot afford to interview blindly. A static portfolio page fails that test. A working, deployed full-stack application does not.

---

## The Solution

A production-deployed Angular SPA backed by a layered Java API, demonstrating the full delivery chain: UI design → component architecture → API contract → business logic → database persistence — all live, all inspectable, all built to the standards expected in European and North American nearshore engagements.

---

## Methodology

```
Frontend (Angular SPA)
    └─► Standalone components, OnPush change detection, Signals for state
    └─► Deployed to GitHub Pages (CI/CD via GitHub Actions)
    └─► Responsive design, accessibility-first

HTTP Layer
    └─► REST API contract between Angular client and Java backend
    └─► Environment-based URL configuration (local / staging / production)

Backend (Java)
    └─► Facade pattern — single entry point for frontend, decouples client from internals
    └─► Service layer — business logic, validation, orchestration
    └─► Persistence layer — PostgreSQL via JPA/Hibernate

AI-Assisted Development
    └─► GitHub Copilot integrated into every layer
    └─► Prompt-driven scaffolding, code review, and refactoring workflows
```

**Architecture layers:**

| Layer | Responsibility |
|-------|---------------|
| Angular UI | Presentation, routing, state (Signals) |
| Facade (Java) | API gateway, request normalisation |
| Service (Java) | Business logic, validation |
| Persistence (Java) | JPA entities, PostgreSQL queries |

---

## Results

- Live, end-to-end application demonstrating full-stack delivery capability
- AI-assisted workflow documented and reproducible — a differentiator in nearshore pitches
- Architecture mirrors enterprise patterns used in European client projects (Facade, layered services, environment separation)

---

## Tradeoffs

| Decision | Chosen | Alternative | Rationale |
|----------|--------|-------------|----------|
| Rendering | SPA (CSR) | SSR / Angular Universal | The portfolio has no SEO-critical secondary pages; CSR eliminates server infrastructure while still allowing Google to index the main page via dynamic rendering |
| Backend language | Java + Spring Boot | Node.js / serverless functions | Java demonstrates enterprise-grade architecture patterns — the primary signal this portfolio needs to send to European and North American nearshore clients |
| State management | Angular Signals | NgRx | NgRx adds store boilerplate overhead for a read-mostly portfolio with minimal inter-component state; Signals provide the same reactivity with zero ceremony |
| AI integration | GitHub Copilot (inline, documented) | Separate AI pre/post-processing pipeline | Inline AI keeps the development workflow visible and attributable — documenting the process as part of the portfolio is a deliberate differentiator for AI-assisted nearshore work |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 20+, TypeScript, SCSS |
| Backend | Java 17+, Spring Boot |
| Database | PostgreSQL 15+ |
| ORM | JPA / Hibernate |
| Deployment | GitHub Pages (frontend), configurable (backend) |
| CI/CD | GitHub Actions |
| AI Tooling | GitHub Copilot |

---

## Getting Started

```bash
npm install
ng serve          # → http://localhost:4200/
```

**Build for production:**
```bash
ng build
```

This project is a technical portfolio designed to showcase Wesley's skills and knowledge in full-stack cloud development. It features a responsive frontend built with Angular and a robust backend powered by Java, demonstrating a complete, end-to-end application architecture.

## Project Objective

The primary goal of this repository is to serve as a live demonstration of full-stack development capabilities, covering everything from the user interface to database persistence.

### Frontend

The user interface was initially a static page built with simple HTML and CSS. It has been completely refactored into a dynamic and modern single-page application (SPA) using the **Angular** framework. This conversion highlights the ability to modernize legacy web pages and build scalable frontend solutions.

### Backend

The frontend communicates with a backend system built entirely in **Java**. The backend architecture is designed with clear separation of concerns and includes:

*   **Facade Layer**: A Facade design pattern is used as the primary entry point for the frontend, simplifying communication and decoupling the client from the complex internal logic.
*   **Service/Intermediate Layer**: This layer contains the core business logic of the application.
*   **Persistence Layer**: Responsible for all database interactions, connecting to a **PostgreSQL** database to store and retrieve data.

This multi-layered Java backend demonstrates a solid understanding of enterprise application design and database connectivity.

---

## Angular Project Information

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


0 notificações no total

Pular para pesquisa

Pular para conteúdo principal

Atalhos do teclado
Fechar menu pular
Pesquisar
Início
Minha rede
Vagas
Mensagens
Notificações
Wesley Gomes Da Silva
Eu

Para negócios
Resgate 1 mês grátis de Premium Page
Wesley Gomes Da Silva
Wesley (Wes) Gomes Da Silva
(He/Him)
IT Specialist | Data Management | Sustain & Observability | Yellow Belt Certificate | SaaS | Nearshoring

Recursos

Adicionar seção ao perfil
Tenho interesse em…
Imagem de fundo

Wesley (Wes) Gomes Da Silva

Wesley (Wes) Gomes Da Silva 
 He/Him
IT Specialist | Data Management | Sustain & Observability | Yellow Belt Certificate | SaaS | Nearshoring

Serasa Experian
São Carlos, São Paulo, Brasil  Informações de contato
+ de 500 conexões
Tenho interesse em…

Adicionar seção ao perfil

Aprimorar perfil

Recursos
Buscando emprego
Cargos de Coordenador de TI, Scrum master, Prestador de serviços e Agile Consultant

Exibir detalhes

Editar
Compartilhe que você está contratando e atraia candidatos qualificados.

Comece já


AnáliseAnálise
 Exibido apenas a você Exibido apenas a você

203 visualizações do perfil
203 visualizações do perfil
Saiba quem viu seu perfil.Saiba quem viu seu perfil.
703 impressões das publicações
703 impressões das publicações
Confira quem está interagindo com suas publicações.Confira quem está interagindo com suas publicações.
Últimos 7 diasÚltimos 7 dias
51 ocorrências em resultados de pesquisa
51 ocorrências em resultados de pesquisa
Veja a frequência com que seu perfil é exibido em resultados de pesquisa.Veja a frequência com que seu perfil é exibido em resultados de pesquisa.
Exibir todas as análises
SobreSobre
Líder de tecnologia com mais de 14 anos de experiência em grandes players (Serasa Experian, Amdocs e Tecumseh), especializado na gestão de projetos complexos de dados e eficiência operacional. Unindo sólida expertise técnica (Data Engineering e Full Stack) à visão estratégica de negócios, foco na entrega de plataformas escaláveis, seguras e orientadas a resultados (Data-Driven).

Principais Competências em Gestão de Projetos:

- Governança e Entrega de Projetos de Dados: Gestão do ciclo de vida completo de projetos de Data Management, desde a estruturação de arquiteturas modernas até a garantia de linhagem e conformidade regulatória (LGPD, PCI-DSS, BACEN) em ambientes de alta transacionalidade.

- Liderança de Engenharia e ETL: Orquestração de squads técnicas para o desenvolvimento de pipelines de dados robustos (Databricks, Pentaho), com foco na otimização de fluxos críticos de faturamento e conciliação financeira de larga escala.

- Gestão de Cibersegurança e SDLC: Implementação de frameworks de segurança (DevSecOps) e programas de gestão de vulnerabilidades (Veracode, Rapid7) integrados ao cronograma de desenvolvimento, garantindo entregas blindadas e em conformidade.

- Excelência Operacional e Metodologias Ágeis: Aplicação de frameworks Agile (Scrum/Kanban) e princípios Six Sigma (Yellow Belt) para otimizar fluxos de entrega, eliminar gargalos operacionais e elevar a produtividade das equipes.

- Alinhamento Estratégico e Stakeholders: Interface direta com executivos para tradução de visões de negócio em requisitos técnicos, garantindo que os projetos estejam rigorosamente alinhados aos OKRs da companhia.

- Inovação e Gestão de Talentos: Liderança focada no desenvolvimento de equipes de alta performance, utilizando Inteligência Artificial para automação de processos e construção de soluções de dados com valor de negócio mensurável.Líder de tecnologia com mais de 14 anos de experiência em grandes players (Serasa Experian, Amdocs e Tecumseh), especializado na gestão de projetos complexos de dados e eficiência operacional. Unindo sólida expertise técnica (Data Engineering e Full Stack) à visão estratégica de negócios, foco na entrega de plataformas escaláveis, seguras e orientadas a resultados (Data-Driven). Principais Competências em Gestão de Projetos: - Governança e Entrega de Projetos de Dados: Gestão do ciclo de vida completo de projetos de Data Management, desde a estruturação de arquiteturas modernas até a garantia de linhagem e conformidade regulatória (LGPD, PCI-DSS, BACEN) em ambientes de alta transacionalidade. - Liderança de Engenharia e ETL: Orquestração de squads técnicas para o desenvolvimento de pipelines de dados robustos (Databricks, Pentaho), com foco na otimização de fluxos críticos de faturamento e conciliação financeira de larga escala. - Gestão de Cibersegurança e SDLC: Implementação de frameworks de segurança (DevSecOps) e programas de gestão de vulnerabilidades (Veracode, Rapid7) integrados ao cronograma de desenvolvimento, garantindo entregas blindadas e em conformidade. - Excelência Operacional e Metodologias Ágeis: Aplicação de frameworks Agile (Scrum/Kanban) e princípios Six Sigma (Yellow Belt) para otimizar fluxos de entrega, eliminar gargalos operacionais e elevar a produtividade das equipes. - Alinhamento Estratégico e Stakeholders: Interface direta com executivos para tradução de visões de negócio em requisitos técnicos, garantindo que os projetos estejam rigorosamente alinhados aos OKRs da companhia. - Inovação e Gestão de Talentos: Liderança focada no desenvolvimento de equipes de alta performance, utilizando Inteligência Artificial para automação de processos e construção de soluções de dados com valor de negócio mensurável.
Principais competências
Principais competências
Coordenador de ti • Scrum Master • Product Owner • Yellow Belt • Hybrid teams
Coordenador de ti • Scrum Master • Product Owner • Yellow Belt • Hybrid teams
ServiçosServiços
Cibersegurança • Consultoria de TI • Análise de dados nos negócios • Gestão de projetos • Atividades de integração de equipe • Suporte técnicoCibersegurança • Consultoria de TI • Análise de dados nos negócios • Gestão de projetos • Atividades de integração de equipe • Suporte técnico
Exibir todos os serviços
Em destaqueEm destaque

Publicação
Publicação
Plano de pagamento para o PC Gamer do meu filho Samuel de 9 anos... o Heitor está fazendo o mesmo.
no final teremos um livro com 52 redações cada e vou encadernar, criar imagens ilustrativas e publicar.

hashtag#construindoOfuturo
hashtag#vouDeixarPessoasMelhores

likelove
11
Publicação
Publicação
Always learning something new with Serasa Experian 🚀

This week I'm diving into hashtag#CyberSecurity through the MetaCTF Capture the Flag Competition (Oct 27 – Nov 3).

 A great opportunity to sharpen skills, explore vulnerabilities, and collaborate with brilliant minds in the field.

🔐 Let the flags be captured!
hashtag#MetaCTF hashtag#CTF hashtag#CyberSecurityAwareness hashtag#LearningCulture hashtag#SerasaExperian hashtag#TechLife hashtag#AlwaysLearning

likelovecelebrate
5
Publicação
Publicação
I approach professional challenges with a LEGO mindset, a perspective I've valued since childhood. 
I see every component as a building block with a defined purpose, and my job is to understand how all the pieces fit together to create something innovative.

In practice, I bring this vision to life for remote teams using collaborative tools like Figma and interactive boards, where we can visually assemble ideas and build clear, impactful solutions together.

Thank you dad.

likeinsightful
5
1 comentário
Publicação
Publicação
Ref. que desenvolvi para observabilidade Angular: https://lnkd.in/d8RHRiGG

Observabilidade na prática com Datadog e com padrões certificados em tecnologias como Angular.

Como criar uma jornada de observabildiade do zero para realmente entender a Jornada de seus clientes e identificar oportunidades?

1- Instale a sua ferramenta de observabilidade LOCAL desde o desenvolvimento.

2- Modele seu código para ter os padrões necessários de observabilidade da ferramenta de acordo com o Framework que está usando o RUM.

Exemplo para Angular:
- Chamar DD_RUM.setUser() após o login
- Usar rastreamento de telas via DD_RUM.startView()
- Usar rastreamento de actions via DD_RUM.addAction()
- Usar o interceptor HTTP Captura de status e tempo de resposta
- Usar o correlação transaction_id enviado via header para podemos ter medições.

3- Use a observabilidade á seu favor com tudo que tem de melhor para jornadas de usuarios em frontend, infra e jornadas vistas do backend.

likelove
8
Publicação
Publicação
Família do trampo. The Office 3.0.

Cresci ouvindo que os valores da família são a nossa base: honestidade, respeito, empatia e generosidade. E sabe? Eu acredito que esses mesmos pilares devem nos guiar também no nosso dia a dia profissional.

Chamamos isso de "família do trampo" – um lugar onde as relações são construídas com a mesma autenticidade e cuidado que cultivamos em casa.

Meus valores para sua cultura organizacional:
- Honestidade e Integridade: Mesmo sobre pressão.
- Respeito: Vai além de ser educado.
- Empatia e Compaixão: Construa colaboração e ambiente seguro.
- Generosidade: Não se resume a compartilhar conhecimento.

Para mim, em um mundo de metas e números, o verdadeiro valor de um profissional não está só no que ele entrega, mas em COMO ele entrega. É a maturidade na aplicação desses valores que faz a diferença, que constrói um ambiente mais humano, colaborativo e, no fim das contas, mais produtivo.

E você, minha família do trampo, o que pensa sobre isso? 
Quais valores você considera essenciais para construir um ambiente de trabalho que realmente te inspira?

Compartilhe suas ideias e vamos juntos fortalecer essa cultura de respeito e colaboração! 

hashtag#ValoresNoTrabalho hashtag#FamiliaDoTrampo hashtag#CulturaOrganizacional hashtag#LiderançaHumanizada hashtag#ConexãoDeValor hashtag#AgilidadeComProposito
like
7
2 comentários

AtividadesAtividades
3.622 seguidores3.622 seguidores

Criar publicação

Publicações

Comentários

Vídeos

Imagens
9 Publicações publicações carregadas
Ver link do gráfico de Wesley Gomes Da Silva  
Wesley Gomes Da SilvaWesley Gomes Da Silva
   • VocêUsuário verificado • Você
IT Specialist | Data Management | Sustain & Observability | Yellow Belt Certificate | SaaS | NearshoringIT Specialist | Data Management | Sustain & Observability | Yellow Belt Certificate | SaaS | Nearshoring
4 d •  Há 4 dias • Visível a todos, dentro ou fora do LinkedIn

Além de formas de pagamento, você já pensou em recuperar impostos?

Mais de R$ 500 bilhões em créditos de ICMS e ISS estão parados nas gavetas do fisco brasileiro.
Dinheiro que já saiu do caixa das empresas — e simplesmente nunca voltou.
O motivo não é falta de direito.
É excesso de complexidade.

Na prática, milhares de empresas pagam impostos indevidamente todos os meses por causa de:
ICMS interestadual aplicado incorretamente
ISS cobrado acima do teto legal de 5%
Cumulatividade em subcontratações
Créditos acumulados que nunca foram compensados

⚠️ O risco é real: o prazo prescricional é de 5 anos.
E com a Reforma Tributária (IBS/CBS), a janela de recuperação de ICMS e ISS começa a se fechar entre 2026 e 2033.
Ou seja: quem não agir agora, perde saldo tributário para sempre.
…mais
insightfullike
2




Foto do perfil de Wesley
Wesley Gomes Da Silva compartilhou isso

Ver link do gráfico de Luciano Martins contratação 
Luciano MartinsLuciano Martins
   • SeguindoPremium • Seguindo
CEO - Chief Executive Officer at 🅺inix | Microsoft Partner |+35K Seguidores |Transformação Digital | Automação | Inteligência Artificial | Consultoria de Tecnologia | Tech Recruiter | BodyShop | OutsourcingCEO - Chief Executive Officer at 🅺inix | Microsoft Partner |+35K Seguidores |Transformação Digital | Automação | Inteligência Artificial | Consultoria de Tecnologia | Tech Recruiter | BodyShop | Outsourcing
Conheça meus serviços
3 sem •  Há 3 semanas • Visível a todos, dentro ou fora do LinkedIn
Cada estratégia precisa ser pensada.
Cada desafio exige um processo.
Cada propósito pede uma tática diferente.

Não existe fórmula única para vencer.
O que funciona em uma situação pode fracassar em outra.

Quem entende isso deixa de repetir movimentos… e passa a ler o cenário, ajustar a rota e agir com inteligência.

💭 Você está aplicando a mesma estratégia para problemas diferentes?

🔎 Fonte: Estratégia, tomada de decisão e gestão de desafios
🎥 Créditos: Criador do vídeo / conteúdo original (via redes sociais)

hashtag#Estratégia hashtag#Decisão hashtag#Mentalidade hashtag#Liderança hashtag#Planejamento hashtag#Gestão hashtag#Reflexão
…mais


likefunnyinsightful
750
12 comentários
51 compartilhamentos





Exibir todas as publicações
ExperiênciaExperiência

Serasa Experian
Serasa Experian
Serasa Experian
Tempo integral · 10 a 2 mTempo integral · 10 a 2 m
IT Coordinator | M&A Flexpag | Payments and Data
IT Coordinator | M&A Flexpag | Payments and Data
nov de 2024 - o momento · 1 ano 6 mesesDe nov de 2024 até o momento · 1 ano 6 meses
Remote São Carlos, Blumenau, Recife · HíbridaRemote São Carlos, Blumenau, Recife · Híbrida
Hard Skills: Databricks, Pentaho ETL, Python, Apache Spark, SQL Avançado, APIs REST, DevSecOps, PCI-DSS. Soft Skills: Liderança Técnica (Tech Lead), Gestão de Crise, Tomada de Decisão Data-Driven.

Engenharia de Dados e Squads de BI: Liderando squads de Dados, otimizei a arquitetura e operações de desenvolvimento utilizando Databricks. Acelerei a entrega de produtos analíticos, impulsionando a tomada de decisões baseada em dados e aprimorando a escalabilidade tecnológica da empresa.

Especialista em Pagamentos e ETL: Apliquei expertise em processos de adquirência e subadquirência para liderar a squad de ETL (Pentaho). Através da otimização de fluxos de dados e APIs, transformamos a conciliação de receitas e o faturamento, garantindo precisão total em transações financeiras e reportes regulatórios (BACEN/FEBRABAN).

Liderança em Cibersegurança e DevSecOps: Comandei a equipe de Segurança, implementando do zero um framework de DevSecOps e gestão de vulnerabilidades com Veracode e Rapid7. Garanti a integração proativa da segurança no ciclo de vida de desenvolvimento (SDLC), blindando infraestrutura e dados sensíveis sob normas PCI-DSS.Hard Skills: Databricks, Pentaho ETL, Python, Apache Spark, SQL Avançado, APIs REST, DevSecOps, PCI-DSS. Soft Skills: Liderança Técnica (Tech Lead), Gestão de Crise, Tomada de Decisão Data-Driven. Engenharia de Dados e Squads de BI: Liderando squads de Dados, otimizei a arquitetura e operações de desenvolvimento utilizando Databricks. Acelerei a entrega de produtos analíticos, impulsionando a tomada de decisões baseada em dados e aprimorando a escalabilidade tecnológica da empresa. Especialista em Pagamentos e ETL: Apliquei expertise em processos de adquirência e subadquirência para liderar a squad de ETL (Pentaho). Através da otimização de fluxos de dados e APIs, transformamos a conciliação de receitas e o faturamento, garantindo precisão total em transações financeiras e reportes regulatórios (BACEN/FEBRABAN). Liderança em Cibersegurança e DevSecOps: Comandei a equipe de Segurança, implementando do zero um framework de DevSecOps e gestão de vulnerabilidades com Veracode e Rapid7. Garanti a integração proativa da segurança no ciclo de vida de desenvolvimento (SDLC), blindando infraestrutura e dados sensíveis sob normas PCI-DSS.
IT Specialist (HR, Legal, Customer Service, Sales) - Yellow Belt Six Sigma
IT Specialist (HR, Legal, Customer Service, Sales) - Yellow Belt Six Sigma
abr de 2021 - nov de 2024 · 3 anos 8 mesesDe abr de 2021 até nov de 2024 · 3 anos 8 meses
Hard Skills: Jira/Azure Boards, Requirements Engineering, Performance Metrics (DORA Metrics), Figma, SDLC.

Soft Skills: Influential Leadership, Stakeholder Management, Process Optimization (Kaizen).

SDLC Optimization: Provided technical leadership in disseminating Agile methodologies across Technology and Data squads, successfully reducing development bottlenecks and increasing productivity through optimized workflows.

Governance & Roadmaps: Engineered strategic roadmaps for scalable solutions, ensuring strict technical alignment between business objectives (OKRs) and engineering delivery capacity.

Design-to-Engineering Interface: Acted as a bridge between design and development using Figma to ensure technical and functional fidelity during the transition from high-fidelity prototypes to front-end implementation.

Delivery Metrics Management: Implemented and monitored KPIs and efficiency metrics (Velocity, Burndown, Cycle Time), leveraging data-driven insights to foster continuous performance improvement across teams.

Cross-BU Synergy: Managed technical interdependencies between multiple Business Units (Legal, Finance, Sales), ensuring systemic integrity and consistent value delivery in hybrid environments.Hard Skills: Jira/Azure Boards, Requirements Engineering, Performance Metrics (DORA Metrics), Figma, SDLC. Soft Skills: Influential Leadership, Stakeholder Management, Process Optimization (Kaizen). SDLC Optimization: Provided technical leadership in disseminating Agile methodologies across Technology and Data squads, successfully reducing development bottlenecks and increasing productivity through optimized workflows. Governance & Roadmaps: Engineered strategic roadmaps for scalable solutions, ensuring strict technical alignment between business objectives (OKRs) and engineering delivery capacity. Design-to-Engineering Interface: Acted as a bridge between design and development using Figma to ensure technical and functional fidelity during the transition from high-fidelity prototypes to front-end implementation. Delivery Metrics Management: Implemented and monitored KPIs and efficiency metrics (Velocity, Burndown, Cycle Time), leveraging data-driven insights to foster continuous performance improvement across teams. Cross-BU Synergy: Managed technical interdependencies between multiple Business Units (Legal, Finance, Sales), ensuring systemic integrity and consistent value delivery in hybrid environments.
Full Stack Developer - ITIL/Observability
Full Stack Developer - ITIL/Observability
mar de 2016 - abr de 2021 · 5 anos 2 mesesDe mar de 2016 até abr de 2021 · 5 anos 2 meses
São Carlos e Região, BrasilSão Carlos e Região, Brasil
Hard Skills: Java (Spring), Angular, SQL Server/Postgres, .NET, APIs REST, Dynatrace, ITIL. Soft Skills: Resolução de Problemas Complexos (RCA), Visão Sistêmica, Interface Negócio-Tecnologia.

Desenvolvimento End-to-End: Atuação no ciclo completo de desenvolvimento de sistemas core de Faturamento e CRM, utilizando Java e Angular para entregar soluções escaláveis e de alta disponibilidade.

Engenharia de Dados e Backend: Design e manutenção de bases de dados complexas, garantindo a integridade e a performance de grandes volumes de transações financeiras.

Estabilidade e Observabilidade: Liderança técnica na sustentação de sistemas críticos, utilizando Dynatrace e Datadog para monitoramento proativo e redução de incidentes via Análise de Causa Raiz (RCA).

Arquitetura e Requisitos: Tradução de necessidades de negócio em especificações técnicas de alta fidelidade, garantindo que as soluções fossem sustentáveis e alinhadas aos SLAs da companhia.

Ecossistema Técnico: Integração e evolução de plataformas variadas, incluindo Salesforce, OutSystems e .NET, navegando com agilidade entre tecnologias legadas e modernas.Hard Skills: Java (Spring), Angular, SQL Server/Postgres, .NET, APIs REST, Dynatrace, ITIL. Soft Skills: Resolução de Problemas Complexos (RCA), Visão Sistêmica, Interface Negócio-Tecnologia. Desenvolvimento End-to-End: Atuação no ciclo completo de desenvolvimento de sistemas core de Faturamento e CRM, utilizando Java e Angular para entregar soluções escaláveis e de alta disponibilidade. Engenharia de Dados e Backend: Design e manutenção de bases de dados complexas, garantindo a integridade e a performance de grandes volumes de transações financeiras. Estabilidade e Observabilidade: Liderança técnica na sustentação de sistemas críticos, utilizando Dynatrace e Datadog para monitoramento proativo e redução de incidentes via Análise de Causa Raiz (RCA). Arquitetura e Requisitos: Tradução de necessidades de negócio em especificações técnicas de alta fidelidade, garantindo que as soluções fossem sustentáveis e alinhadas aos SLAs da companhia. Ecossistema Técnico: Integração e evolução de plataformas variadas, incluindo Salesforce, OutSystems e .NET, navegando com agilidade entre tecnologias legadas e modernas.
Technical Support & Systems Reliability Summary
Technical Support & Systems Reliability Summary
Technical Support & Systems Reliability Summary
AmdocsAmdocs
jul de 2013 - mar de 2016 · 2 anos 9 mesesDe jul de 2013 até mar de 2016 · 2 anos 9 meses
São Carlos e Região, BrasilSão Carlos e Região, Brasil
Hard Skills: Unix (Solaris/AIX), OracleDB, PL/SQL, Shell Scripting, Middleware (Tuxedo/Weblogic), Remedy, CRM Clarify. Soft Skills: Resiliência em Ambientes de Alta Pressão, Comunicação com Stakeholders, Pensamento Analítico (RCA).

Estabilidade Operacional & Automação: Desenvolvimento e manutenção de rotinas avançadas em Shell Script e PL/SQL para otimização de bancos de dados Oracle, garantindo a integridade de dados e reduzindo falhas em ambientes Unix de alta criticidade.

Gestão de Incidentes e CRM: Administração e sustentação das plataformas Remedy e CRM Clarify 12, assegurando SLAs rigorosos e a continuidade dos sistemas de atendimento ao cliente final.

Administração de Middleware: Suporte técnico especializado em Tuxedo e Weblogic, componentes vitais para a comunicação transacional entre sistemas, garantindo serviços operantes e performáticos.

Parceria Estratégica: Atuação como elo entre a tecnologia e os objetivos de negócio, transformando desafios técnicos em soluções sustentáveis que impulsionam os resultados da empresa.Hard Skills: Unix (Solaris/AIX), OracleDB, PL/SQL, Shell Scripting, Middleware (Tuxedo/Weblogic), Remedy, CRM Clarify. Soft Skills: Resiliência em Ambientes de Alta Pressão, Comunicação com Stakeholders, Pensamento Analítico (RCA). Estabilidade Operacional & Automação: Desenvolvimento e manutenção de rotinas avançadas em Shell Script e PL/SQL para otimização de bancos de dados Oracle, garantindo a integridade de dados e reduzindo falhas em ambientes Unix de alta criticidade. Gestão de Incidentes e CRM: Administração e sustentação das plataformas Remedy e CRM Clarify 12, assegurando SLAs rigorosos e a continuidade dos sistemas de atendimento ao cliente final. Administração de Middleware: Suporte técnico especializado em Tuxedo e Weblogic, componentes vitais para a comunicação transacional entre sistemas, garantindo serviços operantes e performáticos. Parceria Estratégica: Atuação como elo entre a tecnologia e os objetivos de negócio, transformando desafios técnicos em soluções sustentáveis que impulsionam os resultados da empresa.
Gerente de negócios de tecnologia educacional e de entretenimento
Gerente de negócios de tecnologia educacional e de entretenimento
Gerente de negócios de tecnologia educacional e de entretenimento
XBot - Robotics for entertainment and technological education.XBot - Robotics for entertainment and technological education.
nov de 2010 - jul de 2013 · 2 anos 9 mesesDe nov de 2010 até jul de 2013 · 2 anos 9 meses
São CarlosSão Carlos
ROBÓTICA EDUCACIONAL E DE ENTRETENIMENTO
Foco: Atuação na análise e estudo de mercado para robótica educacional e de entretenimento, com visitas a clientes em todo o Brasil e América Latina, visando a venda técnica para Universidades, Centros de Pesquisa, Escolas Técnicas e Agentes de Entretenimento. Gestão de Marketing Digital para prospecção e vendas. Implantação e gerenciamento de equipes de representantes, vendas e parcerias nacionais e internacionais. Palestrante em eventos de demonstração de produtos robóticos para os setores acadêmico e de entretenimento.

ROBÔS PARA EDUCAÇÃO: Curumim, Sci Soccer, Kid Ball, RoboDeck, Sci Arm

Aplicações: Introdução a conceitos de eletrônica, linguagens de programação, sistemas de visão e telecomunicações para as áreas de educação tecnológica (ensino profissionalizante, técnico, pesquisa e superior).

ROBÔS PARA ENTRETENIMENTO: RoboGol

Aplicações: Robôs de futebol para entretenimento.

SISTEMAS PARA ENERGIA E UTILITIES
Foco: Atuação na análise e estudo de mercado para sistemas de distribuição de energia, com visitas a clientes em concessionárias de energia (utilities) em todo o Brasil e América Latina, com foco em venda técnica.

Produtos: InfoData (Software) e Remota (Hardware)

Aplicações: Análise de Big Data, aplicações para Smart Grid (redes elétricas inteligentes) e Microgrids (microrredes).

TREINAMENTO DE SEGURANÇA
Foco: Atuação na análise e estudo de mercado para sistemas de simuladores, com visitas a clientes em todo o Brasil e América Latina, com foco em venda técnica.

Produto: TIS - Sistema de Treinamento Interativo (Interactive Training System)

Aplicações: Uso de simulador virtual para treinamento na área de segurança, visando a redução de custos com deslocamento e interação com o ambiente real.ROBÓTICA EDUCACIONAL E DE ENTRETENIMENTO Foco: Atuação na análise e estudo de mercado para robótica educacional e de entretenimento, com visitas a clientes em todo o Brasil e América Latina, visando a venda técnica para Universidades, Centros de Pesquisa, Escolas Técnicas e Agentes de Entretenimento. Gestão de Marketing Digital para prospecção e vendas. Implantação e gerenciamento de equipes de representantes, vendas e parcerias nacionais e internacionais. Palestrante em eventos de demonstração de produtos robóticos para os setores acadêmico e de entretenimento. ROBÔS PARA EDUCAÇÃO: Curumim, Sci Soccer, Kid Ball, RoboDeck, Sci Arm Aplicações: Introdução a conceitos de eletrônica, linguagens de programação, sistemas de visão e telecomunicações para as áreas de educação tecnológica (ensino profissionalizante, técnico, pesquisa e superior). ROBÔS PARA ENTRETENIMENTO: RoboGol Aplicações: Robôs de futebol para entretenimento. SISTEMAS PARA ENERGIA E UTILITIES Foco: Atuação na análise e estudo de mercado para sistemas de distribuição de energia, com visitas a clientes em concessionárias de energia (utilities) em todo o Brasil e América Latina, com foco em venda técnica. Produtos: InfoData (Software) e Remota (Hardware) Aplicações: Análise de Big Data, aplicações para Smart Grid (redes elétricas inteligentes) e Microgrids (microrredes). TREINAMENTO DE SEGURANÇA Foco: Atuação na análise e estudo de mercado para sistemas de simuladores, com visitas a clientes em todo o Brasil e América Latina, com foco em venda técnica. Produto: TIS - Sistema de Treinamento Interativo (Interactive Training System) Aplicações: Uso de simulador virtual para treinamento na área de segurança, visando a redução de custos com deslocamento e interação com o ambiente real.


Field and Service Engineer
Field and Service Engineer
Field and Service Engineer
BR ELETRICA ENGENHARIA Serviços e Projetos Elétricos (PJ)BR ELETRICA ENGENHARIA Serviços e Projetos Elétricos (PJ)
jun de 2002 - jul de 2013 · 11 anos 2 mesesDe jun de 2002 até jul de 2013 · 11 anos 2 meses
São Carlos, São Paulo, BrasilSão Carlos, São Paulo, Brasil
Responsável pela gestão de empresa de serviços e projetos elétricos, com atuação focada nos mercados de construção civil (condomínios e edificações) e automação industrial. Minha atuação abrange o gerenciamento completo das equipes técnicas de campo, assegurando a qualidade das entregas e o cumprimento rigoroso dos prazos. Realizo o planejamento estratégico de compras e a logística de distribuição de materiais para todos os serviços de instalação e manutenção. Adicionalmente, sou responsável pela frente comercial, incluindo a elaboração de orçamentos técnicos e a negociação com clientes.Responsável pela gestão de empresa de serviços e projetos elétricos, com atuação focada nos mercados de construção civil (condomínios e edificações) e automação industrial. Minha atuação abrange o gerenciamento completo das equipes técnicas de campo, assegurando a qualidade das entregas e o cumprimento rigoroso dos prazos. Realizo o planejamento estratégico de compras e a logística de distribuição de materiais para todos os serviços de instalação e manutenção. Adicionalmente, sou responsável pela frente comercial, incluindo a elaboração de orçamentos técnicos e a negociação com clientes.
BR Elétrica Engenharia, Serviços e Produtos. | Wix.comBR Elétrica Engenharia, Serviços e Produtos. | Wix.com
A BR-Elétrica é uma empresa de Engenharia Elétrica com o objetivo de prestar serviços terceirizados para obras particulares ou empreitas em São Carlos e região.A BR-Elétrica é uma empresa de Engenharia Elétrica com o objetivo de prestar serviços terceirizados para obras particulares ou empreitas em São Carlos e região.
Logo da empresa XBot
Teacher
Teacher
ZEEK Cursos Profissionalizantes (www.zeekcursos.com.br)ZEEK Cursos Profissionalizantes (www.zeekcursos.com.br)
jan de 2011 - dez de 2011 · 1 anoDe jan de 2011 até dez de 2011 · 1 ano
São Carlos, São Paulo, BrasilSão Carlos, São Paulo, Brasil
Educador de Tecnologia com foco em preparar a próxima geração de profissionais para os desafios da indústria. Minha atuação é focada em traduzir conceitos complexos de Eletrônica, Mecânica e Programação em projetos de robótica práticos e estimulantes para alunos de nível técnico e profissionalizante. O resultado é a formação de estudantes com uma base de conhecimento sólida e experiência prática em softwares padrão de mercado, como AutoCAD, SolidWorks e EPLAN.

Como palestrante, busco disseminar o potencial da robótica e das novas tecnologias na educação, inspirando uma nova abordagem de ensino. No ensino médio, aplico metodologias inovadoras para lecionar Física, com o objetivo de despertar a curiosidade científica e aumentar o engajamento dos alunos, tornando o aprendizado mais eficaz e significativo. Meu objetivo final é capacitar os alunos não apenas com conhecimento técnico, mas com a habilidade de resolver problemas e inovar.Educador de Tecnologia com foco em preparar a próxima geração de profissionais para os desafios da indústria. Minha atuação é focada em traduzir conceitos complexos de Eletrônica, Mecânica e Programação em projetos de robótica práticos e estimulantes para alunos de nível técnico e profissionalizante. O resultado é a formação de estudantes com uma base de conhecimento sólida e experiência prática em softwares padrão de mercado, como AutoCAD, SolidWorks e EPLAN. Como palestrante, busco disseminar o potencial da robótica e das novas tecnologias na educação, inspirando uma nova abordagem de ensino. No ensino médio, aplico metodologias inovadoras para lecionar Física, com o objetivo de despertar a curiosidade científica e aumentar o engajamento dos alunos, tornando o aprendizado mais eficaz e significativo. Meu objetivo final é capacitar os alunos não apenas com conhecimento técnico, mas com a habilidade de resolver problemas e inovar.
Exibir todas as 12 experiências
Formação acadêmicaFormação acadêmica
UNICEP - Centro Universitário Central Paulista
UNICEP - Centro Universitário Central Paulista
UNICEP - Centro Universitário Central Paulista
Bacharelado em Engenharia, Projeto de Retrofit e Modernização de Religadores para Sistemas de Transmissão de EnergiaBacharelado em Engenharia, Projeto de Retrofit e Modernização de Religadores para Sistemas de Transmissão de Energia
2005 - 20112005 - 2011
Um projeto focado na modernização de religadores de energia para aumentar a confiabilidade e a inteligência em sistemas de transmissão de energia elétrica.

Manutenção e Revitalização: Realização da manutenção completa e revitalização das conexões elétricas e de comunicação dos equipamentos.

Implementação de Monitoramento Remoto: Instalação e configuração de sistemas de telemetria para monitoramento à distância de grandezas como tensão, corrente, status de operação e comunicação.

Testes e Validação em Campo: Execução de testes de comissionamento em campo para validar o funcionamento, a comunicação e a eficácia do retrofit.

Fonte/Clientes de Referência: Elektro e outras concessionárias de serviços de eletricidade.Um projeto focado na modernização de religadores de energia para aumentar a confiabilidade e a inteligência em sistemas de transmissão de energia elétrica. Manutenção e Revitalização: Realização da manutenção completa e revitalização das conexões elétricas e de comunicação dos equipamentos. Implementação de Monitoramento Remoto: Instalação e configuração de sistemas de telemetria para monitoramento à distância de grandezas como tensão, corrente, status de operação e comunicação. Testes e Validação em Campo: Execução de testes de comissionamento em campo para validar o funcionamento, a comunicação e a eficácia do retrofit. Fonte/Clientes de Referência: Elektro e outras concessionárias de serviços de eletricidade.
Logo da empresa UFSCar - Alumni
UFSCar - Alumni
UFSCar - Alumni
Pós-Graduação em Desenvolvimento Web, Ênfase em Java e Banco de DadosPós-Graduação em Desenvolvimento Web, Ênfase em Java e Banco de Dados
2018 - 20182018 - 2018
Pós-Graduação em Desenvolvimento Web: Curso focado no desenvolvimento de aplicações web robustas com a plataforma Java e na modelagem e gerenciamento de bancos de dados.Pós-Graduação em Desenvolvimento Web: Curso focado no desenvolvimento de aplicações web robustas com a plataforma Java e na modelagem e gerenciamento de bancos de dados.
Exibir os 6 itens de formação acadêmica
Licenças e certificadosLicenças e certificados
Logo da empresa Datadog
DataDog - Dashboards
DataDog - Dashboards
DatadogDatadog
Verificação emitida em out de 2025Verificação emitida em out de 2025
Código da credencial https://learn.datadoghq.com/certificates/s1puu1jn5bCódigo da credencial https://learn.datadoghq.com/certificates/s1puu1jn5b
Exibir credencial

certificate-724635584.jpgcertificate-724635584.jpg
Logo da empresa Datadog
DataDog - Monitors
DataDog - Monitors
DatadogDatadog
Verificação emitida em out de 2025Verificação emitida em out de 2025
Código da credencial https://learn.datadoghq.com/certificates/rcstxom6vnCódigo da credencial https://learn.datadoghq.com/certificates/rcstxom6vn
Exibir credencial

certificate-724635585.jpgcertificate-724635585.jpg
Exibir todas as 7 licenças e certificados
ProjetosProjetos
Robô na escola
Robô na escola
jan de 2012 - até o momentojan de 2012 - até o momento
Associado(s) a XBot - Robotics for entertainment and technological education.
Associado(s) a XBot - Robotics for entertainment and technological education.
Exibir projeto
The XBot in partnership with scientists in order to disseminate the technology of robotics among children and teens, launched in September 2004 its social responsibility project "Robot in school." The project is to promote activities that involve the robot with children and adolescents in primary schools. The company opens its doors to welcome students and lead activities in the schools. For this, it has a team of volunteers from the company itself that assists children during the event. Establish an interaction between high-tech and children and adolescents, is the main objective of the project.The XBot in partnership with scientists in order to disseminate the technology of robotics among children and teens, launched in September 2004 its social responsibility project "Robot in school." The project is to promote activities that involve the robot with children and adolescents in primary schools. The company opens its doors to welcome students and lead activities in the schools. For this, it has a team of volunteers from the company itself that assists children during the event. Establish an interaction between high-tech and children and adolescents, is the main objective of the project.
Outros contribuidoresOutros contribuidores

Projeto Robot Day
Projeto Robot Day
jan de 2011 - até o momentojan de 2011 - até o momento
Associado(s) a XBot - Robotics for entertainment and technological education.
Associado(s) a XBot - Robotics for entertainment and technological education.
Exibir projeto
The Robot Day event is to conduct activities that will bring robotics technology of everyday life of young people of both sexes in order to promote an entrepreneurial vision and understanding of technology trends. The form found here was an educational approach, but with a language entertainment. In the event, the robots are used to perform recreational activities as football matches among others. During these activities, monitors talk about the knowledge of robotics with an entrepreneurial vision technology to allow the young to contextualize and have a vision of job opportunities and career. In addition, materials with content related to the topic, are distributed to the participants.The Robot Day event is to conduct activities that will bring robotics technology of everyday life of young people of both sexes in order to promote an entrepreneurial vision and understanding of technology trends. The form found here was an educational approach, but with a language entertainment. In the event, the robots are used to perform recreational activities as football matches among others. During these activities, monitors talk about the knowledge of robotics with an entrepreneurial vision technology to allow the young to contextualize and have a vision of job opportunities and career. In addition, materials with content related to the topic, are distributed to the participants.
Outros contribuidoresOutros contribuidores

Exibir todos os 16 projetos
Trabalho voluntárioTrabalho voluntário
Voluntário
Voluntário
Voluntário
CCB - São CarlosCCB - São Carlos
jan de 2004 - até o momento · 22 a 4 mjan de 2004 - até o momento · 22 a 4 m
CriançasCrianças
Aulas de musica em geral para menores carentes do Pq. Santa Felícia.Aulas de musica em geral para menores carentes do Pq. Santa Felícia.
CompetênciasCompetências
 Você adicionou o número máximo de competências Você adicionou o número máximo de competências

Yellow Belt
Yellow Belt
Foto do perfil de Sandro Rodrigues
Competência recomendada por 1 pessoa nos últimos 6 mesesCompetência recomendada por 1 pessoa nos últimos 6 meses
1 recomendação de competências
1 recomendação de competências
Metodologias ageis de desenvolvimento
Metodologias ageis de desenvolvimento
Sandro Rodrigues recomendou esta competênciaSandro Rodrigues recomendou esta competência
1 recomendação de competências
1 recomendação de competências
Planejamento Trimestral SincronizadoPlanejamento Trimestral Sincronizado
Exibir todas as 100 competências
RecomendaçõesRecomendações
Exibir todas as pendentes

RecebidasRecebidas
FornecidasFornecidas
Paulo Chaves Gomes
Paulo Chaves Gomes
Paulo Chaves Gomes
· 1ºConexão de 1º grau
Programador java web/HTML/CSS/JavascriptProgramador java web/HTML/CSS/Javascript
Em 25 de agosto de 2025, Paulo respondia a WesleyEm 25 de agosto de 2025, Paulo respondia a Wesley
Wesley Silva é um excelente condenador, graças a sua liderança conseguimos uma boa performance na squad que participarmosWesley Silva é um excelente condenador, graças a sua liderança conseguimos uma boa performance na squad que participarmos
Matheus Benicio
Matheus Benicio
Matheus Benicio
· 1ºConexão de 1º grau
Product Manager | Pagamentos Digitais & Fintech | Pix, Cartões, Gateways, Checkout e SubadquirênciaProduct Manager | Pagamentos Digitais & Fintech | Pix, Cartões, Gateways, Checkout e Subadquirência
Em 15 de agosto de 2025, Matheus trabalhava com Wesley na mesma equipeEm 15 de agosto de 2025, Matheus trabalhava com Wesley na mesma equipe
Tive a oportunidade de trabalhar com o Wesley e posso afirmar que ele é um profissional excepcional. Possui profundo conhecimento em agilidade, documentação e processos, sempre com foco em tornar o trabalho mais eficiente, claro e de alto impacto.

Além das competências técnicas, o Wesley se destaca pela sua energia positiva, proatividade e excelente relacionamento interpessoal, criando um ambiente colaborativo e motivador ao seu redor. Sua capacidade de engajar pessoas, compartilhar conhecimento e propor melhorias faz dele um profissional que realmente faz diferença na equipe e nos resultados.

Qualquer equipe que contar com ele terá não apenas um profissional competente, mas também alguém que eleva a cultura e o clima organizacional.Tive a oportunidade de trabalhar com o Wesley e posso afirmar que ele é um profissional excepcional. Possui profundo conhecimento em agilidade, documentação e processos, sempre com foco em tornar o trabalho mais eficiente, claro e de alto impacto. Além das competências técnicas, o Wesley se destaca pela sua energia positiva, proatividade e excelente relacionamento interpessoal, criando um ambiente colaborativo e motivador ao seu redor. Sua capacidade de engajar pessoas, compartilhar conhecimento e propor melhorias faz dele um profissional que realmente faz diferença na equipe e nos resultados. Qualquer equipe que contar com ele terá não apenas um profissional competente, mas também alguém que eleva a cultura e o clima organizacional.
Exibir todas as 8 recebidas
PublicaçõesPublicações
A block programming interface for educational mobile robots
A block programming interface for educational mobile robots
6 de mar de 20116 de mar de 2011
Exibir publicações
This paper describes Curumim Program Interface, 
the software used to control the robot Curumim with block 
programming. Curumim is a tool for educational robotics, at 
first commanded by blocks programming, which will be 
described in this article, but also provides the possibility to 
expand the horizon of students to other technological fields.
Using this, even those who don´t have enough knowledge 
about program languages can determinate some action to the 
robot. In order to write the program, it is only necessary to 
click on the icon in menu and the block will be inserting in 
program’s window. Then a sequence of blocks will be 
created which can be executed by Curumim. It’s possible to 
change any parameter of the block, delete it and insert a new 
block between among others already fixed. For expert users, 
there is the possibility to use C/C++ languages to program 
Curumim.This paper describes Curumim Program Interface, the software used to control the robot Curumim with block programming. Curumim is a tool for educational robotics, at first commanded by blocks programming, which will be described in this article, but also provides the possibility to expand the horizon of students to other technological fields. Using this, even those who don´t have enough knowledge about program languages can determinate some action to the robot. In order to write the program, it is only necessary to click on the icon in menu and the block will be inserting in program’s window. Then a sequence of blocks will be created which can be executed by Curumim. It’s possible to change any parameter of the block, delete it and insert a new block between among others already fixed. For expert users, there is the possibility to use C/C++ languages to program Curumim.
Outros autoresOutros autores


Retrofit of reclosers in electric power grids
Retrofit of reclosers in electric power grids
29 de out de 200929 de out de 2009
Exibir publicações
I Workshop Monographs UNICEP São Carlos, SP, 29, and October 30, 2009

Preventive maintenance is one of the most effective ways of ensuring in parallel with it a longer duration of working time with a low cost of maintenance. This led electric utilities to apply the principle of the retrofit, preventative maintenance adding new technologies. The aim of this work is to demonstrate Comoé done this type of retrofit and how it is applied in various outfits elétricos.Para demonstrate these processes reclosers were chosen because they are equipamentoscom the high cost and maintenance and ongoing operation. Exhaustion that estesequipamentos suffer are due to weathering and constant work.I Workshop Monographs UNICEP São Carlos, SP, 29, and October 30, 2009 Preventive maintenance is one of the most effective ways of ensuring in parallel with it a longer duration of working time with a low cost of maintenance. This led electric utilities to apply the principle of the retrofit, preventative maintenance adding new technologies. The aim of this work is to demonstrate Comoé done this type of retrofit and how it is applied in various outfits elétricos.Para demonstrate these processes reclosers were chosen because they are equipamentoscom the high cost and maintenance and ongoing operation. Exhaustion that estesequipamentos suffer are due to weathering and constant work.
CursosCursos
Administração competitiva, uma ferramenta estratégica
Administração competitiva, uma ferramenta estratégica
SEBRAESEBRAE
Associado(s) a XBot - Robotics for entertainment and technological education.
Associado(s) a XBot - Robotics for entertainment and technological education.
Administração de estoque
Administração de estoque
SEBRAESEBRAE
Associado(s) a XBot - Robotics for entertainment and technological education.
Associado(s) a XBot - Robotics for entertainment and technological education.
Exibir os 13 cursos
Reconhecimentos e prêmiosReconhecimentos e prêmios
Agile Coach
Agile Coach
Concedido(s) por Customer Experience and Technology Area · out de 2023Concedido(s) por Customer Experience and Technology Area · out de 2023
Recognition in a project to centralize call center applications based on self-service, reducing the number of applications an operator uses to serve a customer and creating micro services for reuse. 
#SingleScreenRecognition in a project to centralize call center applications based on self-service, reducing the number of applications an operator uses to serve a customer and creating micro services for reuse. #SingleScreen
Reconhecimento no trabalho com agilidade para o suporte de sistemas de TI (ongoing)
Reconhecimento no trabalho com agilidade para o suporte de sistemas de TI (ongoing)
Concedido(s) por Trible Shared Services · jul de 2020Concedido(s) por Trible Shared Services · jul de 2020
Associado(s) a Serasa Experian
Associado(s) a Serasa Experian
Adequação junto com a squad aos processos ágeis. Utilização de ferramentas sistêmicas padronizadas como JIRA, Service Now para tickets em geral.
Ajustes no processo de sustentação baseado em SLA e Controles Internos.
Classificação de incidentes e documentação para compartilhamento de conhecimento via Confluence.
Alinhamentos com áreas de negócios para entendimento de metas focadas ao NPS e prioridades de TI.Adequação junto com a squad aos processos ágeis. Utilização de ferramentas sistêmicas padronizadas como JIRA, Service Now para tickets em geral. Ajustes no processo de sustentação baseado em SLA e Controles Internos. Classificação de incidentes e documentação para compartilhamento de conhecimento via Confluence. Alinhamentos com áreas de negócios para entendimento de metas focadas ao NPS e prioridades de TI.
Exibir 3 reconhecimentos e prêmios
IdiomasIdiomas
Chinês
Chinês
Nível básicoNível básico
Espanhol
Espanhol
Nível básicoNível básico
Exibir os 3 idiomas
OrganizaçõesOrganizações
Participation in events and lectures.
Participation in events and lectures.
Palestrante, Expositor · jan de 2011 - até o momentoPalestrante, Expositor · jan de 2011 - até o momento
Associado(s) a XBot - Robotics for entertainment and technological education.
Associado(s) a XBot - Robotics for entertainment and technological education.
● Program Meeting of Fame - TV Band: RoboGol Championship.
● Frequency Program Open - Radio UFSCar: Technologies for entertainment.
● Event: ROBOCONTROL - Control of Robots: Paper Presentation control mobile robots
for education
● Event: SBIA - Brazilian Symposium on Artificial Intelligence: Presentation of robots Curumim,
RoboDeck in Curitiba in Paraná.
● Interview Journal Estadão: San Carlos, Tourism Technology.
● Interview Journal Estadão: XBot competes for the prize MPE.
● Speaker and Teacher: Campus Party 2013 in São Paulo.
● Speaker: Geiatech in Sao Luis in Maranhao.● Program Meeting of Fame - TV Band: RoboGol Championship. ● Frequency Program Open - Radio UFSCar: Technologies for entertainment. ● Event: ROBOCONTROL - Control of Robots: Paper Presentation control mobile robots for education ● Event: SBIA - Brazilian Symposium on Artificial Intelligence: Presentation of robots Curumim, RoboDeck in Curitiba in Paraná. ● Interview Journal Estadão: San Carlos, Tourism Technology. ● Interview Journal Estadão: XBot competes for the prize MPE. ● Speaker and Teacher: Campus Party 2013 in São Paulo. ● Speaker: Geiatech in Sao Luis in Maranhao.
Extracurricular courses
Extracurricular courses
Aluno · jan de 1999 - até o momentoAluno · jan de 1999 - até o momento
● Educational Robotics - Using robots to technological education.
● NR10 and NR10 SEP - Safety in electrical substations and complementary.
● Technical drawing in Auto Cad by CDI Languages ​​and Computing in Solid Works CAD Works by and for Missler Top Solid.
● Maintenance of networks and computers by CDI Languages ​​and Computing.
● Low Voltage Electrician by the State Center for Technological Education Paula Souza.
● Fluent English - CDI Languages ​​and Computing.
● Use and Maintenance of cooling systems - Whirlpool Rio Claro● Educational Robotics - Using robots to technological education. ● NR10 and NR10 SEP - Safety in electrical substations and complementary. ● Technical drawing in Auto Cad by CDI Languages ​​and Computing in Solid Works CAD Works by and for Missler Top Solid. ● Maintenance of networks and computers by CDI Languages ​​and Computing. ● Low Voltage Electrician by the State Center for Technological Education Paula Souza. ● Fluent English - CDI Languages ​​and Computing. ● Use and Maintenance of cooling systems - Whirlpool Rio Claro
InteressesInteresses
Top VoicesTop Voices
EmpresasEmpresas
GruposGrupos
NewslettersNewsletters
Instituições de ensinoInstituições de ensino
Mayur Gupta
Mayur Gupta
Mayur Gupta
· 3ºConexão de 3º grau
Chief Growth & Marketing Officer @ Kraken | Forbes World’s Top 50 CMO | ex Spotify, Gannett | Board Director, Advisor & InvestorChief Growth & Marketing Officer @ Kraken | Forbes World’s Top 50 CMO | ex Spotify, Gannett | Board Director, Advisor & Investor
68.908 seguidores68.908 seguidores

Seguindo
Cristina Junqueira
Cristina Junqueira
Cristina Junqueira
· 2ºConexão de 2º grau
Co-Founder at NubankCo-Founder at Nubank
770.261 seguidores770.261 seguidores

Seguindo
Exibir todos os Top Voices
Idioma do perfil
Português
Inglês
Perfil público e URL
www.linkedin.com/in/wesleyzilva


Quem seus visitantes também viramQuem seus visitantes também viram
 Exibido apenas a você Exibido apenas a você

Analista comercial na empresa Mapfre
Analista comercial na empresa Mapfre
Analista comercial na empresa Mapfre

Ver
Especialista em recursos humanos na…
Especialista em recursos humanos na…
Especialista em recursos humanos na…

Ver
Alguém na empresa Serasa
Alguém na empresa Serasa
Alguém na empresa Serasa

Ver
Desenvolvedor de software na empresa…
Desenvolvedor de software na empresa…
Desenvolvedor de software na empresa…

Ver
Pessoas que talvez você conheçaPessoas que talvez você conheça
Do seu setorDo seu setor

Alline Paiva
Alline Paiva
Alline Paiva
Analista de RH na FPFtechAnalista de RH na FPFtech

Conectar
Luis VITOR Pereira
Luis VITOR Pereira
Luis VITOR Pereira
Supervisor técnico da empresa IT POWER SOFTWARESupervisor técnico da empresa IT POWER SOFTWARE

Conectar
Cauê Muriano
Cauê Muriano
Cauê Muriano
Group Product Manager @iFoodGroup Product Manager @iFood

Conectar
Edson Boaventura
Edson Boaventura
Edson Boaventura
Especialista técnico da empresa OracleEspecialista técnico da empresa Oracle

Conectar
Thais Magalhães
Thais Magalhães
Thais Magalhães
Executiva de Negócios em RH TOTVS | Gestão de PessoaasExecutiva de Negócios em RH TOTVS | Gestão de Pessoaas

Conectar
Exibir tudo

Wesley Gomes Da Silva
MensagensVocê está no módulo de mensagens. Pressione Enter para abrir a lista de conversas.

Escrever mensagem
Você está no módulo de mensagens. Pressione Enter para abrir a lista de conversas.
Foto da empresa Dra Daiana Ferraz | Harmonização &amp; Odontologia
Dra Daiana Ferraz | Harmonização & Odontologia

https://www.linkedin.com/in/wesleyzilva/