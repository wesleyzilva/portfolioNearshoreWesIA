import { Injectable, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export type Lang = 'pt' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  readonly lang = signal<Lang>('en');

  constructor() {
    // Single source of truth: lang always reflects the current URL
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(({ urlAfterRedirects }) => {
      // Strip fragment (#section) — /pt#section must still resolve to 'pt'
      const path = urlAfterRedirects.split('#')[0];
      const lang: Lang = path === '/pt' || path.startsWith('/pt/')
        ? 'pt' : 'en';
      this.lang.set(lang);
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.setLang(this.lang() === 'pt' ? 'en' : 'pt');
  }
}
