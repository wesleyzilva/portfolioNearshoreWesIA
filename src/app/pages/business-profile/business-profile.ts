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
      title: 'Nearshore leadership for data, modernization, and secure operations',
      summary: 'I work from Brazil connecting strategy, technical execution, and distributed team leadership. My focus is on data platforms, critical sustain, DevSecOps, and AI-enabled acceleration inside the daily workflow.',
      primaryCta: 'Explore hot search topics',
      secondaryCta: 'Open proposal',
      metrics: [
        { value: '14+ years', label: 'leading technology and operational delivery' },
        { value: '80M+', label: 'daily transactions in data-intensive ecosystems' },
        { value: '90%', label: 'vulnerability reduction across critical tracks' },
        { value: '3 continents', label: 'experience with distributed and nearshore teams' }
      ],
      focusTitle: 'Where I create the most value',
      focusIntro: 'The combination of leadership, architecture, and execution helps move the conversation away from generic claims and into measured operational results.',
      focusAreas: [
        {
          title: 'Data platforms and observability',
          description: 'Pipeline structure, governance, quality, lineage, and reliability for high-volume environments with financial and regulatory impact.'
        },
        {
          title: 'DevSecOps without slowing delivery',
          description: 'Risk-based prioritization, scanner integration into the SDLC, stakeholder alignment, and continuous evolution without turning security into a blocker.'
        },
        {
          title: 'Nearshore leadership with applied AI',
          description: 'AI workspace usage, agile rituals, backlog clarity, and technical context to accelerate discovery, delivery, and sustain.'
        }
      ],
      modelTitle: 'How I usually operate',
      modelIntro: 'The working model is direct and based on visibility, prioritization, and executive communication.',
      operatingModel: [
        {
          title: 'Execution with business reading',
          description: 'I translate operational, compliance, and revenue needs into clear backlogs, mapped dependencies, and measurable outcomes.'
        },
        {
          title: 'Distributed teams with simple cadence',
          description: 'I structure the flow between product, engineering, security, data, and operations to reduce noise and improve predictability.'
        },
        {
          title: 'Evidence-driven decisions',
          description: 'I use indicators, incidents, lead time, risk, and productivity signals to defend change and prove impact.'
        }
      ],
      fitTitle: 'Challenge types where the fit is strongest',
      fitIntro: 'These are the scenarios that align best with my current experience.',
      engagementFits: [
        'Nearshore squads that need technical and organizational leadership at the same time.',
        'Regulated operations with strong dependency on security, audit, and data quality.',
        'Teams that want to adopt AI in the workflow without losing governance.',
        'Companies modernizing legacy backlogs without interrupting the business.'
      ],
      closeTitle: 'Fast reading for recruiters, partners, and clients',
      closeCopy: 'If the goal is to find someone who can connect data, teams, process, and real delivery, this page works as an executive cover. The Hot Search page details the pains I usually solve and how they map to real search intent.'
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