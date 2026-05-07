import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Lang, LanguageService } from '../../services/language.service';
import { PageMetaService } from '../../services/page-meta.service';

interface Article {
  tag: string;
  title: string;
  summary: string;
  readTime: string;
  slug: string;
}

interface NewsletterContent {
  eyebrow: string;
  title: string;
  intro: string;
  subscribeTitle: string;
  subscribeCopy: string;
  subscribeCta: string;
  articlesTitle: string;
  articles: Article[];
  whyTitle: string;
  whyPoints: string[];
  closingTitle: string;
  closingCopy: string;
  primaryCta: string;
  secondaryCta: string;
  readMoreLabel: string;
}

@Component({
  selector: 'app-newsletter-page',
  imports: [RouterLink, Header, Footer],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss'
})
export class NewsletterPage implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly langService = inject(LanguageService);
  readonly pageMeta = inject(PageMetaService);
  readonly lang = this.langService.lang;

  readonly content: Record<Lang, NewsletterContent> = {
    en: {
      eyebrow: 'Newsletter · Brazil × Global Talent',
      title: 'Brazil is the world\'s next Agile talent hub — and most companies haven\'t noticed yet',
      intro: 'A curated collection of evidence-based articles on why Brazilian senior professionals — bilingual, Agile-certified, enterprise-hardened — represent the most underpriced talent arbitrage in the global labour market. Each piece is written for international decision-makers: CTOs, VPs of Engineering, and Talent Acquisition leaders evaluating nearshore delivery for EU and US markets.',
      subscribeTitle: 'Get new articles directly',
      subscribeCopy: 'Each edition covers one argument — built with data, no filler. Brazilian talent market, nearshore delivery patterns, C2 English advantage, Agile maturity in Latin America, and what the best nearshore contracts actually look like.',
      subscribeCta: 'Subscribe via WhatsApp',
      articlesTitle: 'Published articles',
      articles: [
        {
          tag: 'Talent Market',
          title: 'Brazil produces more C2-level English speakers in tech than the entire Eastern European nearshore market combined',
          summary: 'A comparison of English-proficiency data, university output, and senior engineering supply across Brazil, Poland, Romania, and Ukraine. The conclusion challenges the default assumption that Eastern Europe owns the nearshore quality argument.',
          readTime: '7 min read',
          slug: 'brazil-c2-english-tech-talent'
        },
        {
          tag: 'Agile Delivery',
          title: 'Why Brazilian Agile PMs close sprint cycles faster than their EU counterparts — and what the data says',
          summary: 'An analysis of sprint velocity, stakeholder communication patterns, and retrospective adoption rates across nearshore teams. UTC-3 synchrony, cultural directness, and enterprise exposure explain outcomes that surprise first-time nearshore buyers.',
          readTime: '9 min read',
          slug: 'brazilian-agile-pm-sprint-velocity'
        },
        {
          tag: 'Cost Structure',
          title: 'The real cost of a senior Brazilian Agile PM vs. a contractor in Poland, Germany, or the US',
          summary: 'Total engagement cost modelling: day rate, coordination overhead, rework cycles, timezone delays, and onboarding drag. At equivalent seniority, the Brazilian profile lands 40–60% below Western Europe with zero loss of delivery quality when the hire is made correctly.',
          readTime: '11 min read',
          slug: 'cost-brazil-agile-pm-vs-europe'
        },
        {
          tag: 'C2 English',
          title: 'C2 English is not a credential — it is an operational multiplier for nearshore teams',
          summary: 'How language proficiency above B2 eliminates the hidden costs of nearshore delivery: interpretation latency, requirement ambiguity, stakeholder mistrust, and the 48-hour async loop that makes offshore engagements feel expensive even when the day rate is low.',
          readTime: '8 min read',
          slug: 'c2-english-nearshore-operational-multiplier'
        },
        {
          tag: 'Market Signal',
          title: 'EU and US companies are undervaluing Brazilian nearshore — here is the window before it closes',
          summary: 'Demand signals from LinkedIn, Stack Overflow, and Glassdoor indicate Brazilian senior engineers are still priced below market parity. Historical patterns from Poland (2010–2018) and India (2000–2012) suggest a 3–5 year correction window before arbitrage normalises.',
          readTime: '10 min read',
          slug: 'brazil-nearshore-arbitrage-window'
        },
        {
          tag: 'Hiring Guide',
          title: 'How to hire a Brazilian Agile PM for a European or US team — the contract structure that actually works',
          summary: 'A practical guide to engagement formats, time-zone coverage agreements, performance metrics, and the contractual clauses that protect both sides. Covers PJ (Pessoa Jurídica) vs. CLT, VAT considerations for EU buyers, and what a fair SLA looks like.',
          readTime: '13 min read',
          slug: 'hire-brazilian-agile-pm-eu-us-guide'
        }
      ],
      whyTitle: 'Why this newsletter exists',
      whyPoints: [
        'Brazil has 220M people, a mature enterprise tech sector, and a nearshore cost structure that EU and US companies systematically overlook.',
        'Most international conversations about nearshore talent default to Eastern Europe or India. The data on Brazilian senior professionals tells a different story.',
        'C2 English at scale, Agile maturity from large financial services and telecoms ecosystems, and UTC-3 overlap with the entire US working day create a combination that cannot be replicated elsewhere at the same price.',
        'This newsletter exists to make that argument — with evidence, without hype, for people who make hiring decisions.'
      ],
      closingTitle: 'Ready to evaluate Brazil for your next engagement?',
      closingCopy: 'The Business Profile summarises 14 years of delivery across data engineering, nearshore leadership, and AI-augmented workflows. The proposal page details how a typical engagement is structured.',
      primaryCta: 'See Business Profile',
      secondaryCta: 'Start a conversation',
      readMoreLabel: 'Read article'
    },
    pt: {
      eyebrow: 'Newsletter · Brasil × Talento Global',
      title: 'O Brasil é o próximo grande hub de talento Agile do mundo — e a maioria das empresas ainda não percebeu',
      intro: 'Uma coleção de artigos com base em dados sobre por que profissionais seniores brasileiros — bilíngues, certificados em Agile, com experiência enterprise — representam a maior arbitragem de talento subprecificada do mercado global. Cada artigo é escrito para tomadores de decisão internacionais: CTOs, VPs de Engenharia e líderes de Talent Acquisition que avaliam entrega nearshore para mercados da UE e dos EUA.',
      subscribeTitle: 'Receba novos artigos diretamente',
      subscribeCopy: 'Cada edição cobre um argumento — construído com dados, sem enrolação. Mercado de talento brasileiro, padrões de entrega nearshore, vantagem do inglês C2, maturidade Agile na América Latina e como os melhores contratos nearshore funcionam na prática.',
      subscribeCta: 'Assinar via WhatsApp',
      articlesTitle: 'Artigos publicados',
      articles: [
        {
          tag: 'Mercado de Talento',
          title: 'O Brasil forma mais falantes de inglês C2 em tech do que todo o mercado nearshore do Leste Europeu combinado',
          summary: 'Uma comparação de dados de proficiência em inglês, produção universitária e oferta de engenheiros seniores no Brasil, Polônia, Romênia e Ucrânia. A conclusão desafia a suposição padrão de que o Leste Europeu detém o argumento de qualidade nearshore.',
          readTime: '7 min de leitura',
          slug: 'brazil-c2-english-tech-talent'
        },
        {
          tag: 'Entrega Agile',
          title: 'Por que os Agile PMs brasileiros fecham ciclos de sprint mais rápido do que seus equivalentes europeus — e o que os dados dizem',
          summary: 'Uma análise de velocidade de sprint, padrões de comunicação com stakeholders e adoção de retrospectivas em times nearshore. Sincronia UTC-3, comunicação direta e exposição enterprise explicam resultados que surpreendem quem compra nearshore pela primeira vez.',
          readTime: '9 min de leitura',
          slug: 'brazilian-agile-pm-sprint-velocity'
        },
        {
          tag: 'Estrutura de Custo',
          title: 'O custo real de um Agile PM sênior brasileiro vs. um contratado na Polônia, Alemanha ou EUA',
          summary: 'Modelagem de custo total de engajamento: day rate, overhead de coordenação, ciclos de retrabalho, atrasos por fuso horário e arrasto de onboarding. Com senioridade equivalente, o perfil brasileiro fica 40–60% abaixo da Europa Ocidental sem perda de qualidade de entrega quando a contratação é feita corretamente.',
          readTime: '11 min de leitura',
          slug: 'cost-brazil-agile-pm-vs-europe'
        },
        {
          tag: 'Inglês C2',
          title: 'Inglês C2 não é uma credencial — é um multiplicador operacional para times nearshore',
          summary: 'Como a proficiência acima de B2 elimina os custos ocultos da entrega nearshore: latência de interpretação, ambiguidade de requisitos, desconfiança de stakeholders e o loop async de 48 horas que torna os engajamentos offshore caros mesmo quando o day rate é baixo.',
          readTime: '8 min de leitura',
          slug: 'c2-english-nearshore-operational-multiplier'
        },
        {
          tag: 'Sinal de Mercado',
          title: 'Empresas da UE e dos EUA estão subvalorizando o nearshore brasileiro — eis a janela antes que ela feche',
          summary: 'Sinais de demanda do LinkedIn, Stack Overflow e Glassdoor indicam que engenheiros seniores brasileiros ainda estão precificados abaixo da paridade de mercado. Padrões históricos da Polônia (2010–2018) e da Índia (2000–2012) sugerem uma janela de correção de 3–5 anos antes da arbitragem se normalizar.',
          readTime: '10 min de leitura',
          slug: 'brazil-nearshore-arbitrage-window'
        },
        {
          tag: 'Guia de Contratação',
          title: 'Como contratar um Agile PM brasileiro para um time europeu ou americano — a estrutura de contrato que realmente funciona',
          summary: 'Um guia prático sobre formatos de engajamento, acordos de cobertura de fuso horário, métricas de desempenho e as cláusulas contratuais que protegem ambos os lados. Cobre PJ vs. CLT, considerações de IVA para compradores da UE e como deve ser um SLA justo.',
          readTime: '13 min de leitura',
          slug: 'hire-brazilian-agile-pm-eu-us-guide'
        }
      ],
      whyTitle: 'Por que esta newsletter existe',
      whyPoints: [
        'O Brasil tem 220 milhões de pessoas, um setor de tech enterprise maduro e uma estrutura de custo nearshore que empresas da UE e dos EUA sistematicamente ignoram.',
        'A maioria das conversas internacionais sobre talento nearshore vai direto para o Leste Europeu ou Índia. Os dados sobre profissionais seniores brasileiros contam uma história diferente.',
        'Inglês C2 em escala, maturidade Agile forjada em grandes ecossistemas de serviços financeiros e telecomunicações, e sobreposição UTC-3 com todo o dia útil americano criam uma combinação que não pode ser replicada em outro lugar com o mesmo preço.',
        'Esta newsletter existe para fazer esse argumento — com evidências, sem hype, para quem toma decisões de contratação.'
      ],
      closingTitle: 'Pronto para avaliar o Brasil para o próximo engajamento?',
      closingCopy: 'O Business Profile resume 14 anos de entrega em data engineering, liderança nearshore e workflows com IA. A página de proposta detalha como um engajamento típico é estruturado.',
      primaryCta: 'Ver Business Profile',
      secondaryCta: 'Iniciar uma conversa',
      readMoreLabel: 'Ler artigo'
    }
  };

  readonly copy = computed(() => this.content[this.lang()]);

  ngOnInit(): void {
    const routeLang = this.route.snapshot.data['lang'] as Lang | undefined;
    const lang = routeLang ?? this.lang();
    const path = lang === 'en' ? 'newsletter' : 'pt/newsletter';

    this.langService.setLang(lang);
    this.pageMeta.update({
      lang,
      path,
      title: lang === 'pt'
        ? 'Newsletter · Brasil como Hub de Talento Agile Global · Wesley Gomes da Silva'
        : 'Newsletter · Brazil as a Global Agile Talent Hub · Wesley Gomes da Silva',
      description: lang === 'pt'
        ? 'Artigos com base em dados sobre profissionais brasileiros bilíngues, Agile PMs C2, entrega nearshore para UE e EUA.'
        : 'Evidence-based articles on bilingual Brazilian professionals, C2 Agile PMs, and nearshore delivery for EU and US markets.',
      keywords: lang === 'pt'
        ? 'newsletter, nearshore Brasil, Agile PM brasileiro, inglês C2, talento tech Brasil, contratação nearshore'
        : 'newsletter, Brazil nearshore, Brazilian Agile PM, C2 English, Brazil tech talent, nearshore hiring',
      alternatePath: 'newsletter'
    });
  }
}
