"""
generate_cv.py — ATS-optimised Word resume for Wesley Gomes da Silva.
Output: ../src/app/assets/Wesley_Silva_IT_Manager_CV.docx
Run  : python generate_cv.py
Deps : pip install python-docx
"""

from pathlib import Path
from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement


OUTPUT = Path(__file__).resolve().parent.parent / "src" / "app" / "assets" / "Wesley_Silva_IT_Manager_CV.docx"


# ── helpers ──────────────────────────────────────────────────────────────────

def _add_hyperlink(paragraph, url, text, size=10, color=(0, 82, 155)):
    """Insert a clickable hyperlink into an existing paragraph."""
    part = paragraph.part
    r_id = part.relate_to(url, 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink', is_external=True)
    hyperlink = OxmlElement('w:hyperlink')
    hyperlink.set(qn('r:id'), r_id)
    new_run = OxmlElement('w:r')
    rPr = OxmlElement('w:rPr')
    rStyle = OxmlElement('w:rStyle')
    rStyle.set(qn('w:val'), 'Hyperlink')
    rPr.append(rStyle)
    color_el = OxmlElement('w:color')
    color_el.set(qn('w:val'), '{:02X}{:02X}{:02X}'.format(*color))
    rPr.append(color_el)
    sz_el = OxmlElement('w:sz')
    sz_el.set(qn('w:val'), str(size * 2))
    rPr.append(sz_el)
    new_run.append(rPr)
    t = OxmlElement('w:t')
    t.text = text
    new_run.append(t)
    hyperlink.append(new_run)
    paragraph._p.append(hyperlink)
    return hyperlink


def _para(doc, text, bold=False, size=11, color=None, align=WD_ALIGN_PARAGRAPH.LEFT, space_before=0, space_after=4):
    p = doc.add_paragraph()
    p.alignment = align
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    run = p.add_run(text)
    run.bold = bold
    run.font.size = Pt(size)
    if color:
        run.font.color.rgb = RGBColor(*color)
    return p


def _section_title(doc, title):
    """Bold uppercase section header with bottom border."""
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(2)
    run = p.add_run(title.upper())
    run.bold = True
    run.font.size = Pt(11)
    run.font.color.rgb = RGBColor(0, 0, 0)
    # bottom border
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single')
    bottom.set(qn('w:sz'), '4')
    bottom.set(qn('w:space'), '1')
    bottom.set(qn('w:color'), '000000')
    pBdr.append(bottom)
    pPr.append(pBdr)
    return p


def _bullet(doc, text, size=10):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.left_indent = Inches(0.25)
    run = p.add_run(text)
    run.font.size = Pt(size)
    return p


def _job_header(doc, title, company, location, period):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(1)
    r1 = p.add_run(title)
    r1.bold = True
    r1.font.size = Pt(11)
    r2 = p.add_run(f"  |  {company}  |  {location}  |  {period}")
    r2.bold = False
    r2.font.size = Pt(10)
    r2.font.color.rgb = RGBColor(80, 80, 80)


def _tech_stack(doc, stack):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(4)
    r1 = p.add_run("Tech Stack: ")
    r1.bold = True
    r1.font.size = Pt(10)
    r2 = p.add_run(stack)
    r2.font.size = Pt(10)
    r2.font.color.rgb = RGBColor(60, 60, 60)


# ── document ─────────────────────────────────────────────────────────────────

def build():
    doc = Document()

    # Page margins (narrow for more content space)
    for section in doc.sections:
        section.top_margin    = Inches(0.75)
        section.bottom_margin = Inches(0.75)
        section.left_margin   = Inches(0.85)
        section.right_margin  = Inches(0.85)

    # Default paragraph font
    doc.styles['Normal'].font.name = 'Calibri'
    doc.styles['Normal'].font.size = Pt(10)

    # ── NAME & CONTACT ──────────────────────────────────────────────────────
    name_p = doc.add_paragraph()
    name_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    name_p.paragraph_format.space_after = Pt(2)
    r = name_p.add_run("Wesley Gomes da Silva")
    r.bold = True
    r.font.size = Pt(18)

    title_p = doc.add_paragraph()
    title_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title_p.paragraph_format.space_after = Pt(4)
    rt = title_p.add_run("IT Coordinator  |  Project Manager  |  Nearshore Leader  |  Data Engineering")
    rt.font.size = Pt(11)
    rt.font.color.rgb = RGBColor(60, 60, 60)

    contact_p = doc.add_paragraph()
    contact_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    contact_p.paragraph_format.space_after = Pt(2)
    _add_hyperlink(contact_p, 'https://linkedin.com/in/wesleyzilva', 'linkedin.com/in/wesleyzilva')
    sep1 = contact_p.add_run('  |  +55 16 99721-2966  |  ')
    sep1.font.size = Pt(10)
    _add_hyperlink(contact_p, 'mailto:wesley.zilva@gmail.com', 'wesley.zilva@gmail.com')
    sep2 = contact_p.add_run('  |  São Carlos, SP – Brazil')
    sep2.font.size = Pt(10)

    portfolio_p = doc.add_paragraph()
    portfolio_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    portfolio_p.paragraph_format.space_after = Pt(2)
    rp1 = portfolio_p.add_run('Portfolio: ')
    rp1.font.size = Pt(10)
    _add_hyperlink(portfolio_p, 'https://wesleyzilva.github.io/portfolioNearshoreWesIA/', 'wesleyzilva.github.io/portfolioNearshoreWesIA')
    sep3 = portfolio_p.add_run('  |  GitHub: ')
    sep3.font.size = Pt(10)
    _add_hyperlink(portfolio_p, 'https://github.com/wesleyzilva', 'github.com/wesleyzilva')
    portfolio_p.paragraph_format.space_after = Pt(6)

    # ── PROFESSIONAL SUMMARY ────────────────────────────────────────────────
    _section_title(doc, "Professional Summary")
    _para(doc,
        "IT Coordinator and Project Manager with 14+ years driving digital transformation in fintech, "
        "payments, and telecommunications. Expert in leading nearshore squads across Brazil, India, and "
        "South Africa. Proven track record in Data Engineering (80M+ daily transactions, 99.8% accuracy), "
        "DevSecOps (90% vulnerability reduction, zero audit findings BACEN/FEBRABAN), and Agile transformation "
        "(35% sprint velocity increase). Datadog Certified. PCI-DSS and LGPD compliant.",
        size=10, space_after=4)

    # ── CORE COMPETENCIES ───────────────────────────────────────────────────
    _section_title(doc, "Core Competencies")
    competencies = [
        "Nearshore Team Leadership  •  Agile Project Management  •  Data Engineering at Scale",
        "DevSecOps & Compliance (PCI-DSS / LGPD / BACEN)  •  System Observability  •  CI/CD Pipelines",
        "SAFe / Scrum / Kanban  •  DORA Metrics  •  Full-Stack Development  •  AI-Powered Workflows",
    ]
    for c in competencies:
        _para(doc, c, size=10, space_after=2)

    # ── TECHNICAL SKILLS ────────────────────────────────────────────────────
    _section_title(doc, "Technical Skills")

    skills_rows = [
        ("Data Engineering",   "Databricks, Apache Spark, Pentaho ETL, Python, SQL Advanced, APIs REST"),
        ("Development",        "Java Spring, .Net, Angular, TypeScript, OutSystems, Salesforce"),
        ("DevSecOps",          "Veracode, Rapid7, PCI-DSS, LGPD, CI/CD, Jenkins, GitHub Actions"),
        ("Observability",      "Datadog (Certified), Dynatrace, APM, RUM, DORA Metrics"),
        ("Databases",          "PostgreSQL, SQL Server, OracleDB, PL/SQL"),
        ("Agile Tools",        "JIRA, Azure Boards, Confluence, Figma, ServiceNow"),
        ("Infrastructure",     "Unix/Linux, Shell Scripting, Docker, Kubernetes, Solaris/AIX"),
        ("AI Tools",           "GitHub Copilot, ChatGPT, Datadog AI"),
        ("Languages",          "Portuguese (native), English (advanced)"),
    ]
    for label, items in skills_rows:
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(1)
        p.paragraph_format.space_after = Pt(1)
        r1 = p.add_run(f"{label}: ")
        r1.bold = True
        r1.font.size = Pt(10)
        r2 = p.add_run(items)
        r2.font.size = Pt(10)

    # ── EXPERIENCE ──────────────────────────────────────────────────────────
    _section_title(doc, "Professional Experience")

    # ---- Serasa: IT Coordinator ----
    _job_header(doc,
        "IT Coordinator",
        "Serasa Experian",
        "São Carlos, Brazil (Hybrid/Remote)",
        "2024 – 2025")
    _para(doc,
        "Serasa Experian is Brazil's leading credit bureau and data analytics company, processing 80M+ "
        "daily financial transactions across fintech and payment systems.",
        size=10, space_after=2)
    for b in [
        "Led 3 cross-functional nearshore squads (12 engineers across Brazil and India) across 3 time zones; implemented async communication protocols that increased team productivity by 25%.",
        "Built DevSecOps framework from scratch using Veracode and Rapid7, reducing critical vulnerabilities from 47 to 3 (90% reduction) and achieving zero audit findings for BACEN and FEBRABAN.",
        "Optimized Databricks/Apache Spark architecture, reducing ETL processing time by 40% while handling 80M+ daily transactions with 99.8% accuracy on R$ 500M+ monthly revenue.",
        "Accelerated data product delivery from quarterly to monthly release cycles through CI/CD pipeline automation (Jenkins, GitHub Actions), reducing deployment time by 60%.",
        "Maintained 99.95% uptime for critical payment systems through Datadog observability dashboards and proactive alerting.",
    ]:
        _bullet(doc, b)
    _tech_stack(doc, "Databricks, Apache Spark, Pentaho ETL, Python, Veracode, Rapid7, Jenkins, GitHub Actions, Datadog, PCI-DSS, LGPD, JIRA, Confluence")

    # ---- Serasa: Agile Coach ----
    _job_header(doc,
        "IT Specialist | Agile Coach",
        "Serasa Experian",
        "São Carlos, Brazil (Hybrid)",
        "2022 – 2024")
    for b in [
        "Coached 8+ squads across Legal, HR, Finance, Customer Care, and Billing business units under SAFe framework with a global Agile coach.",
        "Boosted average sprint velocity by 35% through structured DORA metrics implementation and continuous improvement ceremonies.",
        "Reduced inter-squad blockers by 50% through dependency mapping and Program Increment (PI) planning facilitation.",
        "Reduced design-to-code rework by 40% through Figma-to-dev workflow alignment and Definition of Ready enforcement.",
    ]:
        _bullet(doc, b)
    _tech_stack(doc, "SAFe, Scrum, Kanban, JIRA, Azure Boards, Confluence, Figma, DORA Metrics, ServiceNow")

    # ---- Serasa: Senior Systems Analyst ----
    _job_header(doc,
        "Senior Systems Analyst | Full-Stack & Observability",
        "Serasa Experian",
        "São Carlos, Brazil",
        "2016 – 2021")
    for b in [
        "Led company-wide observability program using Dynatrace and Datadog (APM + Real User Monitoring), reducing incident MTTR by 45% through proactive alerting and automated dashboards.",
        "Maintained 99.95% uptime for critical credit and payment systems; reduced repeat incidents by 60%.",
        "Delivered full-stack features in Java Spring, .Net, Angular, OutSystems, and Salesforce across multiple squads.",
        "Drove adoption of automated monitoring as code, replacing manual health checks and saving 70% of manual operational effort.",
    ]:
        _bullet(doc, b)
    _tech_stack(doc, "Dynatrace, Datadog, APM, RUM, Java Spring, .Net, Angular, OutSystems, Salesforce, SQL Server, PostgreSQL")

    # ---- Amdocs ----
    _job_header(doc,
        "Senior Business Operations Analyst | DBA Unix/Oracle",
        "Amdocs",
        "São Paulo, Brazil (On-site)",
        "2013 – 2016")
    _para(doc,
        "Amdocs is a global provider of software and services for communications and media companies.",
        size=10, space_after=2)
    for b in [
        "Administered Unix/Oracle DBA environment for Telco billing systems processing 99.9% uptime SLA.",
        "Automated 70% of manual operational tasks through Shell Scripting and PL/SQL stored procedures.",
        "Managed R$ 500M+ monthly reconciliation processes with 99.8% accuracy; full-stack developer on billing platform.",
    ]:
        _bullet(doc, b)
    _tech_stack(doc, "Unix (AIX/Solaris), Oracle DBA, PL/SQL, Shell Scripting, SQL Server, Java, Full-Stack Development")

    # ---- IT Technician ----
    _job_header(doc,
        "IT Technician | Full Stack",
        "Multiple Clients",
        "Brazil",
        "2010 – 2013")
    for b in [
        "Infrastructure management, N1/N2 support, networking, and server administration across Windows Server and Linux environments.",
        "Full-stack development foundation: web applications, database design, and system integration.",
    ]:
        _bullet(doc, b)
    _tech_stack(doc, "Linux, Windows Server, Networking, Infrastructure, HTML/CSS, SQL")

    # ── CERTIFICATIONS ──────────────────────────────────────────────────────
    _section_title(doc, "Certifications")
    certs = [
        ("Datadog Dashboards & Monitors",    "Datadog",                      "October 2025"),
        ("Yellow Belt Six Sigma",            "Process Improvement & Lean",   "2023"),
        ("Agile Coach Recognition",          "Serasa Experian CX & Tech",    "2023"),
    ]
    for name, issuer, date in certs:
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(2)
        r1 = p.add_run(f"{name}  —  ")
        r1.bold = True
        r1.font.size = Pt(10)
        r2 = p.add_run(f"{issuer}  |  {date}")
        r2.font.size = Pt(10)

    # ── EDUCATION ───────────────────────────────────────────────────────────
    _section_title(doc, "Education")
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    r1 = p.add_run("Bachelor's Degree in Computer Science  —  ")
    r1.bold = True
    r1.font.size = Pt(10)
    r2 = p.add_run("Brazil")
    r2.font.size = Pt(10)

    # ── KEY METRICS ─────────────────────────────────────────────────────────
    _section_title(doc, "Key Metrics & Achievements")
    metrics = [
        "90% reduction in critical vulnerabilities (47 → 3) in 6 months — zero BACEN/FEBRABAN audit findings",
        "80M+ daily transactions processed with 99.8% accuracy — R$ 500M+ monthly revenue",
        "40% reduction in ETL processing time via Databricks architecture optimization",
        "25% productivity increase across 12 engineers in 3 time zones (Brazil / India / South Africa)",
        "35% sprint velocity increase across 8+ squads — 4 business units",
        "60% reduction in deployment time — quarterly to monthly release cadence",
        "45% MTTR reduction — 99.95% uptime in critical systems",
        "70% automation of manual operational tasks",
    ]
    for m in metrics:
        _bullet(doc, m)

    # ── SAVE ─────────────────────────────────────────────────────────────────
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc.save(OUTPUT)
    print(f"✓  CV saved → {OUTPUT}")


if __name__ == "__main__":
    build()
