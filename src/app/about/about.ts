import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { ScrollHint } from '../scroll-hint/scroll-hint';

type LocalizedText = { pt: string; en: string };
type LocalizedList = { pt: string[]; en: string[] };
type EvidenceType = 'measured' | 'estimated' | 'qualitative';

interface ProjectCard {
  category: LocalizedText;
  title: LocalizedText;
  context: LocalizedText;
  role: LocalizedText;
  actions: LocalizedList;
  results: LocalizedList;
  duration: LocalizedText;
  team: LocalizedText;
  evidence: EvidenceType;
  links: Array<{ text: LocalizedText; url: string }>;
  skills: string[];
  likes: number;
  liked: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollHint],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  currentProjectIndex = 0;
  projects: ProjectCard[] = [];

  ngOnInit(): void {
    this.projects = [
      {
        category: { pt: 'Seguranca & Compliance', en: 'Security & Compliance' },
        title: {
          pt: 'Projeto 1: Reducao de Vulnerabilidades em 110 aplicacoes Java/Angular',
          en: 'Project 1: Vulnerability Reduction Across 110 Java/Angular Applications'
        },
        context: {
          pt: 'Squad terceira sem contexto de negocio, prazo e orcamento fixos para adequacao de seguranca.',
          en: 'Third-party squad without business context, with fixed deadline and budget for security remediation.'
        },
        role: {
          pt: 'IT Manager e lider tecnico da esteira DevSecOps.',
          en: 'IT Manager and technical lead for the DevSecOps delivery stream.'
        },
        actions: {
          pt: [
            'Estruturei backlog por risco, criticidade e dependencia tecnica.',
            'Implementei fluxo continuo com Veracode, Rapid7, testes e CI/CD.',
            'Conduzi ritos ageis e reporte executivo sem Scrum Master dedicado.'
          ],
          en: [
            'Structured backlog by risk, severity, and technical dependency.',
            'Implemented continuous flow with Veracode, Rapid7, testing, and CI/CD.',
            'Led agile rituals and executive reporting without a dedicated Scrum Master.'
          ]
        },
        results: {
          pt: [
            '1200 -> 300 vulnerabilidades totais em 9 meses.',
            '47 -> 3 vulnerabilidades criticas/altas no ciclo principal.',
            'Base de compliance continuo com zero achados criticos internos.'
          ],
          en: [
            '1200 -> 300 total vulnerabilities in 9 months.',
            '47 -> 3 critical/high vulnerabilities in the main cycle.',
            'Built continuous compliance baseline with zero internal critical findings.'
          ]
        },
        duration: { pt: '9 meses', en: '9 months' },
        team: { pt: '1 SRE, 3 devs, 1 QA, 1 arquiteto', en: '1 SRE, 3 devs, 1 QA, 1 architect' },
        evidence: 'measured',
        links: [
          { text: { pt: 'Flexpag (M&A)', en: 'Flexpag (M&A)' }, url: 'https://flexpag.com/' },
          { text: { pt: 'Referencia: Matheus Benicio', en: 'Reference: Matheus Benicio' }, url: 'https://www.linkedin.com/in/matheus-benicio-b55a4a8/' }
        ],
        skills: ['Java', 'Angular', 'Veracode', 'Rapid7', 'CI/CD', 'DevSecOps'],
        likes: 28,
        liked: false
      },
      {
        category: { pt: 'Data Engineering', en: 'Data Engineering' },
        title: {
          pt: 'Projeto 2: Estruturacao de Data Management no contexto de M&A',
          en: 'Project 2: Data Management Implementation in M&A Context'
        },
        context: {
          pt: 'Necessidade de separar papeis e elevar maturidade de Analytics, Engenharia e ETL.',
          en: 'Need to separate responsibilities and increase maturity across Analytics, Engineering, and ETL.'
        },
        role: {
          pt: 'Gestao de times e desenho operacional orientado por dados.',
          en: 'Team leadership and data-driven operating model design.'
        },
        actions: {
          pt: [
            'Organizei estrutura de times e responsabilidades por fluxo de valor.',
            'Implantei monitoramento com Datadog e alertas via Teams/Power Automate.',
            'Defini governanca de operacao com indicadores executivos.'
          ],
          en: [
            'Organized team structure and responsibilities by value stream.',
            'Implemented monitoring with Datadog and alerts via Teams/Power Automate.',
            'Defined operating governance with executive indicators.'
          ]
        },
        results: {
          pt: [
            'Operacao escalada para 80M+ transacoes por dia.',
            'R$500M+ em reconciliacao mensal sob acompanhamento estruturado.',
            'Maior previsibilidade operacional e maturidade do ecossistema.'
          ],
          en: [
            'Operation scaled to 80M+ transactions per day.',
            'R$500M+ monthly reconciliation under structured monitoring.',
            'Higher operating predictability and ecosystem maturity.'
          ]
        },
        duration: { pt: '9 meses', en: '9 months' },
        team: {
          pt: 'PO, DBRE, analistas de analytics, engenheiros e analistas ETL',
          en: 'PO, DBRE, analytics analysts, data engineers, and ETL analysts'
        },
        evidence: 'measured',
        links: [
          { text: { pt: 'Flexpag (M&A)', en: 'Flexpag (M&A)' }, url: 'https://flexpag.com/' },
          { text: { pt: 'Referencia: Vini K', en: 'Reference: Vini K' }, url: 'https://www.linkedin.com/in/viniciuskr' }
        ],
        skills: ['Datadog', 'Power Automate', 'Analytics', 'Data Engineering', 'ETL'],
        likes: 42,
        liked: false
      },
      {
        category: { pt: 'Modernizacao de Dados', en: 'Data Modernization' },
        title: {
          pt: 'Projeto 3: Migracao Pentaho -> Databricks e Tableau -> PowerBI',
          en: 'Project 3: Pentaho -> Databricks and Tableau -> PowerBI Migration'
        },
        context: {
          pt: 'Turnover alto exigia transferencia de conhecimento e stack mais sustentavel.',
          en: 'High turnover required knowledge transfer and a more sustainable stack.'
        },
        role: {
          pt: 'Gestao de transicao tecnologica e continuidade operacional.',
          en: 'Managed technology transition and operational continuity.'
        },
        actions: {
          pt: [
            'Conduzi roadmap de migracao por dominio de dados e criticidade.',
            'Padronizei monitoramento em Datadog com gatilhos de operacao.',
            'Automatizei comunicacao para reduzir tempo de resposta.'
          ],
          en: [
            'Led migration roadmap by data domain and criticality.',
            'Standardized Datadog monitoring with operational triggers.',
            'Automated communication to reduce response time.'
          ]
        },
        results: {
          pt: [
            '40% de reducao no tempo de processamento ETL.',
            'Mais estabilidade para equipe com predominancia pleno.',
            'Base moderna para evolucao continua em analytics.'
          ],
          en: [
            '40% reduction in ETL processing time.',
            'Higher stability for a mostly mid-level team.',
            'Modern platform baseline for continuous analytics evolution.'
          ]
        },
        duration: { pt: '9 meses', en: '9 months' },
        team: {
          pt: 'PO, analista analytics, engenheiro de dados, analista ETL',
          en: 'PO, analytics analyst, data engineer, ETL analyst'
        },
        evidence: 'measured',
        links: [
          { text: { pt: 'Flexpag (M&A)', en: 'Flexpag (M&A)' }, url: 'https://flexpag.com/' },
          { text: { pt: 'Referencia: Vini K', en: 'Reference: Vini K' }, url: 'https://www.linkedin.com/in/viniciuskr' }
        ],
        skills: ['Databricks', 'PowerBI', 'Pentaho', 'Tableau', 'Datadog'],
        likes: 35,
        liked: false
      },
      {
        category: { pt: 'Agile Transformation', en: 'Agile Transformation' },
        title: {
          pt: 'Projeto 4: Transformacao Digital B2B com metricas de agilidade',
          en: 'Project 4: B2B Digital Transformation with Agile Metrics'
        },
        context: {
          pt: 'Necessidade de elevar performance de squads e transparencia executiva.',
          en: 'Need to increase squad performance and executive transparency.'
        },
        role: {
          pt: 'Agile lead de multiplos times e facilitador de governanca.',
          en: 'Agile lead across multiple teams and governance facilitator.'
        },
        actions: {
          pt: [
            'Criei framework gamificado para evolucao de maturidade agil.',
            'Implementei dashboards conectados a Jira e ServiceNow.',
            'Introduzi praticas SAFe e Scrum of Scrums.'
          ],
          en: [
            'Created a gamified framework for agile maturity evolution.',
            'Implemented dashboards connected to Jira and ServiceNow.',
            'Introduced SAFe and Scrum of Scrums practices.'
          ]
        },
        results: {
          pt: [
            '35% de aumento em sprint velocity.',
            '50% de reducao de blockers entre squads.',
            'Maior previsibilidade de entrega para lideranca executiva.'
          ],
          en: [
            '35% sprint velocity increase.',
            '50% reduction in cross-squad blockers.',
            'Higher delivery predictability for executive leadership.'
          ]
        },
        duration: { pt: '3 anos', en: '3 years' },
        team: { pt: '5 Scrum Masters e multiplas squads', en: '5 Scrum Masters and multiple squads' },
        evidence: 'measured',
        links: [
          { text: { pt: 'Serasa Experian B2B', en: 'Serasa Experian B2B' }, url: 'https://serasa.com/' },
          { text: { pt: 'Referencia: Samantha Miziara', en: 'Reference: Samantha Miziara' }, url: 'https://www.linkedin.com/in/samantha-miziara' }
        ],
        skills: ['Scrum', 'SAFe', 'Jira', 'ServiceNow', 'Tableau', 'Leadership'],
        likes: 56,
        liked: false
      },
      {
        category: { pt: 'IA Aplicada', en: 'Applied AI' },
        title: { pt: 'Projeto 5: IA para LegalTech', en: 'Project 5: AI for LegalTech' },
        context: {
          pt: 'Area juridica precisava acelerar analises de nivel 1 e 2.',
          en: 'Legal area needed to speed up level 1 and level 2 analyses.'
        },
        role: {
          pt: 'Lider de produto tecnico e coordenador de implementacao.',
          en: 'Technical product lead and implementation coordinator.'
        },
        actions: {
          pt: [
            'Estruturei solucao com IA e busca inteligente sobre base juridica.',
            'Integrei fluxo de atendimento usando stack low-code + Elasticsearch.',
            'Alinhei backlog tecnico com metas de SLA do negocio.'
          ],
          en: [
            'Designed AI and smart-search solution over legal data.',
            'Integrated service flow using low-code stack + Elasticsearch.',
            'Aligned technical backlog with business SLA goals.'
          ]
        },
        results: {
          pt: [
            '12% de reducao no SLA da operacao juridica.',
            'Maior velocidade de triagem e resposta em demandas recorrentes.',
            'Melhor qualidade de analise com contexto consolidado por IA.'
          ],
          en: [
            '12% reduction in legal operation SLA.',
            'Higher triage and response speed for recurring requests.',
            'Improved analysis quality with AI-consolidated context.'
          ]
        },
        duration: { pt: '1 ano', en: '1 year' },
        team: { pt: 'PO, tech lead, dev pleno, 2 QAs', en: 'PO, tech lead, mid-level dev, 2 QAs' },
        evidence: 'measured',
        links: [
          { text: { pt: 'Serasa Experian B2B', en: 'Serasa Experian B2B' }, url: 'https://serasa.com/' },
          { text: { pt: 'Referencia: Simone Garcia', en: 'Reference: Simone Garcia' }, url: 'https://www.linkedin.com/in/simone-conejo-garcia-morello-0a0984137/' }
        ],
        skills: ['AI', 'Elasticsearch', 'Low-code', 'OutSystems', 'Product Thinking'],
        likes: 61,
        liked: false
      },
      {
        category: { pt: 'Operacoes & Produto', en: 'Operations & Product' },
        title: {
          pt: 'Projeto 6: Customer Care com backlog sincronizado',
          en: 'Project 6: Customer Care with Synchronized Backlog'
        },
        context: {
          pt: 'Necessidade de equilibrar evolucao de produto e sustentacao operacional.',
          en: 'Need to balance product evolution and operational support.'
        },
        role: {
          pt: 'Coordenacao de duas squads e governanca de intake.',
          en: 'Led two squads and intake governance with stakeholders.'
        },
        actions: {
          pt: [
            'Sincronizei backlog de vendas, suporte e sustentacao em fluxo unico.',
            'Padronizei ownership por dominio e criterios de priorizacao.',
            'Integrei ServiceNow e Jira para visibilidade ponta a ponta.'
          ],
          en: [
            'Synchronized sales, support, and maintenance backlogs into one flow.',
            'Standardized ownership by domain and prioritization criteria.',
            'Integrated ServiceNow and Jira for end-to-end visibility.'
          ]
        },
        results: {
          pt: [
            '70% de automacao de tarefas operacionais recorrentes.',
            'Reducao de retrabalho e ganho de previsibilidade de entrega.',
            'Melhora consistente na satisfacao das areas atendidas.'
          ],
          en: [
            '70% automation of recurring operational tasks.',
            'Rework reduction and improved delivery predictability.',
            'Consistent improvement in stakeholder satisfaction.'
          ]
        },
        duration: { pt: '2 anos', en: '2 years' },
        team: { pt: '2 squads sincronizadas com 1 PO', en: '2 synchronized squads with 1 PO' },
        evidence: 'estimated',
        links: [
          { text: { pt: 'Serasa Experian B2B', en: 'Serasa Experian B2B' }, url: 'https://serasa.com/' },
          { text: { pt: 'Referencia: Jean Takushi', en: 'Reference: Jean Takushi' }, url: 'https://www.linkedin.com/in/JeanTakushi' }
        ],
        skills: ['ServiceNow', 'Jira', 'Backlog Management', 'Stakeholder Management'],
        likes: 22,
        liked: false
      },
      {
        category: { pt: 'Experiencia do Cliente', en: 'Customer Experience' },
        title: {
          pt: 'Projeto 7: Evolucao de Journey digital orientada por analytics',
          en: 'Project 7: Digital Journey Evolution Driven by Analytics'
        },
        context: {
          pt: 'Jornada de autosservico exigia maior disponibilidade e menos friccao.',
          en: 'Self-service journey needed higher availability and less friction.'
        },
        role: {
          pt: 'Gestao indireta de time parceiro e priorizacao por dados.',
          en: 'Indirect management of partner team with data-driven prioritization.'
        },
        actions: {
          pt: [
            'Priorizei melhorias com base em Adobe Analytics e incidentes.',
            'Apoiei revisao de arquitetura e integracoes criticas.',
            'Conectei indicadores operacionais com metas de experiencia.'
          ],
          en: [
            'Prioritized improvements based on Adobe Analytics and incidents.',
            'Supported architecture and critical integration reviews.',
            'Connected operational indicators to experience goals.'
          ]
        },
        results: {
          pt: [
            '99% de disponibilidade na jornada principal.',
            'Reducao de incidentes repetitivos em fluxos criticos.',
            'Melhor alinhamento entre tecnologia e expectativa do negocio.'
          ],
          en: [
            '99% availability in the main journey.',
            'Reduction of repetitive incidents in critical flows.',
            'Better alignment between technology and business expectations.'
          ]
        },
        duration: { pt: '2 anos', en: '2 years' },
        team: { pt: 'PO, especialista, 2 devs, 2 QAs', en: 'PO, specialist, 2 devs, 2 QAs' },
        evidence: 'measured',
        links: [
          { text: { pt: 'Serasa Experian B2B', en: 'Serasa Experian B2B' }, url: 'https://serasa.com/' },
          { text: { pt: 'Referencia: Jean Takushi', en: 'Reference: Jean Takushi' }, url: 'https://www.linkedin.com/in/jean-takushi-9371781/' }
        ],
        skills: ['Adobe Analytics', 'Salesforce', '.NET', 'Java', 'Apigee'],
        likes: 18,
        liked: false
      },
      {
        category: { pt: 'Modernizacao Aplicacional', en: 'Application Modernization' },
        title: {
          pt: 'Projeto 8: Migracao de legado .NET para arquitetura Angular/Java',
          en: 'Project 8: .NET Legacy Migration to Angular/Java Architecture'
        },
        context: {
          pt: 'Parque legado de ~50 aplicacoes com alto custo de manutencao.',
          en: 'Legacy portfolio of ~50 applications with high maintenance cost.'
        },
        role: {
          pt: 'Coordenacao tecnica e priorizacao de backlog sem PO dedicado.',
          en: 'Technical coordination and backlog prioritization without dedicated PO.'
        },
        actions: {
          pt: [
            'Mapeei criticidade por unidade de negocio e dependencias.',
            'Planejei ondas de migracao com criterios de decommission seguro.',
            'Acompanhei execucao com foco em continuidade de operacao.'
          ],
          en: [
            'Mapped criticality by business unit and dependency chain.',
            'Planned migration waves with safe decommission criteria.',
            'Oversaw execution focused on business continuity.'
          ]
        },
        results: {
          pt: [
            '20 aplicacoes criticas migradas/descomissionadas.',
            'Reducao de divida tecnica em dominios de vendas e atendimento.',
            'Base arquitetural modernizada para evolucao continua.'
          ],
          en: [
            '20 critical applications migrated/decommissioned.',
            'Technical debt reduction in sales and customer service domains.',
            'Modern architectural baseline for continuous evolution.'
          ]
        },
        duration: { pt: '3 anos', en: '3 years' },
        team: { pt: '1 squad com 5 devs e 4 QAs', en: '1 squad with 5 devs and 4 QAs' },
        evidence: 'measured',
        links: [
          { text: { pt: 'Serasa Experian B2B', en: 'Serasa Experian B2B' }, url: 'https://serasa.com/' },
          { text: { pt: 'Referencia: Jean Takushi', en: 'Reference: Jean Takushi' }, url: 'https://www.linkedin.com/in/jean-takushi-9371781/' }
        ],
        skills: ['.NET', 'Angular', 'Java', 'Architecture', 'Migration'],
        likes: 12,
        liked: false
      },
      {
        category: { pt: 'Excelencia Operacional', en: 'Operational Excellence' },
        title: {
          pt: 'Projeto 9: Empower Program com Six Sigma Yellow Belt',
          en: 'Project 9: Empower Program with Six Sigma Yellow Belt'
        },
        context: {
          pt: 'Programa social demandava processo IT mais eficiente e previsivel.',
          en: 'Social program required more efficient and predictable IT processes.'
        },
        role: {
          pt: 'Lideranca tecnica aplicando abordagem Lean Six Sigma.',
          en: 'Technical leadership applying Lean Six Sigma approach.'
        },
        actions: {
          pt: [
            'Analisei fluxos de incidentes, mudancas e problemas no ServiceNow.',
            'Implementei ciclos de melhoria continua com base em dados.',
            'Criei base de conhecimento para acelerar resolucao em L1.'
          ],
          en: [
            'Analyzed incident, change, and problem flows in ServiceNow.',
            'Implemented continuous improvement cycles based on data.',
            'Created knowledge base to speed up L1 resolution.'
          ]
        },
        results: {
          pt: [
            'Reducao do volume diario de incidentes em L1.',
            'Melhoria no tempo de resolucao por padronizacao de conhecimento.',
            'Aumento de autonomia operacional no primeiro nivel.'
          ],
          en: [
            'Reduction in daily L1 incident volume.',
            'Improved resolution time through knowledge standardization.',
            'Increased first-level operational autonomy.'
          ]
        },
        duration: { pt: '1 ano', en: '1 year' },
        team: { pt: '1 coach black belt + lideranca tecnica local', en: '1 black belt coach + local technical leadership' },
        evidence: 'qualitative',
        links: [
          { text: { pt: 'Serasa Experian', en: 'Serasa Experian' }, url: 'https://www.serasaexperian.com.br/' },
          { text: { pt: 'Referencia: Thiago Ferreira', en: 'Reference: Thiago Ferreira' }, url: 'https://www.linkedin.com/in/thiago-adescenco/' }
        ],
        skills: ['Lean Six Sigma', 'DMAIC', 'ServiceNow', 'Continuous Improvement'],
        likes: 78,
        liked: false
      },
      {
        category: { pt: 'Lideranca Global', en: 'Global Leadership' },
        title: {
          pt: 'Projeto 10: Mentoria Internacional para Cultura Agil',
          en: 'Project 10: International Mentoring for Agile Culture'
        },
        context: {
          pt: 'Evolucao de lideranca para atuar em contexto internacional distribuido.',
          en: 'Leadership evolution for distributed international environments.'
        },
        role: {
          pt: 'Mentorado internacional e, depois, mentor de outros profissionais.',
          en: 'International mentee and later mentor for other professionals.'
        },
        actions: {
          pt: [
            'Absorvi praticas ageis aplicadas no contexto europeu.',
            'Adaptei praticas para times LATAM e nearshore.',
            'Mentorei profissionais em Brasil, India e Africa do Sul.'
          ],
          en: [
            'Learned agile practices applied in the European context.',
            'Adapted practices for LATAM and nearshore teams.',
            'Mentored professionals in Brazil, India, and South Africa.'
          ]
        },
        results: {
          pt: [
            '3 profissionais mentorados em 3 paises.',
            'Evolucao da maturidade de lideranca intercultural.',
            'Base para gestao nearshore com alta autonomia.'
          ],
          en: [
            '3 professionals mentored across 3 countries.',
            'Higher intercultural leadership maturity.',
            'Strong foundation for high-autonomy nearshore management.'
          ]
        },
        duration: { pt: '1 ano', en: '1 year' },
        team: { pt: 'Coach internacional e rede de mentorados', en: 'International coach and mentee network' },
        evidence: 'qualitative',
        links: [
          { text: { pt: 'Artigo Serasa: Tipos de Lideranca', en: 'Serasa Article: Leadership Types' }, url: 'https://www.serasaexperian.com.br/carreiras/blog-carreiras/tipos-de-lideranca/' }
        ],
        skills: ['Mentoring', 'Leadership', 'Communication', 'Cross-cultural Management'],
        likes: 95,
        liked: false
      },
      {
        category: { pt: 'Suporte Critico', en: 'Critical Support' },
        title: {
          pt: 'Projeto 11: Firefighters para CRM/Billing legado (Telco)',
          en: 'Project 11: Firefighters for Legacy CRM/Billing (Telco)'
        },
        context: {
          pt: 'Ambiente legado com alto volume de incidentes e operacao 24x7.',
          en: 'Legacy environment with high incident volume and 24x7 operations.'
        },
        role: {
          pt: 'Lideranca de squad internacional de suporte e estabilizacao.',
          en: 'Led international squad for support and stabilization.'
        },
        actions: {
          pt: [
            'Organizei turnos e handover com operacao India-Brasil.',
            'Automatizei correcoes recorrentes de cadastro e fluxos operacionais.',
            'Defini ritos de prevencao para incidentes recorrentes.'
          ],
          en: [
            'Organized shifts and handovers across India-Brazil operation.',
            'Automated recurring data-fix and operational routines.',
            'Defined prevention rituals for recurring incidents.'
          ]
        },
        results: {
          pt: [
            '300 -> 100 incidentes diarios na operacao principal.',
            '99.9% de uptime em sistemas criticos de billing.',
            'Menor impacto operacional em janelas de pico.'
          ],
          en: [
            '300 -> 100 daily incidents in the main operation.',
            '99.9% uptime in critical billing systems.',
            'Lower operational impact during peak windows.'
          ]
        },
        duration: { pt: '3 anos', en: '3 years' },
        team: { pt: 'Squad de suporte 24x7 com 5 desenvolvedores', en: '24x7 support squad with 5 developers' },
        evidence: 'measured',
        links: [
          { text: { pt: 'Serasa', en: 'Serasa' }, url: 'https://www.serasa.com/' }
        ],
        skills: ['Unix/Linux', 'Shell Script', 'CRM', 'Billing', 'Critical Operations'],
        likes: 45,
        liked: false
      },
      {
        category: { pt: 'Knowledge Transfer', en: 'Knowledge Transfer' },
        title: {
          pt: 'Projeto 12: Internalizacao tecnica da operacao Sao Carlos',
          en: 'Project 12: Technical Internalization in Sao Carlos Operation'
        },
        context: {
          pt: 'Conhecimento critico estava em consultorias e precisava ser internalizado.',
          en: 'Critical technical knowledge was held by consultancies and had to be internalized.'
        },
        role: {
          pt: 'Lider de transferencia de conhecimento entre negocio e engenharia.',
          en: 'Led knowledge transfer between business and engineering.'
        },
        actions: {
          pt: [
            'Estruturei documentacao funcional e tecnica das aplicacoes-chave.',
            'Aproximei analistas de negocio da engenharia para reduzir ruido.',
            'Modelei trilha de onboarding para sustentacao interna.'
          ],
          en: [
            'Structured functional and technical documentation for key applications.',
            'Connected business analysts to engineering to reduce execution noise.',
            'Designed onboarding path for internal support teams.'
          ]
        },
        results: {
          pt: [
            'Know-how critico internalizado na operacao local.',
            'Maior autonomia tecnica para evolucao e sustentacao.',
            'Transicao mais segura para modelo agil da organizacao.'
          ],
          en: [
            'Critical know-how internalized into local operation.',
            'Higher technical autonomy for evolution and support.',
            'Safer transition to the organization agile model.'
          ]
        },
        duration: { pt: '2 anos', en: '2 years' },
        team: { pt: 'Desenvolvedores terceiros + analistas de negocio', en: 'Third-party developers + business analysts' },
        evidence: 'qualitative',
        links: [
          { text: { pt: 'Serasa', en: 'Serasa' }, url: 'https://www.serasa.com/' }
        ],
        skills: ['Documentation', 'Onboarding', 'Knowledge Transfer', 'Agile Enablement'],
        likes: 33,
        liked: false
      }
    ];
  }

  tr(value: LocalizedText): string {
    return value[this.lang()];
  }

  trList(value: LocalizedList): string[] {
    return value[this.lang()];
  }

  evidenceLabel(value: EvidenceType): string {
    if (this.lang() === 'pt') {
      if (value === 'measured') { return 'Mensurado'; }
      if (value === 'estimated') { return 'Estimado'; }
      return 'Qualitativo';
    }

    if (value === 'measured') { return 'Measured'; }
    if (value === 'estimated') { return 'Estimated'; }
    return 'Qualitative';
  }

  nextProject(): void {
    if (this.currentProjectIndex < this.projects.length - 1) {
      this.currentProjectIndex++;
    }
  }

  previousProject(): void {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    }
  }

  likeProject(project: ProjectCard): void {
    if (!project.liked) {
      project.likes++;
      project.liked = true;
    } else {
      project.likes--;
      project.liked = false;
    }
  }
}
