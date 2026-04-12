import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from '../../header/header';
import { Hero } from '../../hero/hero';
import { About } from '../../about/about';
import { Gallery } from '../../gallery/gallery';
import { Location } from '../../location/location';
import { Footer } from '../../footer/footer';
import { ScrollHint } from '../../scroll-hint/scroll-hint';
import { Lang, LanguageService } from '../../services/language.service';
import { PageMetaService } from '../../services/page-meta.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Header, Hero, About, Gallery, Location, Footer, ScrollHint],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly langService = inject(LanguageService);
  readonly pageMeta = inject(PageMetaService);

  ngOnInit(): void {
    const routeLang = this.route.snapshot.data['lang'] as Lang | undefined;
    const lang = routeLang ?? 'en';

    this.langService.setLang(lang);
    this.pageMeta.update({
      lang,
      path: lang === 'pt' ? 'pt' : '',
      title: lang === 'pt'
        ? 'Wesley Gomes da Silva · IT Manager · Nearshore Leader · Data Engineering · DevSecOps'
        : 'Wesley Gomes da Silva · IT Manager · Nearshore Leader · Data Engineering · DevSecOps',
      description: lang === 'pt'
        ? 'IT Manager com 14+ anos liderando times nearshore (Brasil, India, Africa do Sul). Experiencia em Data Engineering com 80M+ transacoes/dia, DevSecOps com 90% de reducao de vulnerabilidades e operacao orientada por dados.'
        : 'IT Manager with 14+ years leading nearshore teams across Brazil, India, and South Africa. Experience in Data Engineering with 80M+ daily transactions, DevSecOps programs, and results-driven operations.',
      keywords: lang === 'pt'
        ? 'IT Manager, Nearshore Manager, Data Engineering, Databricks, Apache Spark, DevSecOps, PCI-DSS, Agile Coach, Scrum, DORA Metrics, Wesley Gomes, ETL, Cybersecurity'
        : 'IT Manager, Nearshore Leader, Data Engineering, Databricks, Apache Spark, DevSecOps, PCI-DSS, Agile Coach, Scrum, DORA Metrics, Wesley Gomes, ETL, Cybersecurity',
      alternatePath: ''
    });
  }
}
