import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  services = [
    {
      icon: 'fas fa-robot',
      titlePt: 'Gestão de Times com IA',
      titleEn: 'AI-Powered Team Management',
      descPt: 'Implantação de ferramentas como GitHub Copilot, ChatGPT e Datadog AI para automatizar tarefas repetitivas, gerar documentação e acelerar code reviews em times remotos.',
      descEn: 'Deploying tools like GitHub Copilot, ChatGPT and Datadog AI to automate repetitive tasks, generate documentation and speed up code reviews in remote teams.',
      tags: ['GitHub Copilot', 'ChatGPT', 'Datadog AI', 'Power Automate'],
    },
    {
      icon: 'fas fa-network-wired',
      titlePt: 'Nearshore Squad Setup',
      titleEn: 'Nearshore Squad Setup',
      descPt: 'Estruturação de squads nearshore desde o onboarding multicultural até a definição de cerimônias ágeis adaptadas para fusos horários e idiomas diferentes.',
      descEn: 'Building nearshore squads from multicultural onboarding to defining agile ceremonies adapted for different time zones and languages.',
      tags: ['Scrum', 'Kanban', 'SAFe', 'Async Communication'],
    },
    {
      icon: 'fas fa-chart-line',
      titlePt: 'Observabilidade & DevSecOps',
      titleEn: 'Observability & DevSecOps',
      descPt: 'Implementação de pipelines CI/CD seguros com Veracode, Checkmarx, Rapid7 e Datadog RUM — garantindo SDLC blindado com monitoramento em tempo real.',
      descEn: 'Implementing secure CI/CD pipelines with Veracode, Checkmarx, Rapid7 and Datadog RUM — ensuring a hardened SDLC with real-time monitoring.',
      tags: ['Veracode', 'Checkmarx', 'Rapid7', 'Datadog RUM', 'CI/CD'],
    },
    {
      icon: 'fas fa-database',
      titlePt: 'Engenharia de Dados',
      titleEn: 'Data Engineering',
      descPt: 'Liderança de squads de ETL e Analytics com Databricks, Pentaho e Apache Spark. Faturamento, conciliação financeira e pipelines regulatórios (BACEN/FEBRABAN).',
      descEn: 'Leading ETL and Analytics squads with Databricks, Pentaho and Apache Spark. Billing, financial reconciliation and regulatory pipelines (BACEN/FEBRABAN).',
      tags: ['Databricks', 'Apache Spark', 'Pentaho', 'PostgreSQL'],
    },
    {
      icon: 'fas fa-users-cog',
      titlePt: 'Coaching Ágil Internacional',
      titleEn: 'International Agile Coaching',
      descPt: 'Disseminação de metodologias ágeis em squads internacionais — mentorei profissionais na Índia, Brasil e África do Sul baseado em modelo Experian Europa.',
      descEn: 'Spreading agile methodologies across international squads — I mentored professionals in India, Brazil and South Africa based on the Experian Europe model.',
      tags: ['Scrum Master', 'Agile Coach', 'Six Sigma', 'OKRs'],
    },
    {
      icon: 'fas fa-shield-alt',
      titlePt: 'Governança & Compliance',
      titleEn: 'Governance & Compliance',
      descPt: 'Gerenciamento do ciclo de vida de projetos de dados com conformidade regulatória LGPD, PCI-DSS e BACEN em ambientes de alta transacionalidade.',
      descEn: 'Managing data project lifecycles with LGPD, PCI-DSS and BACEN regulatory compliance in high-transactional environments.',
      tags: ['PCI-DSS', 'LGPD', 'BACEN', 'ITIL'],
    },
    {
      icon: 'fas fa-clipboard-list',
      titlePt: 'PO Tech',
      titleEn: 'PO Tech',
      descPt: 'Atuação como Product Owner técnico — definição de backlog, user stories com critérios de aceite, roadmap orientado a produto e pontes entre áreas de negócio e times nearshore.',
      descEn: 'Acting as a technical Product Owner — backlog definition, user stories with acceptance criteria, product roadmap and bridging business stakeholders with nearshore development teams.',
      tags: ['Product Backlog', 'User Stories', 'Roadmap', 'API-First', 'Jira', 'Azure Boards'],
    },
  ];
}
