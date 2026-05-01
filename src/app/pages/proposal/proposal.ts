import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Lang } from '../../services/language.service';
import { PageMetaService } from '../../services/page-meta.service';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './proposal.html',
  styleUrl: './proposal.scss'
})
export class ProposalPage implements OnInit {
  readonly langService = inject(LanguageService);
  readonly route = inject(ActivatedRoute);
  readonly pageMeta = inject(PageMetaService);
  readonly lang = this.langService.lang;

  ngOnInit(): void {
    const routeLang = this.route.snapshot.data['lang'] as Lang | undefined;
    const lang = routeLang ?? this.lang();
    const path = lang === 'en' ? 'proposal' : 'pt/proposal';

    this.langService.setLang(lang);
    this.pageMeta.update({
      lang,
      path,
      title: lang === 'pt'
        ? 'Proposta de Trabalho · Wesley Gomes da Silva'
        : 'Work Proposal · Wesley Gomes da Silva',
      description: lang === 'pt'
        ? 'Comparativo de remuneracao, modelo de entrega, colaboracao global e termos contratuais para atuacao nearshore.'
        : 'Compensation comparison, delivery model, global collaboration, and contract terms for nearshore leadership engagements.',
      keywords: lang === 'pt'
        ? 'proposta de trabalho, nearshore, gestor de TI, agile, Wesley Gomes'
        : 'work proposal, nearshore, IT manager, agile, Wesley Gomes',
      alternatePath: 'proposal'
    });
  }
}
