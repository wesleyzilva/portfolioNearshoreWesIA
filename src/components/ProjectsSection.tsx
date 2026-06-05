"use client";

import { useState } from "react";

// ── TYPES ─────────────────────────────────────────────────────────

interface Project {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  context: string;
  role: string;
  actions: string[];
  results: string[];
  duration: string;
  team: string;
  evidence: "measured" | "estimated" | "qualitative";
  skills: string[];
  links: { text: string; url: string }[];
  location?: string[];
}

// ── DATA ──────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1,
    category: "Security & Compliance",
    categoryColor: "text-red-400 border-red-400/30 bg-red-400/10",
    title: "Vulnerability Reduction Across 110 Java/Angular Applications",
    location: ["🇮🇳 India", "🇨🇷 Costa Rica"],
    context:
      "Third-party squad without business context, with fixed deadline and budget for security remediation.",
    role: "IT Manager and technical lead for the DevSecOps delivery stream.",
    actions: [
      "Structured backlog by risk, severity, and technical dependency.",
      "Implemented continuous flow with Veracode, Rapid7, testing, and CI/CD.",
      "Led agile rituals and executive reporting without a dedicated Scrum Master.",
    ],
    results: [
      "1200 → 300 total vulnerabilities in 9 months.",
      "47 → 3 critical/high vulnerabilities in the main cycle.",
      "Built continuous compliance baseline with zero internal critical findings.",
    ],
    duration: "9 months",
    team: "1 SRE, 3 devs, 1 QA, 1 architect",
    evidence: "measured",
    skills: ["Java", "Angular", "Veracode", "Rapid7", "CI/CD", "DevSecOps"],
    links: [
      { text: "Flexpag (M&A)", url: "https://flexpag.com/" },
      {
        text: "Reference: Matheus Benicio",
        url: "https://www.linkedin.com/in/matheus-benicio-b55a4a8/",
      },
    ],
  },
  {
    id: 2,
    category: "Data Engineering",
    categoryColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    title: "Data Management Implementation in M&A Context",
    context:
      "Need to separate responsibilities and increase maturity across Analytics, Engineering, and ETL.",
    role: "Team leadership and data-driven operating model design.",
    actions: [
      "Organized team structure and responsibilities by value stream.",
      "Implemented monitoring with Datadog and alerts via Teams/Power Automate.",
      "Defined operating governance with executive indicators.",
    ],
    results: [
      "Operation scaled to 80M+ transactions per day.",
      "R$500M+ monthly reconciliation under structured monitoring.",
      "Higher operating predictability and ecosystem maturity.",
    ],
    duration: "9 months",
    team: "PO, DBRE, analytics analysts, data engineers, and ETL analysts",
    evidence: "measured",
    skills: ["Datadog", "Power Automate", "Analytics", "Data Engineering", "ETL"],
    links: [
      { text: "Flexpag (M&A)", url: "https://flexpag.com/" },
      { text: "Reference: Vini K", url: "https://www.linkedin.com/in/viniciuskr" },
    ],
  },
  {
    id: 3,
    category: "Data Modernization",
    categoryColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    title: "Pentaho → Databricks and Tableau → PowerBI Migration",
    context:
      "High turnover required knowledge transfer and a more sustainable stack.",
    role: "Managed technology transition and operational continuity.",
    actions: [
      "Led migration roadmap by data domain and criticality.",
      "Standardized Datadog monitoring with operational triggers.",
      "Automated communication to reduce response time.",
    ],
    results: [
      "40% reduction in ETL processing time.",
      "Higher stability for a mostly mid-level team.",
      "Modern platform baseline for continuous analytics evolution.",
    ],
    duration: "9 months",
    team: "PO, analytics analyst, data engineer, ETL analyst",
    evidence: "measured",
    skills: ["Databricks", "PowerBI", "Pentaho", "Tableau", "Datadog"],
    links: [
      { text: "Flexpag (M&A)", url: "https://flexpag.com/" },
      { text: "Reference: Vini K", url: "https://www.linkedin.com/in/viniciuskr" },
    ],
  },
  {
    id: 4,
    category: "Agile Transformation",
    categoryColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    title: "B2B Digital Transformation with Agile Metrics",
    location: ["🇬🇧 London"],
    context:
      "Need to increase squad performance and executive transparency.",
    role: "Agile lead across multiple teams and governance facilitator.",
    actions: [
      "Created a gamified framework for agile maturity evolution.",
      "Implemented dashboards connected to Jira and ServiceNow.",
      "Introduced SAFe and Scrum of Scrums practices.",
    ],
    results: [
      "35% sprint velocity increase.",
      "50% reduction in cross-squad blockers.",
      "Higher delivery predictability for executive leadership.",
    ],
    duration: "3 years",
    team: "5 Scrum Masters and multiple squads",
    evidence: "measured",
    skills: ["Scrum", "SAFe", "Jira", "ServiceNow", "Tableau", "Leadership"],
    links: [
      { text: "Serasa Experian B2B", url: "https://serasa.com/" },
      {
        text: "Reference: Samantha Miziara",
        url: "https://www.linkedin.com/in/samantha-miziara",
      },
    ],
  },
  {
    id: 5,
    category: "Applied AI",
    categoryColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    title: "AI for LegalTech — Smart Search & Triage",
    context:
      "Legal area needed to speed up level 1 and level 2 analyses.",
    role: "Technical product lead and implementation coordinator.",
    actions: [
      "Designed AI and smart-search solution over legal data.",
      "Integrated service flow using low-code stack + Elasticsearch.",
      "Aligned technical backlog with business SLA goals.",
    ],
    results: [
      "12% reduction in legal operation SLA.",
      "Higher triage and response speed for recurring requests.",
      "Improved analysis quality with AI-consolidated context.",
    ],
    duration: "1 year",
    team: "PO, tech lead, mid-level dev, 2 QAs",
    evidence: "measured",
    skills: ["AI", "Elasticsearch", "Low-code", "OutSystems", "Product Thinking"],
    links: [
      { text: "Serasa Experian B2B", url: "https://serasa.com/" },
      {
        text: "Reference: Simone Garcia",
        url: "https://www.linkedin.com/in/simone-conejo-garcia-morello-0a0984137/",
      },
    ],
  },
  {
    id: 6,
    category: "Operations & Product",
    categoryColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    title: "Customer Care with Synchronized Backlog",
    context:
      "Need to balance product evolution and operational support.",
    role: "Led two squads and intake governance with stakeholders.",
    actions: [
      "Synchronized sales, support, and maintenance backlogs into one flow.",
      "Standardized ownership by domain and prioritization criteria.",
      "Integrated ServiceNow and Jira for end-to-end visibility.",
    ],
    results: [
      "70% automation of recurring operational tasks.",
      "Rework reduction and improved delivery predictability.",
      "Consistent improvement in stakeholder satisfaction.",
    ],
    duration: "2 years",
    team: "2 synchronized squads with 1 PO",
    evidence: "estimated",
    skills: ["ServiceNow", "Jira", "Backlog Management", "Stakeholder Management"],
    links: [
      { text: "Serasa Experian B2B", url: "https://serasa.com/" },
      {
        text: "Reference: Jean Takushi",
        url: "https://www.linkedin.com/in/JeanTakushi",
      },
    ],
  },
  {
    id: 7,
    category: "Customer Experience",
    categoryColor: "text-pink-400 border-pink-400/30 bg-pink-400/10",
    title: "Digital Journey Evolution Driven by Analytics",
    location: ["🇺🇸 USA", "🇮🇳 India"],
    context:
      "Self-service journey needed higher availability and less friction.",
    role: "Indirect management of partner team with data-driven prioritization.",
    actions: [
      "Prioritized improvements based on Adobe Analytics and incidents.",
      "Supported architecture and critical integration reviews.",
      "Connected operational indicators to experience goals.",
    ],
    results: [
      "99% availability in the main journey.",
      "Reduction of repetitive incidents in critical flows.",
      "Better alignment between technology and business expectations.",
    ],
    duration: "2 years",
    team: "PO, specialist, 2 devs, 2 QAs",
    evidence: "measured",
    skills: ["Adobe Analytics", "Salesforce", ".NET", "Java", "Apigee"],
    links: [
      { text: "Serasa Experian B2B", url: "https://serasa.com/" },
      {
        text: "Reference: Jean Takushi",
        url: "https://www.linkedin.com/in/jean-takushi-9371781/",
      },
    ],
  },
  {
    id: 8,
    category: "Application Modernization",
    categoryColor: "text-teal-400 border-teal-400/30 bg-teal-400/10",
    title: ".NET Legacy Migration to Angular/Java Architecture",
    context:
      "Legacy portfolio of ~50 applications with high maintenance cost.",
    role: "Technical coordination and backlog prioritization without dedicated PO.",
    actions: [
      "Mapped criticality by business unit and dependency chain.",
      "Planned migration waves with safe decommission criteria.",
      "Oversaw execution focused on business continuity.",
    ],
    results: [
      "20 critical applications migrated/decommissioned.",
      "Technical debt reduction in sales and customer service domains.",
      "Modern architectural baseline for continuous evolution.",
    ],
    duration: "3 years",
    team: "1 squad with 5 devs and 4 QAs",
    evidence: "measured",
    skills: [".NET", "Angular", "Java", "Architecture", "Migration"],
    links: [
      { text: "Serasa Experian B2B", url: "https://serasa.com/" },
      {
        text: "Reference: Jean Takushi",
        url: "https://www.linkedin.com/in/jean-takushi-9371781/",
      },
    ],
  },
  {
    id: 9,
    category: "Operational Excellence",
    categoryColor: "text-green-400 border-green-400/30 bg-green-400/10",
    title: "Empower Program with Six Sigma Yellow Belt",
    context:
      "Social program required more efficient and predictable IT processes.",
    role: "Technical leadership applying Lean Six Sigma approach.",
    actions: [
      "Analyzed incident, change, and problem flows in ServiceNow.",
      "Implemented continuous improvement cycles based on data.",
      "Created knowledge base to speed up L1 resolution.",
    ],
    results: [
      "Reduction in daily L1 incident volume.",
      "Improved resolution time through knowledge standardization.",
      "Increased first-level operational autonomy.",
    ],
    duration: "1 year",
    team: "1 black belt coach + local technical leadership",
    evidence: "qualitative",
    skills: ["Lean Six Sigma", "DMAIC", "ServiceNow", "Continuous Improvement"],
    links: [
      {
        text: "Serasa Experian",
        url: "https://www.serasaexperian.com.br/",
      },
      {
        text: "Reference: Thiago Ferreira",
        url: "https://www.linkedin.com/in/thiago-adescenco/",
      },
    ],
  },
  {
    id: 10,
    category: "Global Leadership",
    categoryColor: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10",
    title: "International Mentoring for Agile Culture",
    location: ["🌍 Africa", "🇨🇴 Colombia"],
    context:
      "Leadership evolution for distributed international environments.",
    role: "International mentee and later mentor for other professionals.",
    actions: [
      "Learned agile practices applied in the European context.",
      "Adapted practices for LATAM and nearshore teams.",
      "Mentored professionals in Brazil, India, and South Africa.",
    ],
    results: [
      "3 professionals mentored across 3 countries.",
      "Higher intercultural leadership maturity.",
      "Strong foundation for high-autonomy nearshore management.",
    ],
    duration: "1 year",
    team: "International coach and mentee network",
    evidence: "qualitative",
    skills: ["Mentoring", "Leadership", "Communication", "Cross-cultural Management"],
    links: [
      {
        text: "Serasa Article: Leadership Types",
        url: "https://www.serasaexperian.com.br/carreiras/blog-carreiras/tipos-de-lideranca/",
      },
    ],
  },
  {
    id: 11,
    category: "Critical Support",
    categoryColor: "text-rose-400 border-rose-400/30 bg-rose-400/10",
    title: "Firefighters for Legacy CRM/Billing (Telco)",
    location: ["🇮🇳 India", "🇧🇷 Brazil"],
    context:
      "Legacy environment with high incident volume and 24x7 operations.",
    role: "Led international squad for support and stabilization.",
    actions: [
      "Organized shifts and handovers across India-Brazil operation.",
      "Automated recurring data-fix and operational routines.",
      "Defined prevention rituals for recurring incidents.",
    ],
    results: [
      "300 → 100 daily incidents in the main operation.",
      "99.9% uptime in critical billing systems.",
      "Lower operational impact during peak windows.",
    ],
    duration: "3 years",
    team: "24x7 support squad with 5 developers",
    evidence: "measured",
    skills: ["Unix/Linux", "Shell Script", "CRM", "Billing", "Critical Operations"],
    links: [
      { text: "Amdocs · Telco Global", url: "https://www.serasa.com/" },
    ],
  },
  {
    id: 12,
    category: "Knowledge Transfer",
    categoryColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    title: "Technical Internalization in São Carlos Operation",
    location: ["🇧🇷 São Carlos, Brazil"],
    context:
      "Critical technical knowledge was held by consultancies and had to be internalized.",
    role: "Led knowledge transfer between business and engineering.",
    actions: [
      "Structured functional and technical documentation for key applications.",
      "Connected business analysts to engineering to reduce execution noise.",
      "Designed onboarding path for internal support teams.",
    ],
    results: [
      "Critical know-how internalized into local operation.",
      "Higher technical autonomy for evolution and support.",
      "Safer transition to the organization agile model.",
    ],
    duration: "2 years",
    team: "Third-party developers + business analysts",
    evidence: "qualitative",
    skills: ["Documentation", "Onboarding", "Knowledge Transfer", "Agile Enablement"],
    links: [
      { text: "Serasa Experian", url: "https://www.serasa.com/" },
    ],
  },
];

