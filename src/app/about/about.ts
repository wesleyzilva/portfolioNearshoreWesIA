import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { ScrollHint } from '../scroll-hint/scroll-hint';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollHint],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  currentProjectIndex = 0;
  projects: any[] = [];

  ngOnInit(): void {
    this.projects = [
      {
        seal: 'assets/entregaAgil.png',
        title: 'Project 1: Vulnerabilities in a set of 110 Angular and Java applications',
        scope: 'Record-time vulnerability reduction in applications with a third-party squad lacking business knowledge, within a fixed deadline and budget.',
        duration: '9 months',
        team: '1 squad with 1 SRE, 3 developers, 1 QA, 1 Architect',
        achievements: 'Reduced vulnerabilities from 1200 to 300, eliminating critical and high ones. Implemented DevSecOps using Veracode, Rapid 7, test automation, and CI/CD pipeline creation and adjustments.',
        highlights: 'Direct coordination in an agile model without a scrum master, with executive reporting.',
        links: [
          { text: 'Flexpag M&A Serasa Experian', url: 'https://flexpag.com/' },
          { text: 'Reference: Matheus Benicio', url: 'https://www.linkedin.com/in/matheus-benicio-b55a4a8/' }
        ],
        skills: ['Java', 'Angular', 'Veracode', 'Rapid 7', 'CI/CD', 'Agile Processes', 'Leadership', 'Problem Solving'],
        likes: 28,
        liked: false
      },
      {
        seal: 'assets/superacaoObstaculos.png',
        title: 'Project 2: Data Management Implementation in M&A',
        scope: 'Deployed Analytics, Data Engineering, and Data Processing teams, defining roles and responsibilities. Focused on DataDog monitoring with Low-Code Power Automate communication for real-time tracking via Teams, based on the reference architecture.',
        duration: '9 months',
        team: '1 squad with 1 Product Owner, 1 DBRE, 2 data analysts (Analytics), 2 data engineers, 2 data analysts (ETL)',
        achievements: 'Separation of roles and responsibilities, increased team maturity, and a more sustainable ecosystem.',
        highlights: 'Direct coordination in an agile model without a scrum master, with executive reporting.',
        links: [
          { text: 'Flexpag M&A Serasa Experian', url: 'https://flexpag.com/' },
          { text: 'Reference: Vini K', url: 'https://www.linkedin.com/in/viniciuskr' }
        ],
        skills: ['DataDog', 'Power Automate', 'Analytics', 'Data Engineering', 'ETL', 'Leadership', 'People Management', 'Agile Processes'],
        likes: 42,
        liked: false
      },
      {
        seal: null,
        title: 'Project 3: Migration from Pentaho to Databricks and Tableau to PowerBI',
        scope: 'Create a workflow for data processing technology migration to facilitate knowledge transfer and team replacement due to high turnover.',
        duration: '9 months',
        team: '1 squad with 1 Product Owner, 1 data analyst (Analytics), 1 data engineer, 1 data analyst (ETL) - all Mid-level',
        achievements: 'Process monitored via Datadog, triggered by the Monitoring Center, with automated communication via Teams using Power Automate.',
        highlights: 'Direct coordination in an agile model without a scrum master, with executive reporting. B2C Flexpag M&A Serasa Experian',
        links: [
          { text: 'Flexpag M&A Serasa Experian', url: 'https://flexpag.com/' },
          { text: 'Reference: Vini K', url: 'https://www.linkedin.com/in/viniciuskr' }
        ],
        skills: ['Databricks', 'PowerBI', 'Pentaho', 'Tableau', 'Datadog', 'Leadership', 'Agile Processes', 'Analytical Thinking'],
        likes: 35,
        liked: false
      },
      {
        seal: 'assets/maiorImpacto.png',
        title: 'Project 4: Digital Transformation',
        scope: 'Create a digital transformation for B2B scrum teams based on gamified pillars, focusing on metrics for agility evolution.',
        duration: '3 years',
        team: '5 Scrum Masters (senior level), each with 3 to 5 squads',
        achievements: 'Built Tableau dashboards with indicators to track agile maturity evolution, connected to JIRA and ServiceNow.',
        highlights: 'Acted as Scrum Master, adapting agile methods for ITIL using SLA for Kanban prioritization, and coaching on agile process implementation for application security governance. Created a SAFe/Scrum of Scrums experience. B2B Serasa Experian - Governance - Compliance',
        links: [
          { text: 'B2B Serasa Experian', url: 'https://serasa.com/' },
          { text: 'Reference: Samantha Miziara', url: 'https://www.linkedin.com/in/samantha-miziara' }
        ],
        skills: ['Remote Team Management'],
        likes: 56,
        liked: false
      },
      {
        seal: 'assets/inovacaoTecnica.png',
        title: 'Project 5: AI for LegalTech',
        scope: 'Facilitate information compilation for legal analysis at Serasa using Low-Code technology.',
        duration: '1 year',
        team: '1 squad with 1 PO, 1 senior Dev (tech lead), 1 mid-level Dev, 2 QAs',
        achievements: 'Created a system with Elasticsearch and AI to optimize legal analyses.',
        highlights: 'Reduced the legal team\'s service SLA for level 1 and 2 analyses by about 12%. B2B Serasa Experian',
        links: [
          { text: 'B2B Serasa Experian | LegalTech', url: 'https://serasa.com/' },
          { text: 'Reference: Simone Garcia', url: 'https://www.linkedin.com/in/simone-conejo-garcia-morello-0a0984137/' }
        ],
        skills: ['Artificial Intelligence', 'Elasticsearch', 'Low Code (OutSystems)', 'LegalTech', 'Problem Solving', 'Analytical Thinking'],
        likes: 61,
        liked: false
      },
      {
        seal: 'assets/reconhecimento.png',
        title: 'Project 6: Customer Care',
        scope: 'Focusing on continuous improvement of support processes and user satisfaction for the Call Center, external sales, and sales support areas.',
        duration: '2 years',
        team: '2 synchronized squads with 1 PO: Sales Squad with 3 Devs, 2 QAs, and Support Squad with 2 Devs, 1 QA',
        achievements: 'Fostered a sense of ownership within the squads using ServiceNow, JIRA, and other tools, enabling a mix of new feature development, sustainable application support, and a synchronized backlog.',
        highlights: 'Organized the process with stakeholders for demand intake to the Product Owner.',
        links: [
          { text: 'B2B Serasa Experian', url: 'https://serasa.com/' },
          { text: 'Reference: Jean Takushi', url: 'https://www.linkedin.com/in/JeanTakushi' }
        ],
        skills: ['Problem Solving'],
        likes: 22,
        liked: false
      },
      {
        seal: null,
        title: 'Project 7: Journey',
        scope: 'Improve the user journey on self-service platforms based on Adobe Analytics data.',
        duration: '2 years',
        team: '1 squad with 1 PO, 1 Specialist, 2 Devs, 2 QAs',
        achievements: 'Evolved the application to achieve a 99% availability rate.',
        highlights: 'Indirect coordination of a third-party team and Scrum Master.',
        links: [
          { text: 'B2B Serasa Experian', url: 'https://serasa.com/' },
          { text: 'Reference: Jean Takushi', url: 'https://www.linkedin.com/in/jean-takushi-9371781/' }
        ],
        skills: ['Java', 'Apigee', 'Salesforce', '.NET', 'Airflow', 'Control-M', 'Adobe Analytics', 'UI/UX Design', 'Analytical Thinking'],
        likes: 18,
        liked: false
      },
      {
        seal: null,
        title: 'Project 8: Migration of legacy .NET applications to Angular/Java reference architecture',
        scope: 'We have a set of about 50 .NET applications, from version 1.1 to 2.5, that need to be updated to a more current framework and/or migrated to Angular/Java.',
        duration: '3 years',
        team: '1 Squad with 5 devs, 4 QAs',
        achievements: 'Migration and decommissioning of about 20 critical applications in the sales and customer service environment, which are core to business units like SMB and Large.',
        highlights: 'Direct technical coordination and backlog prioritization without a PO.',
        links: [
          { text: 'B2B Serasa Experian', url: 'https://serasa.com/' },
          { text: 'Reference: Jean Takushi', url: 'https://www.linkedin.com/in/jean-takushi-9371781/' }
        ],
        skills: [],
        likes: 12,
        liked: false
      },
      {
        seal: null,
        title: 'Project 9: Empower Program - Six Sigma Yellow Belt IT',
        scope: 'The Empower project was born as a social inclusion and diversity initiative at Serasa Experian, focused on structuring and technically leading a development program. From there, I applied the Lean Six Sigma methodology to optimize IT development and support processes within the social program\'s context. The goal was to create an efficient workflow and streamline squad processes.',
        duration: '1 year',
        team: '1 black belt coach',
        achievements: 'Analysis and optimization of incident, change, and problem processes in ServiceNow, resulting in a reduction of daily incidents from L1.',
        highlights: 'Use of metrics and data analysis for strategic decision-making. Created a known issues document for the L1 team, ensuring a smoother resolution flow.',
        links: [
          { text: '', url: 'https://www.serasaexperian.com.br/' },
          { text: 'Reference: Thiago Ferreira', url: 'https://www.linkedin.com/in/thiago-adescenco/' }
        ],
        skills: ['Lean Six Sigma', 'Data Analysis', 'DMAIC', 'Continuous Improvement', 'Mentoring', 'Technical Leadership', 'Strategic Planning', 'Empathetic Communication'],
        likes: 78,
        liked: false
      },
      {
        seal: null,
        title: 'Project 10: Serasa Experian International Mentoring for the Agile World',
        scope: 'Training and application of coaching techniques to develop the team\'s potential, with an emphasis on leadership and autonomy. I was mentored by an international coach to understand the agile processes Experian was developing in Europe, and later I acted as a mentor for other professionals.',
        duration: '1 year',
        team: '1 international coach (as a mentor)',
        achievements: 'I was mentored to understand agile processes in Europe and later used this knowledge to mentor others.',
        highlights: 'After being mentored, I became a mentor and had the opportunity to mentor 3 people: one in India, one in Brazil, and another in South Africa.',
        links: [
          { text: 'Serasa Experian Article - Types of Leadership', url: 'https://www.serasaexperian.com.br/carreiras/blog-carreiras/tipos-de-lideranca/' }
        ],
        skills: ['Serasa Experian International Mentoring', 'Leadership', 'Human Development', 'Emotional Intelligence', 'Effective Communication'],
        likes: 95,
        liked: false
      },
      {
        seal: null,
        title: 'Project 11: Firefighters - Support for Legacy CRM and Billing Applications',
        scope: 'Support for legacy CRM and Billing applications for a major telecommunications company, in partnership with Amdocs Brazil. The main focus was to ensure stability, fix bugs, and improve the performance of on-premise Windows systems and Linux systems with shell scripts.',
        duration: '3 years',
        team: 'Support squad with 5 Developers providing 24x7 support.',
        achievements: 'Reduced the number of incidents and automated customer registration corrections, leading to a decrease in daily incidents from 300 to 100.',
        highlights: 'Leadership of an international squad with 24x7 support, involving knowledge transfer and shift operations with India.',
        links: [
          { text: 'Serasa Website', url: 'https://www.serasa.com/' }
        ],
        skills: [],
        likes: 45,
        liked: false
      },
      {
        seal: null,
        title: 'Project 12: Serasa Experian São Carlos',
        scope: 'Internalize technical knowledge from technology consultancies into Serasa\'s operations, bringing business analysts closer to development and disseminating technology knowledge within Serasa Experian.',
        duration: '2 years',
        team: 'Third-party developers and Business Analysts.',
        achievements: 'Technical knowledge of applications that were with third parties was internalized at Serasa Experian when the São Carlos operation was established.',
        highlights: 'Extensive documentation of applications, linking technical aspects and preparing for the world of agility.',
        links: [
          { text: 'Serasa Website', url: 'https://www.serasa.com/' }
        ],
        skills: [],
        likes: 33,
        liked: false
      }
    ];
  }

  nextProject(): void {
    if (this.currentProjectIndex < this.projects.length - 1) {
      this.currentProjectIndex++;
    }
  }

  previousProject(): void {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    }
  }

  likeProject(project: any): void {
    if (!project.liked) {
      project.likes++;
      project.liked = true;
    } else {
      project.likes--;
      project.liked = false;
    }
  }
}