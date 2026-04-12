import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrl: './location.scss'
})
export class Location {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  readonly herePhotos = [
    { src: 'assets/Wesley/here.jpeg', alt: 'Wesley in São Carlos' },
    { src: 'assets/base/here%20(1)%20.jpeg', alt: 'Wesley in São Carlos 2' },
    { src: 'assets/base/here%20(2).jpeg', alt: 'Wesley in São Carlos 3' }
  ];
  readonly hereIndex = signal(0);

  herePrev(): void {
    this.hereIndex.update(i => (i - 1 + this.herePhotos.length) % this.herePhotos.length);
  }

  hereNext(): void {
    this.hereIndex.update(i => (i + 1) % this.herePhotos.length);
  }
}
