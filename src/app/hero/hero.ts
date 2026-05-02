import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  readonly photos = ['assets/Wesley/wesley%20(1).jpg'];
  currentPhotoIndex = 0;
  photoVisible = true;

  private rotationInterval: ReturnType<typeof setInterval> | null = null;

  get currentPhoto(): string {
    return this.photos[this.currentPhotoIndex];
  }

  ngOnInit() {
    this.rotationInterval = setInterval(() => {
      this.photoVisible = false;
      setTimeout(() => {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
        this.photoVisible = true;
      }, 600);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.rotationInterval) clearInterval(this.rotationInterval);
  }
}
