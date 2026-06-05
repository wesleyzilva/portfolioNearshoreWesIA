import Image from "next/image";
import ProofStrip from "@/components/ProofStrip";
import ProjectsSection from "@/components/ProjectsSection";

// ── DATA ──────────────────────────────────────────────────────────

const contacts = [
  {
    icon: "📞",
    label: "Call Direct",
    value: "+55 (16) 99721-2966",
    href: "tel:+5516997212966",
    event: "contact_phone",
    category: "lead",
    hoverBorder: "hover:border-blue-400/60",
    external: false,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+55 (16) 99721-2966",
    href: "https://wa.me/5516997212966?text=Hi%20Wesley%20%E2%80%94%20I%20found%20your%20portfolio",
    event: "contact_whatsapp",
    category: "lead",
    hoverBorder: "hover:border-green-400/60",
    external: true,
  },
  {
    icon: "✉",
    label: "Email",
    value: "wesley.zilva@gmail.com",
    href: "mailto:wesley.zilva@gmail.com?subject=Interview%20Request%20%E2%80%94%20Wesley%20Zilva",
    event: "contact_email",
    category: "lead",
    hoverBorder: "hover:border-cyan-400/60",
    external: false,
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "/in/wesleyzilva",
    href: "https://www.linkedin.com/in/wesleyzilva/",
    event: "contact_linkedin",
    category: "lead",
    hoverBorder: "hover:border-blue-500/60",
    external: true,
  },
  {
    icon: "</>",
    label: "GitHub",
    value: "/wesleyzilva",
    href: "https://github.com/wesleyzilva",
    event: "contact_github",
    category: "engagement",
    hoverBorder: "hover:border-slate-400/60",
    external: true,
  },
];

const timeline = [
  {
    period: "2010",
    role: "International Consultant (France Contractor) · Bernardin Consultants 🇫🇷",
    desc: "Bridge between French/Swiss high-tech manufacturers and the Brazilian market. Sectors: Security & Defense (infrared microchips — Ulis/Sofradir), Precision Industry (dosing machines — Contexa), Aviation/Military (connectors — Lemco).",
    tags: ["Market Development", "International Relations", "B2B", "France"],
  },
  {
    period: "2011 – 2013",
    role: "Product Owner · XBot 🇧🇷",
    desc: "Led 12 sales and partner teams across Brazil. Focus areas: technological education with robotics & programming logic, energy systems, security & simulation solutions.",
    tags: ["Product Owner", "Sales Management", "Robotics", "EdTech"],
  },
  {
    period: "2013 – 2016",
    role: "Technical Support Specialist · Amdocs Studios 🇺🇸 🇮🇳",
    desc: "Unix/OracleDB DBA. Shell Script & PL/SQL automation for performance optimization. Middleware admin (Tuxedo/Weblogic). Incident management via Remedy/CRM Clarify 12 on India–Brazil–USA shift model.",
    tags: ["Unix", "OracleDB", "PL/SQL", "Shell Script", "Tuxedo", "Weblogic"],
  },
  {
    period: "2016 – 2021",
    role: "Full Stack Developer – Billing, ITIL & Observability · Serasa Experian 🇺🇸 🇮🇳 🇨🇷",
    desc: "Full-stack (Java + Angular) on core Billing & CRM systems. Observability tech lead with Datadog and Dynatrace — 45% MTTR reduction. 80M+ tx/day. Integrated Salesforce, OutSystems, .NET, and legacy platforms.",
    tags: ["Java", "Angular", "Datadog", "Dynatrace", "Salesforce", "ITIL"],
  },
  {
    period: "2021 – 2024",
    role: "Agile Delivery Manager (HR · Legal · CS · Sales · Billing) · Serasa Experian 🇬🇧 🌍",
    desc: "5 squads × 7 engineers. KPIs: velocity, burndown, cycle time. Strategic roadmaps aligned to OKRs. Stakeholders in London & USA. Figma-to-engineering hand-off. Cross-BU dependency management.",
    tags: ["Agile", "SAFe", "OKRs", "Jira", "Figma", "Multi-squad", "5 squads"],
  },
  {
    period: "2024 – present",
    role: "IT Coordinator | Fintech M&A | Payments & Data · Serasa Experian 🇧🇷",
    desc: "Led Data squads on Databricks modernization (2 squads × 4 engineers). ETL squad for acquiring/sub-acquiring via Pentaho — 100% financial precision. DevSecOps zero-to-one with Veracode & Rapid7. BACEN, FEBRABAN, PCI-DSS compliance.",
    tags: ["Databricks", "Payments", "ETL", "DevSecOps", "Veracode", "PCI-DSS", "BACEN"],
    current: true,
  },
  {
    period: "2027 – next",
    role: "LATAM Agile Project Delivery | AI Agents · Contractor 🌎",
    desc: "Lateral move into global contract delivery. Running distributed teams with AI-powered squad framework (imDev · imQA · imPO). Targeting global stakeholders from LATAM. Full Stack specialist PM — async-first, zero hand-holding.",
    tags: ["AI Agents", "imSquad", "Contractor", "LATAM", "Remote", "Async"],
    current: false,
  },
];

