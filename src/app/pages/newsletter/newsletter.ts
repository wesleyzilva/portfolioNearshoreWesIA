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
  edition?: string;
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
      title: 'Brazil is the world\'s next Agile talent hub — and most startups are still hiring wrong',
      intro: 'Two editions. Six articles each. Audience: CTOs, VPs of Engineering, and founders evaluating nearshore delivery for EU and US markets. Edition 1 makes the talent arbitrage argument — cost, quality, C2 English, and Agile maturity. Edition 2 is written for funded startups: why your PM search is failing, how LATAM nearshore compresses your funding-to-MVP cycle, and what AI-augmented remote delivery looks like when it actually works.',
      subscribeTitle: 'Get new articles directly',
      subscribeCopy: 'Each edition covers one argument — built with data, no filler. Brazilian talent market, nearshore delivery patterns, C2 English advantage, Agile maturity in Latin America, and what the best nearshore contracts actually look like.',
      subscribeCta: 'Subscribe via WhatsApp',
      articlesTitle: 'All editions',
      articles: [
        // ── Edition 3: Delivery Manager · AI-first · Nearshore fit ───────────────
        {
          tag: 'Market Signal',
          title: 'The profile tech companies are actively seeking in 2026 — and why it is hard to find',
          summary: '"Delivery Manager" grew ~40% in EU and North American tech job listings between 2023–2025, replacing "IT Manager" wherever DevOps and Agile matured. UTC-3 with 4h NY overlap is the nearshore sweet-spot: cost-competitive like offshore, collaborative like onshore. "AI-assisted workflows" became a hard selection criterion for senior roles in 2025–2026. Scale-ups building their first nearshore squad, digital transformation consultancies, and payments fintechs represent the three strongest fits. The profile combining DevSecOps + Data Engineering + Agile facilitation in a real payments context places in the top 10–15% of candidates — not because of a single credential, but because the combination is rare.',
          readTime: '8 min read',
          slug: 'delivery-manager-profile-market-demand-2026',
          edition: 'Edition 3'
        },
        {
          tag: 'Talent Market',
          title: 'Brazil produces more C2-level English speakers in tech than the entire Eastern European nearshore market combined',
          summary: 'A comparison of English-proficiency data, university output, and senior engineering supply across Brazil, Poland, Romania, and Ukraine. The conclusion challenges the default assumption that Eastern Europe owns the nearshore quality argument.',
          readTime: '7 min read',
          slug: 'brazil-c2-english-tech-talent',
          edition: 'Edition 1'
        },
        {
          tag: 'Agile Delivery',
          title: 'Why Brazilian Agile PMs close sprint cycles faster than their EU counterparts — and what the data says',
          summary: 'An analysis of sprint velocity, stakeholder communication patterns, and retrospective adoption rates across nearshore teams. UTC-3 synchrony, cultural directness, and enterprise exposure explain outcomes that surprise first-time nearshore buyers.',
          readTime: '9 min read',
          slug: 'brazilian-agile-pm-sprint-velocity',
          edition: 'Edition 1'
        },
        {
          tag: 'Cost Structure',
          title: 'The real cost of a senior Brazilian Agile PM vs. a contractor in Poland, Germany, or the US',
          summary: 'Total engagement cost modelling: day rate, coordination overhead, rework cycles, timezone delays, and onboarding drag. At equivalent seniority, the Brazilian profile lands 40–60% below Western Europe with zero loss of delivery quality when the hire is made correctly.',
          readTime: '11 min read',
          slug: 'cost-brazil-agile-pm-vs-europe',
          edition: 'Edition 1'
        },
        {
          tag: 'C2 English',
          title: 'C2 English is not a credential — it is an operational multiplier for nearshore teams',
          summary: 'How language proficiency above B2 eliminates the hidden costs of nearshore delivery: interpretation latency, requirement ambiguity, stakeholder mistrust, and the 48-hour async loop that makes offshore engagements feel expensive even when the day rate is low.',
          readTime: '8 min read',
          slug: 'c2-english-nearshore-operational-multiplier',
          edition: 'Edition 1'
        },
        {
          tag: 'Market Signal',
          title: 'EU and US companies are undervaluing Brazilian nearshore — here is the window before it closes',
          summary: 'Demand signals from LinkedIn, Stack Overflow, and Glassdoor indicate Brazilian senior engineers are still priced below market parity. Historical patterns from Poland (2010–2018) and India (2000–2012) suggest a 3–5 year correction window before arbitrage normalises.',
          readTime: '10 min read',
          slug: 'brazil-nearshore-arbitrage-window',
          edition: 'Edition 1'
        },
        {
          tag: 'Hiring Guide',
          title: 'How to hire a Brazilian Agile PM for a European or US team — the contract structure that actually works',
          summary: 'A practical guide to engagement formats, time-zone coverage agreements, performance metrics, and the contractual clauses that protect both sides. Covers PJ (Pessoa Jurídica) vs. CLT, VAT considerations for EU buyers, and what a fair SLA looks like.',
          readTime: '13 min read',
          slug: 'hire-brazilian-agile-pm-eu-us-guide',
          edition: 'Edition 1'
        },
        // ── Edition 2: Startups · Funded products · AI-remote ─────────────────
        {
          tag: 'Startup Hiring',
          title: 'Why funded startups are replacing local PM contractors with LATAM talent — and not going back',
          summary: 'Series A and B companies in the US and EU routinely burn $180–280k/year on a domestic PM whose calendar is split across three internal priorities. LATAM nearshore delivers a dedicated senior profile at 45–55% of that cost, in the same timezone band, with enterprise Agile discipline. This article maps the decision pattern that is driving the shift.',
          readTime: '10 min read',
          slug: 'startups-latam-pm-over-local-contractors',
          edition: 'Edition 2'
        },
        {
          tag: 'AI + Remote Teams',
          title: 'AI-augmented remote delivery: how LATAM PMs are using AI to run international startup teams at 2× speed',
          summary: 'Brazilian PMs working across US and EU startup clients are embedding AI tooling — context-aware sprint planning, async stand-up synthesis, AI-generated requirement drafts — directly into their delivery cadence. The result: 40% less coordination overhead, 30% faster decision loops, and sprint reviews that actually influence the backlog. This is what AI for remote work looks like in practice.',
          readTime: '9 min read',
          slug: 'ai-augmented-remote-delivery-latam-pm',
          edition: 'Edition 2'
        },
        {
          tag: 'Digital Product',
          title: 'From aporte to MVP: how LATAM nearshore delivery compresses the funding-to-product timeline for startups',
          summary: 'Most funded startups lose 6–9 months between closing a round and shipping a functional product. The bottleneck is rarely technical — it is discovery, prioritisation, and stakeholder alignment. A LATAM nearshore PM embedded from day one of the aporte cycle cuts that lag in half. This article documents the delivery pattern with three anonymised case studies.',
          readTime: '12 min read',
          slug: 'latam-nearshore-funding-to-mvp-startup',
          edition: 'Edition 2'
        },
        {
          tag: 'Stakeholder Mapping',
          title: 'Startup teams do not fail on technology — they fail on stakeholder alignment. Here is how to fix it remotely.',
          summary: 'Remote startup teams with distributed investors, fractional executives, and cross-timezone engineers are a stakeholder-mapping problem dressed as a product problem. This article presents the stakeholder matrix framework used in three LATAM nearshore engagements, the async communication contracts that replaced recurring meetings, and the OKR cadence that kept remote investors confident without weekly calls.',
          readTime: '11 min read',
          slug: 'startup-remote-stakeholder-mapping-latam',
          edition: 'Edition 2'
        },
        {
          tag: 'PM Search',
          title: 'The $50k PM search problem: why startups cannot find a PM who understands both product and Agile delivery',
          summary: 'Most PM job posts attract candidates who are strong on product sense but weak on execution, or strong on Agile ceremonies but weak on business context. The profile that combines both — bilingual, enterprise-tested, Agile-certified, product-aware — is rare in Western markets and abundant in LATAM. This article explains why, and what a calibrated LATAM PM search looks like in 2025.',
          readTime: '8 min read',
          slug: 'startup-pm-search-latam-product-agile',
          edition: 'Edition 2'
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
      title: 'O Brasil é o próximo grande hub de talento Agile do mundo — e a maioria das startups ainda está contratando errado',
      intro: 'Duas edições. Seis artigos cada. Público: CTOs, VPs de Engenharia e fundadores avaliando entrega nearshore para mercados da UE e dos EUA. A Edição 1 defende a arbitragem de talento — custo, qualidade, inglês C2 e maturidade Agile. A Edição 2 foi escrita para startups com aporte: por que sua busca por PM está falhando, como o nearshore LATAM comprime seu ciclo de funding-para-MVP e como é a entrega remota com IA quando funciona de verdade.',
      subscribeTitle: 'Receba novos artigos diretamente',
      subscribeCopy: 'Cada edição cobre um argumento — construído com dados, sem enrolação. Mercado de talento brasileiro, padrões de entrega nearshore, vantagem do inglês C2, maturidade Agile na América Latina e como os melhores contratos nearshore funcionam na prática.',
      subscribeCta: 'Assinar via WhatsApp',
      articlesTitle: 'Todas as edições',
      articles: [
        // ── Edição 3: Delivery Manager · IA-first · Fit nearshore ────────────────
        {
          tag: 'Sinal de Mercado',
          title: 'O perfil que o mercado tech está procurando em 2026 — e por que é difícil de encontrar',
          summary: '"Delivery Manager" cresceu ~40% nas vagas de TI em Europa e América do Norte entre 2023–2025, substituindo "IT Manager" onde DevOps e Agile maduraram de verdade. UTC-3 com 4h de sobreposição NY é o sweet-spot nearshore: competitivo como offshore, colaborativo como onshore. "AI-assisted workflows" virou critério de seleção para vagas seniores em 2025–2026. Scale-ups montando o primeiro squad nearshore, consultorias de transformação digital e fintechs de pagamentos representam os três fits mais fortes. O perfil que combina DevSecOps + Data Engineering + Agile facilitation em contexto real de pagamentos entra no top 10–15% dos candidatos — não por uma credencial isolada, mas porque a combinação é rara.',
          readTime: '8 min de leitura',
          slug: 'delivery-manager-profile-market-demand-2026',
          edition: 'Edição 3'
        },
        {
          tag: 'Mercado de Talento',
          title: 'O Brasil forma mais falantes de inglês C2 em tech do que todo o mercado nearshore do Leste Europeu combinado',
          summary: 'Uma comparação de dados de proficiência em inglês, produção universitária e oferta de engenheiros seniores no Brasil, Polônia, Romênia e Ucrânia. A conclusão desafia a suposição padrão de que o Leste Europeu detém o argumento de qualidade nearshore.',
          readTime: '7 min de leitura',
          slug: 'brazil-c2-english-tech-talent',
          edition: 'Edição 1'
        },
        {
          tag: 'Entrega Agile',
          title: 'Por que os Agile PMs brasileiros fecham ciclos de sprint mais rápido do que seus equivalentes europeus — e o que os dados dizem',
          summary: 'Uma análise de velocidade de sprint, padrões de comunicação com stakeholders e adoção de retrospectivas em times nearshore. Sincronia UTC-3, comunicação direta e exposição enterprise explicam resultados que surpreendem quem compra nearshore pela primeira vez.',
          readTime: '9 min de leitura',
          slug: 'brazilian-agile-pm-sprint-velocity',
          edition: 'Edição 1'
        },
        {
          tag: 'Estrutura de Custo',
          title: 'O custo real de um Agile PM sênior brasileiro vs. um contratado na Polônia, Alemanha ou EUA',
          summary: 'Modelagem de custo total de engajamento: day rate, overhead de coordenação, ciclos de retrabalho, atrasos por fuso horário e arrasto de onboarding. Com senioridade equivalente, o perfil brasileiro fica 40–60% abaixo da Europa Ocidental sem perda de qualidade de entrega quando a contratação é feita corretamente.',
          readTime: '11 min de leitura',
          slug: 'cost-brazil-agile-pm-vs-europe',
          edition: 'Edição 1'
        },
        {
          tag: 'Inglês C2',
          title: 'Inglês C2 não é uma credencial — é um multiplicador operacional para times nearshore',
          summary: 'Como a proficiência acima de B2 elimina os custos ocultos da entrega nearshore: latência de interpretação, ambiguidade de requisitos, desconfiança de stakeholders e o loop async de 48 horas que torna os engajamentos offshore caros mesmo quando o day rate é baixo.',
          readTime: '8 min de leitura',
          slug: 'c2-english-nearshore-operational-multiplier',
          edition: 'Edição 1'
        },
        {
          tag: 'Sinal de Mercado',
          title: 'Empresas da UE e dos EUA estão subvalorizando o nearshore brasileiro — eis a janela antes que ela feche',
          summary: 'Sinais de demanda do LinkedIn, Stack Overflow e Glassdoor indicam que engenheiros seniores brasileiros ainda estão precificados abaixo da paridade de mercado. Padrões históricos da Polônia (2010–2018) e da Índia (2000–2012) sugerem uma janela de correção de 3–5 anos antes da arbitragem se normalizar.',
          readTime: '10 min de leitura',
          slug: 'brazil-nearshore-arbitrage-window',
          edition: 'Edição 1'
        },
        {
          tag: 'Guia de Contratação',
          title: 'Como contratar um Agile PM brasileiro para um time europeu ou americano — a estrutura de contrato que realmente funciona',
          summary: 'Um guia prático sobre formatos de engajamento, acordos de cobertura de fuso horário, métricas de desempenho e as cláusulas contratuais que protegem ambos os lados. Cobre PJ vs. CLT, considerações de IVA para compradores da UE e como deve ser um SLA justo.',
          readTime: '13 min de leitura',
          slug: 'hire-brazilian-agile-pm-eu-us-guide',
          edition: 'Edição 1'
        },
        // ── Edição 2: Startups · Produto digital · IA remota ──────────────────
        {
          tag: 'Contratação Startup',
          title: 'Por que startups com aporte estão substituindo PMs locais por talentos LATAM — e não voltam atrás',
          summary: 'Empresas em estágio Series A e B nos EUA e UE gastam R$900k–1,4M/ano em um PM doméstico cuja agenda está dividida entre três prioridades internas. O nearshore LATAM entrega um perfil sênior dedicado a 45–55% desse custo, na mesma faixa de fuso horário, com disciplina Agile enterprise. Este artigo mapeia o padrão de decisão que está impulsionando essa mudança.',
          readTime: '10 min de leitura',
          slug: 'startups-latam-pm-over-local-contractors',
          edition: 'Edição 2'
        },
        {
          tag: 'IA + Times Remotos',
          title: 'Entrega remota com IA: como PMs do LATAM usam inteligência artificial para rodar times internacionais de startup em 2× mais velocidade',
          summary: 'PMs brasileiros trabalhando com clientes de startups nos EUA e UE estão integrando ferramentas de IA — planejamento de sprint com contexto, síntese de stand-up assíncrono, rascunhos de requisitos gerados por IA — diretamente na cadência de entrega. O resultado: 40% menos overhead de coordenação, 30% mais velocidade nas decisões e sprint reviews que realmente influenciam o backlog.',
          readTime: '9 min de leitura',
          slug: 'ai-augmented-remote-delivery-latam-pm',
          edition: 'Edição 2'
        },
        {
          tag: 'Produto Digital',
          title: 'Do aporte ao MVP: como o nearshore LATAM comprime o ciclo de funding-para-produto em startups',
          summary: 'A maioria das startups com aporte perde 6–9 meses entre fechar a rodada e entregar um produto funcional. O gargalo raramente é técnico — é descoberta, priorização e alinhamento de stakeholders. Um PM nearshore LATAM embarcado desde o primeiro dia do ciclo de aporte corta essa defasagem pela metade. Este artigo documenta o padrão com três estudos de caso anonimizados.',
          readTime: '12 min de leitura',
          slug: 'latam-nearshore-funding-to-mvp-startup',
          edition: 'Edição 2'
        },
        {
          tag: 'Mapeamento de Stakeholders',
          title: 'Times de startup não falham na tecnologia — falham no alinhamento de stakeholders. Veja como resolver isso remotamente.',
          summary: 'Times remotos com investidores distribuídos, executivos fracionados e engenheiros em fusos diferentes são um problema de mapeamento de stakeholders disfarçado de problema de produto. Este artigo apresenta a matriz de stakeholders usada em três engajamentos nearshore LATAM, os contratos de comunicação assíncrona e a cadência de OKRs que manteve investidores remotos confiantes sem calls semanais.',
          readTime: '11 min de leitura',
          slug: 'startup-remote-stakeholder-mapping-latam',
          edition: 'Edição 2'
        },
        {
          tag: 'Busca por PM',
          title: 'O problema dos $50k na busca por PM: por que startups não encontram um PM que entenda produto E entrega Agile',
          summary: 'A maioria das vagas de PM atrai candidatos fortes em visão de produto mas fracos em execução, ou fortes em cerimônias Agile mas sem contexto de negócio. O perfil que combina os dois — bilíngue, testado em enterprise, certificado em Agile, orientado a produto — é raro nos mercados ocidentais e abundante no LATAM. Este artigo explica por quê e como é uma busca calibrada por PM LATAM em 2025.',
          readTime: '8 min de leitura',
          slug: 'startup-pm-search-latam-product-agile',
          edition: 'Edição 2'
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
        ? 'newsletter, nearshore Brasil, Agile PM brasileiro, inglês C2, talento tech Brasil, contratação nearshore, startup PM, produto digital, IA times remotos'
        : 'newsletter, Brazil nearshore, Brazilian Agile PM, C2 English, Brazil tech talent, nearshore hiring, startup PM search, funded startup product delivery, AI remote teams',
      alternatePath: 'newsletter'
    });
  }
}