const EVIDENCE_LABELS: Record<Project["evidence"], { label: string; color: string }> = {
  measured: { label: "Measured", color: "text-green-400 border-green-400/30 bg-green-400/10" },
  estimated: { label: "Estimated", color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10" },
  qualitative: { label: "Qualitative", color: "text-slate-400 border-slate-400/30 bg-slate-400/10" },
};

// ── MODAL ─────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const ev = EVIDENCE_LABELS[project.evidence];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D1B2A] border border-[#415A77] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-[#0D1B2A] border-b border-[#415A77]">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${project.categoryColor}`}
              >
                {project.category}
              </span>
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${ev.color}`}
              >
                {ev.label}
              </span>
              {project.location?.map((loc) => (
                <span
                  key={loc}
                  className="text-xs px-2.5 py-0.5 rounded-full border border-[#4CC9F0]/30 bg-[#4CC9F0]/10 text-[#4CC9F0]"
                >
                  {loc}
                </span>
              ))}
            </div>
            <h3 className="text-white font-bold text-lg leading-snug">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#1B263B] hover:bg-[#415A77] text-[#E0E1DD]/60 hover:text-white transition-colors text-lg"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">
          {/* Meta */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex flex-col gap-0.5">
              <span className="text-[#4CC9F0]/60 text-xs font-bold uppercase tracking-wider">
                Duration
              </span>
              <span className="text-white">{project.duration}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#4CC9F0]/60 text-xs font-bold uppercase tracking-wider">
                Team
              </span>
              <span className="text-white">{project.team}</span>
            </div>
          </div>

          {/* Context */}
          <div>
            <h4 className="text-[#4CC9F0] text-xs font-bold uppercase tracking-wider mb-2">
              Context
            </h4>
            <p className="text-sm text-[#E0E1DD]/70 leading-relaxed">
              {project.context}
            </p>
          </div>

          {/* Role */}
          <div>
            <h4 className="text-[#4CC9F0] text-xs font-bold uppercase tracking-wider mb-2">
              My Role
            </h4>
            <p className="text-sm text-[#E0E1DD]/70 leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* Actions */}
          <div>
            <h4 className="text-[#4CC9F0] text-xs font-bold uppercase tracking-wider mb-2">
              Actions
            </h4>
            <ul className="flex flex-col gap-1.5">
              {project.actions.map((a, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#E0E1DD]/70 leading-relaxed">
                  <span className="text-[#4CC9F0] mt-0.5 flex-shrink-0">▸</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-[#4CC9F0] text-xs font-bold uppercase tracking-wider mb-2">
              Results
            </h4>
            <ul className="flex flex-col gap-1.5">
              {project.results.map((r, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-white font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-[#4CC9F0] text-xs font-bold uppercase tracking-wider mb-2">
              Tech & Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded-full bg-[#1B263B] border border-[#415A77] text-[#E0E1DD]/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div>
              <h4 className="text-[#4CC9F0] text-xs font-bold uppercase tracking-wider mb-2">
                References
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <a
                    key={l.text}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#4CC9F0] hover:text-white underline underline-offset-2 transition-colors"
                  >
                    {l.text} ↗
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── SECTION ───────────────────────────────────────────────────────

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            className="text-left p-5 rounded-2xl bg-[#1B263B] border border-[#415A77] hover:border-[#4CC9F0]/60 hover:bg-[#1B263B]/80 transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4CC9F0]/50"
          >
            {/* Number + category */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono text-[#4CC9F0]/40">
                {String(p.id).padStart(2, "0")}
              </span>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${p.categoryColor}`}
              >
                {p.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#4CC9F0] transition-colors line-clamp-3">
              {p.title}
            </h3>

            {/* Location flags */}
            {p.location && (
              <div className="flex flex-wrap gap-1 mb-2">
                {p.location.map((loc) => (
                  <span
                    key={loc}
                    className="text-[10px] px-1.5 py-0.5 rounded border border-[#4CC9F0]/25 bg-[#4CC9F0]/8 text-[#4CC9F0]/70"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            )}

            {/* Bottom row */}
            <div className="flex items-center justify-between gap-2 mt-auto">
              <span className="text-[10px] text-[#E0E1DD]/35 font-mono">
                {p.duration}
              </span>
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${EVIDENCE_LABELS[p.evidence].color}`}
              >
                {EVIDENCE_LABELS[p.evidence].label}
              </span>
            </div>

            {/* Skills preview */}
            <div className="flex flex-wrap gap-1 mt-2.5">
              {p.skills.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-[#0D1B2A] border border-[#415A77]/50 text-[#E0E1DD]/40"
                >
                  {s}
                </span>
              ))}
              {p.skills.length > 3 && (
                <span className="text-[10px] text-[#E0E1DD]/30">
                  +{p.skills.length - 3}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
