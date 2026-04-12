import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { BUILD_VERSION, BUILD_TIME } from '../../environments/version';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  visitCount: number = 0;
  readonly buildVersion = BUILD_VERSION;
  readonly buildTime = BUILD_TIME;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const storageKey = 'portfolioVisitCount';
      let count = localStorage.getItem(storageKey);
      this.visitCount = count ? parseInt(count, 10) + 1 : 1;
      localStorage.setItem(storageKey, this.visitCount.toString());

    }
  }
}
