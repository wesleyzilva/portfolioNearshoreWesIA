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
      title: 'Nearshore Engagement Proposal · Wesley Gomes da Silva — Digital Product Lead',
      description: 'Flexible nearshore engagement — monthly retainer or per hour. Digital Product Lead from Brazil. UTC-3: the only timezone that bridges the Americas, Europe, Saudi Arabia, India, and China in a single business day.',

      keywords: 'nearshore proposal, Brazil tech lead, flexible engagement, per hour, retainer, nearshore, Wesley Gomes',
      alternatePath: 'nearshore-proposal'
    });
  }

  printPage(): void {
    window.print();
  }
}