// ── PAGE ──────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      {/* ══════════════════════════════════════════════
          HERO — Tudo acima do fold. Sem scroll para converter.
          Dados Clarity: 87% não passa de 15% de scroll.
          Download CV = CTA #1. WhatsApp = CTA #2.
      ══════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative flex flex-col bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0a1628] overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(76,201,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 15% 50%, rgba(76,201,240,0.08) 0%, transparent 55%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 85% 20%, rgba(247,37,133,0.06) 0%, transparent 50%)" }} />
        </div>

        {/* ── CONTENT — centralizado verticalmente para caber no viewport ── */}
        <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl w-full mx-auto px-8 pt-16 pb-4">

          {/* Foto — visível em todos os tamanhos */}
          <div className="flex-shrink-0">
            <div className="w-[100px] h-[120px] md:w-[150px] md:h-[185px] lg:w-[180px] lg:h-[220px] rounded-2xl overflow-hidden border-2 border-[#415A77]/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/wesley.jpg`}
                alt="Wesley Gomes da Silva"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Bloco de texto — foco no recrutador */}
          <div className="flex flex-col gap-4 text-center md:text-left max-w-xl w-full">

            {/* Badge disponível */}
            <span className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Remote · GMT-3 · Night shift ready
            </span>

            {/* Nome */}
            <h1
              className="font-extrabold tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "clamp(1.7rem, 4.5vw, 2.8rem)" }}
            >
              Wesley Gomes da Silva
            </h1>

            {/* Cargo */}
            <p className="text-base font-semibold text-[#4CC9F0]">
              Agile Delivery Manager · AI-First · Nearshore
            </p>

            {/* Tagline — claim, sem repetir os KPIs dos cards */}
            <p
              className="font-bold text-white leading-snug"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
            >
              Full Stack specialist PM empowering{" "}
              <span className="text-[#4CC9F0]">remote teams</span> to ship faster through{" "}
              <span className="text-[#4CC9F0]">AI agents</span> and deep technical leadership,{" "}
              leveraging the best professionals from around the world and delivering your project.
            </p>

            {/* Separador */}
            <div className="w-12 h-px bg-[#4CC9F0]/40 self-center md:self-start" />

            {/* Métricas — 4 KPIs em destaque */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { value: "6+", label: "global markets" },
                { value: "30+", label: "tools in production" },
                { value: "12+", label: "projects delivered" },
                { value: "24/7", label: "coverage" },
                { value: "5+", label: "squads delivered" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col items-center md:items-start px-3 py-2 rounded-xl bg-[#1B263B]/60 border border-[#415A77]/40"
                >
                  <span className="text-[#4CC9F0] font-extrabold text-xl tabular-nums leading-tight">{m.value}</span>
                  <span className="text-[#E0E1DD]/50 text-[10px] leading-tight mt-0.5">{m.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── PROOF STRIP — fixo na base do hero, dentro do viewport ── */}
        <div className="relative z-10">
          <ProofStrip />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════ */}
      <section
        id="about"
        className="scroll-mt-20 bg-[#0D1B2A]"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Chronology" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Quick snapshot for recruiters &amp; CTOs
          </h2>
          <p className="text-center text-[#4CC9F0]/60 text-base mb-10">
            PM + Tech · Async-First · Distributed Teams · Zero Hand-Holding
          </p>

          <p className="max-w-3xl mx-auto text-center text-base leading-relaxed text-[#E0E1DD]/70 mb-14">
            From{" "}
            <strong className="text-white">24/7 support engineer</strong>{" "}
            on India 🇮🇳 &amp; USA 🇺🇸 night shifts — to orchestrating{" "}
            <strong className="text-white">5 global Agile squads</strong>{" "}
            across USA 🇺🇸, London 🇬🇧 &amp; Colombia 🇨🇴 — to{" "}
            <strong className="text-white">fine-tuned technical coordinator</strong>{" "}
            delivering with the precision of a watchmaker.
          </p>

          {/* Career timeline */}
          <div className="flex flex-col gap-0 max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.current ? "bg-green-400 ring-2 ring-green-400/30" : "bg-[#4CC9F0]"}`} />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#415A77]/40 my-1" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-[#4CC9F0] font-mono font-semibold">
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/25 text-green-400 font-bold tracking-widest uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-white font-semibold mt-0.5">{item.role}</p>
                  <p className="text-sm text-[#E0E1DD]/60 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════════ */}
      <section
        id="portfolio"
        className="scroll-mt-20 bg-[#0D1B2A]"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Portfolio Projects" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            12 projects · real results
          </h2>
          <p className="text-center text-[#E0E1DD]/45 text-sm mb-10">
            Click any card to see context, actions, and outcomes.
          </p>
          <ProjectsSection />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TOOLS & PLATFORMS
      ══════════════════════════════════════════════ */}
      <section
        id="tools"
        className="scroll-mt-20"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Tools & Platforms" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            A battle-tested toolbox
          </h2>
          <p className="text-center text-[#E0E1DD]/45 text-sm mb-10">
            Enterprise platforms, cloud, observability and delivery tools — used in production across fintech, payments and data.
          </p>

          <div className="flex flex-col gap-10">
            {[
              {
                category: "Delivery & Collaboration",
                color: "#4CC9F0",
                items: [
                  { name: "Jira / Jira Service Mgmt", note: "Sprint planning, velocity tracking, SLA queues — daily driver for team alignment and stakeholder visibility" },
                  { name: "Monday.com", note: "Cross-team roadmaps, risk registers, executive-ready status dashboards" },
                  { name: "Azure DevOps / Boards", note: "End-to-end delivery tracking from backlog to release; integrated with CI/CD pipelines" },
                  { name: "Slack / MS Teams", note: "Async standups, incident war rooms, stakeholder broadcast channels" },
                  { name: "Confluence / Notion", note: "Project charters, decision logs, retrospective playbooks, onboarding runbooks" },
                  { name: "GitHub / GitHub Actions", note: "Release tracking, PR review cycles, CI/CD gate management for delivery readiness" },
                  { name: "Figma", note: "Design-to-engineering handoff validation; prototype reviews in sprint ceremonies" },
                ],
              },
              {
                category: "Agile & Frameworks",
                color: "#F72585",
                items: [
                  { name: "Scrum", note: "Sprint ceremonies facilitation, backlog refinement, Definition of Done ownership" },
                  { name: "SAFe", note: "PI Planning, ART coordination, cross-team dependency management at program level" },
                  { name: "Kanban", note: "WIP limits, flow metrics (cycle time, throughput), continuous delivery cadence" },
                  { name: "OKRs / KPIs", note: "Quarterly goal setting aligned to business outcomes; delivery metrics dashboard for C-level" },
                  { name: "DORA Metrics", note: "Deployment frequency, lead time, MTTR and change failure rate tracking" },
                ],
              },
              {
                category: "ITSM & Incident Management",
                color: "#7209B7",
                items: [
                  { name: "ServiceNow", note: "CAB facilitation, incident escalation workflows, SLA compliance reporting — enterprise ITSM at scale" },
                  { name: "Zendesk", note: "Support SLA governance, customer escalation paths, CSAT improvement tracking" },
                  { name: "Freshdesk", note: "Support team KPIs, ticket workflow automation, customer health dashboards" },
                  { name: "Datadog", note: "SLA/SLO dashboards for executive reporting; incident impact quantification and postmortem facilitation" },
                  { name: "Dynatrace", note: "Production stability metrics; MTTR reduction tracking; root cause analysis coordination" },
                ],
              },
              {
                category: "Reporting & Analytics",
                color: "#4CC9F0",
                items: [
                  { name: "Power BI", note: "Delivery KPI dashboards for C-level; sprint velocity, cycle time and throughput visualization" },
                  { name: "Tableau", note: "Data storytelling for stakeholders; project health reports and financial KPIs for CFO audiences" },
                  { name: "Google Analytics", note: "Product adoption tracking; user behavior insights to inform roadmap prioritization" },
                  { name: "Microsoft Clarity", note: "UX friction detection; heatmap analysis to guide sprint prioritization" },
                  { name: "Amplitude", note: "Product analytics for feature adoption and retention; funnel analysis to drive data-informed backlog decisions" },
                  { name: "Adobe Analytics", note: "Digital experience metrics; conversion funnel oversight; user journey analysis for product teams" },
                  { name: "Databricks", note: "Data pipeline project oversight; ETL delivery coordination; large-scale migration management" },
                ],
              },
              {
                category: "CRM & Stakeholder Alignment",
                color: "#F72585",
                items: [
                  { name: "Salesforce", note: "Pipeline visibility for tech-enabled sales; custom reports for leadership; cross-BU workflow automation" },
                  { name: "HubSpot", note: "Lead-to-delivery alignment; campaign performance visibility for product teams" },
                  { name: "Dynamics 365", note: "Cross-functional CRM/ERP integration; project cost visibility and procurement tracking" },
                ],
              },
              {
                category: "Cloud & Infrastructure (PM Level)",
                color: "#7209B7",
                items: [
                  { name: "AWS", note: "Infrastructure cost governance, cloud migration roadmaps, vendor SLA oversight across services" },
                  { name: "Azure", note: "DevOps pipeline tracking, sprint analytics, cloud resource and capacity planning" },
                  { name: "GCP", note: "Data platform governance, BigQuery project oversight, Pub/Sub event pipeline delivery" },
                  { name: "Docker / Kubernetes", note: "Container release coordination, environment parity management, rollback planning" },
                ],
              },
              {
                category: "Security, Compliance & Governance",
                color: "#4CC9F0",
                items: [
                  { name: "Veracode", note: "DevSecOps gate ownership; SAST/DAST integrated into sprint Definition of Done" },
                  { name: "Checkmarx", note: "Security backlog prioritization; vulnerability remediation sprint planning" },
                  { name: "PCI-DSS / BACEN", note: "Regulatory delivery milestones; audit readiness project tracks; compliance reporting" },
                  { name: "FEBRABAN", note: "Regulatory sprint backlog; compliance documentation delivery for Brazilian financial regulators" },
                ],
              },
              {
                category: "Finance & ERP",
                color: "#F72585",
                items: [
                  { name: "SAP", note: "Procurement workflows, budget tracking, financial close project milestones" },
                  { name: "Oracle ERP", note: "Financial reporting delivery, AP/AR project coordination in banking environments" },
                  { name: "TOTVS Protheus", note: "Brazilian compliance delivery — fiscal, payroll, and regulatory project tracks" },
                  { name: "Billing Systems", note: "Revenue reconciliation delivery; chargeback reduction initiatives; R$500M+ processed" },
                  { name: "Pentaho ETL", note: "Financial data pipeline delivery; 100% precision billing reconciliation via ETL orchestration" },
                ],
              },
            ].map((group) => (
              <div key={group.category}>
                <h3
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.items.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-xl bg-[#1B263B] border border-[#415A77] px-4 py-3 hover:border-[#4CC9F0]/50 transition-colors"
                    >
                      <p className="text-white font-semibold text-sm mb-1">{tool.name}</p>
                      <p className="text-[#E0E1DD]/45 text-xs leading-relaxed">{tool.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LOOM
      ══════════════════════════════════════════════ */}
      <section
        id="loom"
        className="scroll-mt-20 bg-[#1B263B]/30"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="See me on Loom" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Watch me in action
          </h2>
          <p className="text-center text-[#E0E1DD]/45 text-sm mb-10">
            Real context. No script. Who I am and how I work.
          </p>

          {/* Under Construction overlay */}
          <div className="relative rounded-2xl border border-[#4CC9F0]/30 bg-[#0D1B2A] overflow-hidden"
            style={{ minHeight: "320px" }}>
            {/* blurred background hint */}
            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6 opacity-10 pointer-events-none select-none">
              {[1,2,3,4].map((i) => (
                <div key={i} className="rounded-xl bg-[#415A77] h-40" />
              ))}
            </div>
            {/* overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0D1B2A]/80 backdrop-blur-sm">
              <span className="text-5xl">🚧</span>
              <span
                className="font-extrabold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#4CC9F0",
                  letterSpacing: "0.15em",
                }}
              >
                Under Construction
              </span>
              <p className="text-[#E0E1DD]/55 text-sm text-center max-w-sm">
                Loom videos coming soon. Check back shortly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#0A2540]"
        style={{ padding: "6rem 2rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Contact" />
          <h2
            className="text-center font-extrabold tracking-tight text-white mb-3"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Let&apos;s build your team &amp; product{" "}
            <span className="text-[#4CC9F0]">together</span>
          </h2>
          <p className="text-center text-[#E0E1DD]/55 text-base mb-8">
            Available for nearshore / offshore projects. I respond within 24h.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                data-track-event={c.event}
                data-track-category={c.category}
                data-track-label="contact_section"
                className={`flex flex-col items-center gap-2 p-5 rounded-2xl bg-[#1B263B] border border-[#415A77] ${c.hoverBorder} transition-colors text-center min-h-[100px] justify-center`}
              >
                <span className="text-2xl">{c.icon}</span>
                <span className="text-[10px] font-bold text-[#E0E1DD]/50 uppercase tracking-widest">
                  {c.label}
                </span>
                <span className="text-xs text-white font-medium break-all leading-tight">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="px-8 py-5 bg-[#1B263B] border-t border-[#415A77]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[#E0E1DD]/40">
            © 2026 Wesley Gomes da Silva · Nearshore · AI · Agile Delivery
          </span>
          <div className="flex gap-5 flex-wrap">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/wesleyzilva/", external: true, event: "footer_linkedin", category: "engagement" },
              { label: "GitHub", href: "https://github.com/wesleyzilva", external: true, event: "footer_github", category: "engagement" },
              { label: "Email", href: "mailto:wesley.zilva@gmail.com", external: false, event: "footer_email", category: "lead" },
              { label: "WhatsApp", href: "https://wa.me/5516997212966", external: true, event: "footer_whatsapp", category: "lead" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                data-track-event={l.event}
                data-track-category={l.category}
                data-track-label="footer"
                className="text-xs text-[#E0E1DD]/45 hover:text-[#4CC9F0] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

// ── SHARED ────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4 text-[#4CC9F0] text-xs font-bold uppercase tracking-[0.2em]">
      <span className="flex-1 max-w-[80px] h-px bg-[#4CC9F0] opacity-30" />
      <span>{label}</span>
      <span className="flex-1 max-w-[80px] h-px bg-[#4CC9F0] opacity-30" />
    </div>
  );
}
