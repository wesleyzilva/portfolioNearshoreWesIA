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
      title: 'Indexable content for real searches about nearshore leadership and technology delivery',
      intro: 'This page is organized to answer real search intent. Instead of generic positioning lines, it concentrates the questions recruiters, clients, and partners usually ask when looking for an IT leader with strong technical depth.',
      topics: [
        {
          query: 'Who can lead a nearshore team from Brazil with a strong data and compliance focus?',
          answer: 'My profile combines operational leadership, data platform experience, stakeholder management, and regulatory context. That matters when a company needs someone to accelerate delivery without losing control, governance, or quality.'
        },
        {
          query: 'How do you scale pipelines and data operations above 80M transactions per day?',
          answer: 'The answer depends on reliability, observability, bottleneck prioritization, and sound flow design. I have worked in environments where the challenge was not only throughput, but also consistency, traceability, and controlled financial impact.'
        },
        {
          query: 'How do you reduce vulnerabilities without freezing the SDLC?',
          answer: 'The practical answer is risk-based prioritization, scanner-enabled pipelines, alignment with partner areas, and objective routines. The goal is not security theater; it is to reduce exposure while keeping delivery moving.'
        },
        {
          query: 'How can AI be applied in the workspace without losing governance and technical judgment?',
          answer: 'I use AI as an accelerator for discovery, writing, analysis, and refinement, but always inside context, checkpoints, and review. The real gain happens when the team learns to use AI to think better, not only to produce more text.'
        },
        {
          query: 'What kind of leader can connect enterprise operations and POCs with a product mindset?',
          answer: 'My track record mixes critical operations, continuous improvement, and opportunity-driven proofs of concept. That applies to both enterprise ecosystems and smaller initiatives that need to validate value quickly.'
        }
      ],
      faqTitle: 'Direct questions',
      faqs: [
        {
          question: 'What type of engagement is the best fit?',
          answer: 'Medium- and long-term engagements, especially when there is a complex backlog, distributed teams, and the need for operational structure.'
        },
        {
          question: 'Which areas benefit the most?',
          answer: 'Data engineering, sustain, observability, DevSecOps, workflow modernization, and nearshore squad leadership.'
        },
        {
          question: 'Can the work be global?',
          answer: 'Yes. I have worked with teams and stakeholders across multiple regions while keeping communication in English and the delivery cadence driven by priorities.'
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