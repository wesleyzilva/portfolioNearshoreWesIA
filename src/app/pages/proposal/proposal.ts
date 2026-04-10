import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './proposal.html',
  styleUrl: './proposal.scss'
})
export class ProposalPage {
  readonly langService = inject(LanguageService);
  readonly lang = this.langService.lang;
}
