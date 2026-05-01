import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Lang, LanguageService } from '../../services/language.service';
import { PageMetaService } from '../../services/page-meta.service';

interface MetricItem {
  value: string;
  label: string;
}

interface ContentSection {
  title: string;
  description: string;
}

interface BusinessProfileContent {
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  metrics: MetricItem[];
  focusTitle: string;
  focusIntro: string;
  focusAreas: ContentSection[];
  modelTitle: string;
  modelIntro: string;
  operatingModel: ContentSection[];
  fitTitle: string;
  fitIntro: string;
  engagementFits: string[];
  closeTitle: string;
  closeCopy: string;
}

@Component({
  selector: 'app-business-profile-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Header, Footer],
  templateUrl: './business-profile.html',
  styleUrl: './business-profile.scss'
})
export class BusinessProfilePage implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly langService = inject(LanguageService);
  readonly pageMeta = inject(PageMetaService);
  readonly lang = this.langService.lang;

  readonly content: Record<Lang, BusinessProfileContent> = {
    pt: {
      eyebrow: 'Business Profile',
      title: 'Lideranca nearshore para dados, modernizacao e operacoes seguras',
      summary: 'Atuo a partir do Brasil conectando estrategia, execucao tecnica e gestao de times distribuidos. Meu foco esta em plataformas de dados, sustentacao critica, DevSecOps e aceleracao com IA aplicada ao trabalho diario.',
      primaryCta: 'Explorar buscas estrategicas',
      secondaryCta: 'Abrir proposta',
      metrics: [
        { value: '14+ anos', label: 'liderando entregas em tecnologia e operacao' },
        { value: '80M+', label: 'transacoes por dia em ecossistemas de dados' },
        { value: '90%', label: 'reducao de vulnerabilidades em trilhas criticas' },
        { value: '3 continentes', label: 'atuacao com times distribuidos e nearshore' }
      ],
      focusTitle: 'Onde gero mais valor',
      focusIntro: 'A combinacao de gestao, arquitetura e execucao ajuda a sair do discurso genérico e entrar em resultados operacionais medidos.',
      focusAreas: [
        {
          title: 'Data platforms e observabilidade',
          description: 'Estruturacao de pipelines, governanca, qualidade, linhagem e confiabilidade para ambientes com alta volumetria e impacto financeiro.'
        },
        {
          title: 'DevSecOps sem travar entrega',
          description: 'Priorizacao de risco, integracao de scanner no SDLC, acordos com stakeholders e evolucao continua sem transformar seguranca em gargalo.'
        },
        {
          title: 'Lideranca nearshore com IA aplicada',
          description: 'Uso de AI workspace, rituais ageis, clareza de backlog e contexto tecnico para acelerar discovery, delivery e sustentacao.'
        }
      ],
      modelTitle: 'Como costumo operar',
      modelIntro: 'O modelo de trabalho e direto, orientado a visibilidade, prioridade e comunicacao executiva.',
      operatingModel: [
        {
          title: 'Execucao com leitura de negocio',
          description: 'Traduzo necessidade de operacao, compliance e receita em backlog claro, dependencia mapeada e metas tangiveis.'
        },
        {
          title: 'Times distribuidos com cadencia simples',
          description: 'Estruturo fluxo entre produto, engenharia, seguranca, dados e operacao para reduzir ruído e aumentar previsibilidade.'
        },
        {
          title: 'Decisao guiada por prova',
          description: 'Uso indicadores, incidentes, lead time, risco e produtividade para defender mudancas e provar impacto.'
        }
      ],
      fitTitle: 'Tipos de desafio com melhor encaixe',
      fitIntro: 'Os cenarios abaixo combinam bem com meu repertorio atual.',
      engagementFits: [
        'Squads nearshore que precisam de lideranca tecnica e organizacional ao mesmo tempo.',
        'Operacoes reguladas ou com dependencia de seguranca, auditoria e qualidade de dados.',
        'Times que querem adotar IA no fluxo de trabalho sem perder governanca.',
        'Empresas que precisam modernizar backlog legado sem interromper o negocio.'
      ],
      closeTitle: 'Leitura rapida para recrutadores, parceiros e clientes',
      closeCopy: 'Se o objetivo for encontrar alguem que conecte dados, times, processo e entrega real, esta pagina funciona como capa executiva. A pagina Hot Search detalha as dores que costumo resolver e como isso aparece em linguagem de busca.'
    },
    en: {
      eyebrow: 'Business Profile',
      title: 'The case for Brazilian nearshore leadership — and why the gap matters',
      summary: 'Brazil operates at UTC-3: full overlap with the US working day, strong overlap with the EU morning. That is not a footnote — it is the structural reason nearshore from Brazil outperforms offshore from Asia and matches or exceeds nearshore from Eastern Europe at 40–60% lower cost. I work from São Paulo connecting strategy, technical execution, and distributed team leadership, with 14 years of evidence across financial services, data platforms, and enterprise security.',
      primaryCta: 'Why Brazil wins — read the full argument',
      secondaryCta: 'Open engagement proposal',
      metrics: [
        { value: '14+ years', label: 'leading technology and operational delivery' },
        { value: '80M+', label: 'daily transactions in data-intensive ecosystems' },
        { value: '90%', label: 'vulnerability reduction across critical tracks' },
        { value: '3 continents', label: 'distributed and nearshore team leadership' }
      ],
      focusTitle: 'Where I create measurably more value than the market alternative',
      focusIntro: 'Every claim below is backed by a verifiable outcome. The combination of technical depth, leadership range, and AI-first operating model is what makes the difference between a nearshore resource and a nearshore lead who actually moves the outcome.',
      focusAreas: [
        {
          title: 'Data platforms and observability',
          description: 'Pipeline architecture, governance, data quality, lineage, and reliability for environments processing above 80M daily transactions with direct financial and regulatory impact. Most nearshore leads manage data tickets. I design the system that makes the tickets stop recurring.'
        },
        {
          title: 'DevSecOps without freezing delivery',
          description: 'Risk-based vulnerability prioritization, scanner integration into the SDLC, SLA negotiation with engineering leads, and 90% reduction verified in production — not in a compliance report. Security as a delivery accelerator, not a gate.'
        },
        {
          title: 'AI-first nearshore leadership',
          description: 'AI-assisted backlog refinement, architecture review, and documentation workflows that multiply the effective throughput of a distributed team without proportionally increasing the coordination surface. The result is faster discovery, lower rework, and a documented engineering process that survives squad rotation.'
        }
      ],
      modelTitle: 'How I operate — and why it reduces your management overhead',
      modelIntro: 'The working model is built around one principle: every decision is written, every tradeoff is documented, and every sprint ends with shared context rather than status catch-up calls. That structure is what makes a distributed engagement feel like a co-located one.',
      operatingModel: [
        {
          title: 'Business-fluent technical execution',
          description: 'I translate operational, compliance, and revenue constraints into clear backlogs, mapped dependencies, and measurable outcomes — and I defend those decisions in a C-level meeting without switching to a different register.'
        },
        {
          title: 'Distributed teams with documented cadence',
          description: 'Structured flow between product, engineering, security, data, and operations. Noise reduction through written context. Predictability through visible priority — not through more meetings.'
        },
        {
          title: 'Evidence-driven decisions, not instinct-driven proposals',
          description: 'Indicators, incidents, lead time, risk signals, and productivity data are the inputs to every architectural and organizational recommendation. If it cannot be measured, it does not go into the proposal.'
        }
      ],
      fitTitle: 'Engagement types where the fit is strongest',
      fitIntro: 'These are not aspirational. They are the scenarios I have delivered in before and can deliver in again — immediately.',
      engagementFits: [
        'Nearshore squads that need a leader who can own the architecture and the stakeholder relationship simultaneously.',
        'Regulated environments where security, audit, and data quality are first-class delivery constraints, not afterthoughts.',
        'Teams adopting AI in the workflow who need governance alongside the acceleration.',
        'Companies modernizing legacy backlogs where the risk is business continuity, not greenfield design.'
      ],
      closeTitle: 'The competitive case in one paragraph',
      closeCopy: 'Brazilian nearshore at UTC-3 gives you full US overlap and strong EU morning overlap. Senior engineers from Brazil\'s financial services and enterprise ecosystems match Central European technical depth at 40–60% lower cost. I add the layer that most nearshore engagements are missing: an AI-first operating model that accelerates the entire team, and a leadership range that covers architecture, delivery, security, and executive communication without requiring a separate PM, a separate architect, and a separate compliance lead. That is the case. The Hot Search page gives you the evidence for every claim on this one.'
    }
  };

  readonly copy = computed(() => this.content[this.lang()]);

  ngOnInit(): void {
    const routeLang = this.route.snapshot.data['lang'] as Lang | undefined;
    const lang = routeLang ?? this.lang();
    const path = lang === 'en' ? 'business-profile' : 'pt/business-profile';

    this.langService.setLang(lang);
    this.pageMeta.update({
      lang,
      path,
      title: lang === 'pt'
        ? 'Business Profile · Wesley Gomes da Silva'
        : 'Business Profile · Wesley Gomes da Silva',
      description: lang === 'pt'
        ? 'Capa executiva com foco em lideranca nearshore, plataformas de dados, DevSecOps e modernizacao orientada por resultado.'
        : 'Executive cover page focused on nearshore leadership, data platforms, DevSecOps, and measurable modernization outcomes.',
      keywords: lang === 'pt'
        ? 'business profile, lideranca nearshore, gestor de TI, plataformas de dados, DevSecOps'
        : 'business profile, nearshore leadership, IT manager, data platforms, DevSecOps',
      alternatePath: 'business-profile'
    });
  }
}