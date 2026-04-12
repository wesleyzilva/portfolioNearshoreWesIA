import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly langService = inject(LanguageService);
  readonly router = inject(Router);
  readonly lang = this.langService.lang;
  /** Base route path for all home-page section links — preserves active language */
  readonly basePath = computed(() => this.lang() === 'pt' ? '/pt' : '/');

  switchLanguage(): void {
    const currentPath = this.router.url.split('?')[0].split('#')[0];
    // Derive language from URL — ground truth, not from signal
    const currentLang: 'pt' | 'en' = currentPath === '/pt' || currentPath.startsWith('/pt/')
      ? 'pt' : 'en';
    const nextLang: 'pt' | 'en' = currentLang === 'pt' ? 'en' : 'pt';
    const currentFragment = this.router.url.split('#')[1] || undefined;
    const segments = currentPath.split('/').filter(Boolean);
    const slugSegments = segments[0] === 'en' || segments[0] === 'pt'
      ? segments.slice(1)
      : segments;

    if (slugSegments.length === 0) {
      void this.router.navigate(nextLang === 'pt' ? ['/pt'] : ['/'], {
        fragment: currentFragment
      });
      return;
    }

    void this.router.navigate(nextLang === 'pt' ? ['/pt', ...slugSegments] : ['/', ...slugSegments], {
      fragment: currentFragment
    });
  }
}
