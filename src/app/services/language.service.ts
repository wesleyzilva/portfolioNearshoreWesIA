import { Injectable, signal } from '@angular/core';

export type Lang = 'pt' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('pt');

  toggle(): void {
    this.lang.set(this.lang() === 'pt' ? 'en' : 'pt');
  }
}
