import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Lang, LanguageService } from '../../services/language.service';
import { PageMetaService } from '../../services/page-meta.service';

interface SearchTopic {
  query: string;
  answer: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface HotSearchContent {
  eyebrow: string;
  title: string;
  intro: string;
  topics: SearchTopic[];
  faqTitle: string;
  faqs: FaqItem[];
  footerTitle: string;
  footerCopy: string;
  primaryCta: string;
  secondaryCta: string;
}

@Component({
  selector: 'app-hot-search-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './hot-search.html',
  styleUrl: './hot-search.scss'
})
export class HotSearchPage implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly langService = inject(LanguageService);
  readonly pageMeta = inject(PageMetaService);
  readonly lang = this.langService.lang;

  readonly content: Record<Lang, HotSearchContent> = {
    pt: {
      eyebrow: 'Hot Search',
      title: 'Conteudo indexavel para buscas reais sobre lideranca nearshore e entrega de tecnologia',
      intro: 'Esta pagina foi organizada para responder intencoes de busca reais. Em vez de frases vagas, ela concentra perguntas que recrutadores, clientes e parceiros costumam fazer quando procuram um gestor de TI com forte base tecnica.',
      topics: [
        {
          query: 'Quem pode liderar um time nearshore no Brasil com foco em dados e compliance?',
          answer: 'Meu perfil combina lideranca operacional, experiencia em plataformas de dados, relacionamento com stakeholders e contexto regulatorio. Isso ajuda quando a empresa precisa de alguem para acelerar entrega sem perder controle, governanca e qualidade.'
        },
        {
          query: 'Como escalar pipelines e operacoes de dados acima de 80M de transacoes por dia?',
          answer: 'O caminho passa por confiabilidade, observabilidade, priorizacao de gargalos e desenho de fluxo. Atuei em ambientes onde o tema nao era apenas processar volume, mas garantir consistencia, rastreabilidade e impacto financeiro controlado.'
        },
        {
          query: 'Como reduzir vulnerabilidades sem travar o SDLC?',
          answer: 'A resposta pratica envolve risco priorizado, esteira com scanners, negociacao com as areas e rotinas objetivas. Em vez de transformar seguranca em teatro de processo, a meta e reduzir exposicao e manter a entrega acontecendo.'
        },
        {
          query: 'Como aplicar IA no workspace sem perder governanca e criterio tecnico?',
          answer: 'Uso IA como acelerador de discovery, escrita, analise e refinamento, mas sempre dentro de contexto, checkpoints e validacao. O ganho real acontece quando a equipe aprende a usar IA para pensar melhor, nao apenas produzir mais texto.'
        },
        {
          query: 'Que tipo de lider conecta operacao enterprise e POCs com mentalidade de produto?',
          answer: 'Meu historico mistura operacao critica, melhoria continua e provas de conceito orientadas a oportunidade. Isso vale tanto para ecossistemas corporativos quanto para iniciativas menores que precisam validar valor rapidamente.'
        }
      ],
      faqTitle: 'Perguntas objetivas',
      faqs: [
        {
          question: 'Qual o melhor formato de contratacao?',
          answer: 'Projetos de medio e longo prazo, especialmente quando existe backlog complexo, times distribuidos e necessidade de organizacao operacional.'
        },
        {
          question: 'Quais areas costumam se beneficiar mais?',
          answer: 'Data engineering, sustain, observabilidade, DevSecOps, modernizacao de fluxo e lideranca de squads nearshore.'
        },
        {
          question: 'O trabalho pode ser global?',
          answer: 'Sim. Ja atuei com equipes e stakeholders de diferentes regioes, mantendo comunicacao em ingles e cadencia de entrega orientada por prioridade.'
        }
      ],
      footerTitle: 'Da busca para a conversa certa',
      footerCopy: 'Se a pesquisa chegou ate aqui, o objetivo ja e mais claro: encontrar alguem capaz de organizar tecnologia, pessoas, risco e entrega. O Business Profile resume essa proposta; a pagina de proposta detalha formato de trabalho.',
      primaryCta: 'Voltar para Business Profile',
      secondaryCta: 'Ver proposta'
    },
    en: {
      eyebrow: 'Hot Search',
      title: 'Why Brazilian nearshore outperforms — and why Wesley delivers where others stall',
      intro: 'This page answers the questions that actually surface in searches: the cost-quality case for Brazil, the time-zone arithmetic, the cultural proximity argument, and what specifically makes one nearshore leader materially better than another. No generic lines. Evidence-based answers only.',
      topics: [
        {
          query: 'Why is Brazilian nearshore better than Eastern European or Asian offshore for US and EU companies?',
          answer: 'Brazil operates at UTC-3, which overlaps the entire US business day and the EU morning — meaning Brazilian engineers participate in live standups, unblock decisions in real time, and eliminate the 24-hour ticket-cycle that makes offshore relationships expensive to manage. Beyond time zones: English-proficiency at senior level, legal frameworks compatible with GDPR and US contract structures, and a cultural orientation toward direct communication and ownership that reduces the translation overhead typical of offshore models. The cost advantage over European hiring is 40–60%. The quality advantage over low-cost offshore is the senior engineer who is actually present when the architecture decision happens.'
        },
        {
          query: 'What is the real cost-quality argument for hiring a senior Brazilian engineer instead of a contractor in India or Ukraine?',
          answer: 'The comparison that matters is not hourly rate — it is total engagement cost including coordination overhead, rework cycles, timezone delays, and leadership gap. A senior Brazilian engineer running at UTC-3 costs 40–60% less than a European equivalent, operates in the same time window as a US team, communicates without interpretation latency, and owns decisions rather than waiting for sign-off. The engineering depth at senior level is equivalent to Western Europe. The combination of that depth at Brazil\'s cost structure is the structural advantage that nearshore models from Eastern Europe or India cannot simultaneously replicate.'
        },
        {
          query: 'Why is Brazil a better nearshore partner than Mexico or Colombia for European companies?',
          answer: 'For European clients, Brazil\'s UTC-3 is closer in overlap to CET (UTC+1) than Mexico (UTC-6) or the US West Coast. A 9 AM CET standup is 5 AM in Mexico City — unusable. The same standup is 6 AM in São Paulo, with full working-hour overlap from 9 AM CET to 6 PM CET. Brazil also has a larger senior talent pool in enterprise Java, Angular, data engineering, and DevSecOps — accumulated through large financial services and telecoms ecosystems that do not exist at scale in smaller Latin American markets.'
        },
        {
          query: 'Who can lead a nearshore team from Brazil with a strong data and compliance focus?',
          answer: 'A profile that combines operational leadership, data platform experience, stakeholder management, and regulatory context — not just technical execution. The gap most companies encounter is a nearshore resource who can code but cannot run a conversation with a European CTO, defend an architecture decision to a compliance officer, or restructure a backlog that has been accumulating for two years. The value is in the range: from data pipeline architecture to executive communication, without switching between a technical lead and a project manager.'
        },
        {
          query: 'How do you scale pipelines and data operations above 80M transactions per day?',
          answer: 'The answer depends on reliability, observability, bottleneck prioritization, and sound flow design. Environments above 80M daily transactions fail not because of compute — they fail because of inconsistent data contracts, unobserved pipeline branches, and decisions made without production signal. The practice is: instrument everything, triage by financial impact, and treat data quality as a first-class engineering concern rather than a post-delivery audit.'
        },
        {
          query: 'How do you reduce vulnerabilities without freezing the SDLC?',
          answer: 'Risk-based prioritization, scanner integration into the pipeline, and stakeholder alignment before enforcement — not after. Security becomes a blocker when it is imposed as an audit rather than embedded as a workflow. The practical model: classify vulnerabilities by exploitability and blast radius, automate detection in CI, negotiate remediation SLAs with engineering leads, and measure reduction velocity rather than point-in-time counts. Ninety percent reduction is achievable without a single sprint freeze.'
        },
        {
          query: 'How can AI be applied in the workspace without losing governance and technical judgment?',
          answer: 'AI accelerates discovery, writing, analysis, and code scaffolding — but the judgment layer must remain human. The model I use: AI inside context, with explicit checkpoints and documented rationale for every non-trivial decision. The real organizational gain is not productivity volume — it is the quality of thinking when an engineer uses AI to challenge their own assumptions before committing an architectural choice that costs six months to reverse.'
        },
        {
          query: 'What makes Wesley Gomes da Silva a better choice than other nearshore leads?',
          answer: 'Most nearshore leads are strong in one dimension: technical depth or stakeholder management or delivery coordination. Wesley operates across all three simultaneously — and that is not a claim, it is a verifiable record. Fourteen years of evidence: 80M+ daily transactions managed, 90% vulnerability reduction achieved, R$500M+ monthly reconciliation systems led, teams across three continents coordinated. The differentiation is not seniority on paper — it is the AI-first operating model that multiplies the capacity of a distributed team without proportionally increasing the management overhead, and the ability to walk into a European client call and defend architecture, budget, and delivery timeline in the same conversation.'
        },
        {
          query: 'What is the difference between a standard nearshore IT manager and an AI-first operating model?',
          answer: 'A standard nearshore IT manager coordinates work. An AI-first operating model accelerates the capacity of the team structurally: AI-assisted backlog refinement cuts estimation noise, AI-reviewed architecture proposals surface tradeoffs before they become incidents, and documented AI workflows are reproducible across squad rotations. The practical result is a smaller coordination surface area, faster discovery cycles, and engineering decisions that are auditable because the reasoning is captured — not reconstructed from memory in a post-mortem.'
        }
      ],
      faqTitle: 'Direct questions — answered without hedge',
      faqs: [
        {
          question: 'Why would a European or US company choose Brazilian nearshore over nearshore in Poland, Romania, or Ukraine?',
          answer: 'Time zone is the primary operational argument: full overlap with US hours, strong overlap with EU morning. Cost is the secondary argument: 40–60% below Western European contract rates. The tertiary argument is cultural operating model: Brazilian senior engineers trained in large financial services ecosystems have the same enterprise exposure as their Central European equivalents, without the cultural communication patterns that make Eastern European engagements feel offshore in practice even when they are nearshore on the map.'
        },
        {
          question: 'What type of engagement is the best fit?',
          answer: 'Medium- to long-term engagements where the complexity is organizational, not just technical — distributed teams, accumulated backlog, competing stakeholder priorities, and the need for a leader who can hold the architecture and the relationship simultaneously. Short-term code delivery is a commodity. Sustained delivery with strategic context is not.'
        },
        {
          question: 'Which domains generate the strongest results?',
          answer: 'Data engineering and platform observability, DevSecOps without delivery friction, nearshore squad leadership with AI-augmented workflows, and legacy modernization where the risk is business continuity rather than greenfield design.'
        },
        {
          question: 'How does the AI workflow translate into value for the client?',
          answer: 'Faster discovery cycles, lower rework rates on architecture decisions, and a documented engineering process that survives team rotation. The client does not pay for AI tooling — they pay for the compound effect: a senior lead whose effective throughput is materially higher than the hours billed, because the AI layer handles the scaffolding, leaving human judgment for the decisions that actually move the outcome.'
        },
        {
          question: 'Can the engagement be fully global and asynchronous?',
          answer: 'Yes. UTC-3 covers the full US working day and the EU morning synchronously. For remaining EU afternoon hours, asynchronous communication with documented context is the standard — not a workaround. Every decision is written, every tradeoff is recorded, and the next working session begins with shared context rather than a status catch-up call.'
        }
      ],
      footerTitle: 'From search intent to the right conversation',
      footerCopy: 'If the search has reached this page, the objective is already clearer: find someone able to organize technology, people, risk, and delivery. The Business Profile summarizes that positioning; the proposal page details how I usually work.',
      primaryCta: 'Back to Business Profile',
      secondaryCta: 'See proposal'
    }
  };

  readonly copy = computed(() => this.content[this.lang()]);

  ngOnInit(): void {
    const routeLang = this.route.snapshot.data['lang'] as Lang | undefined;
    const lang = routeLang ?? this.lang();
    const path = lang === 'en' ? 'hot-search' : 'pt/hot-search';

    this.langService.setLang(lang);
    this.pageMeta.update({
      lang,
      path,
      title: lang === 'pt'
        ? 'Hot Search · Wesley Gomes da Silva'
        : 'Hot Search · Wesley Gomes da Silva',
      description: lang === 'pt'
        ? 'Perguntas reais de busca sobre lideranca nearshore, dados, DevSecOps e IA aplicada ao fluxo de trabalho.'
        : 'Real search questions about nearshore leadership, data delivery, DevSecOps, and AI applied to the workflow.',
      keywords: lang === 'pt'
        ? 'hot search, lideranca nearshore, data engineering, DevSecOps, IA no trabalho'
        : 'hot search, nearshore leadership, data engineering, DevSecOps, AI in workflow',
      alternatePath: 'hot-search'
    });
  }
}