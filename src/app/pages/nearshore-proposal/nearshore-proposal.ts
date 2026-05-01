import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Lang } from '../../services/language.service';
import { PageMetaService } from '../../services/page-meta.service';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-nearshore-proposal',
  standalone: true,
  imports: [RouterLink, Header, Footer],
  templateUrl: './nearshore-proposal.html',
  styleUrl: './nearshore-proposal.scss'
})
export class NearshoreProposalPage implements OnInit {
  readonly langService = inject(LanguageService);
  readonly route = inject(ActivatedRoute);
  readonly pageMeta = inject(PageMetaService);
  readonly lang = this.langService.lang;

  ngOnInit(): void {
    const routeLang = this.route.snapshot.data['lang'] as Lang | undefined;
    const lang = routeLang ?? this.lang();
    const path = lang === 'en' ? 'nearshore-proposal' : 'pt/nearshore-proposal';

    this.langService.setLang(lang);
    this.pageMeta.update({
      lang,
      path,
      title: 'Nearshore Engagement Proposal · Wesley Gomes da Silva',
      description: 'USD 6,000/month nearshore Tech Lead from Brazil. Full US-day overlap at UTC-3. Why Brazil wins, why Wesley delivers, and how the engagement works.',
      keywords: 'nearshore proposal, Brazil tech lead, USD 6000, nearshore engagement, Wesley Gomes',
      alternatePath: 'nearshore-proposal'
    });
  }
}
