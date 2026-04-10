import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

declare function gtag(...args: any[]): void;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  trackConversion(channel: 'whatsapp' | 'email' | 'linkedin' | 'phone'): void {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'generate_lead', {
        event_category: 'contact',
        event_label: channel,
        value: 1
      });
    }
  }
}
