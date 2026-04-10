import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

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
  lastModifiedDate: string = '';
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

      const lastModified = new Date(document.lastModified);
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
      this.lastModifiedDate = lastModified.toLocaleDateString('en-GB', options);
    }
  }
}
