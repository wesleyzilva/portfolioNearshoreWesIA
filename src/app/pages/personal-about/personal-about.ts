import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

type CarouselKey = 'teams' | 'family' | 'aboutMe';

@Component({
  selector: 'app-personal-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './personal-about.html',
  styleUrl: './personal-about.scss'
})
export class PersonalAboutPage {
  readonly langService = inject(LanguageService);
  lang = this.langService.lang;

  readonly carousels: Record<CarouselKey, string[]> = {
    teams: [
      'assets/teams/times%20(1).jpg',
      'assets/teams/times%20(2).jpg',
      'assets/teams/times%20(3).jpg',
      'assets/teams/times%20(4).jpg'
    ],
    family: [
      'assets/family/20210728_173811.jpg',
      'assets/family/20260105_195435.jpg',
      'assets/family/20260125_084719.jpg'
    ],
    aboutMe: [
      'assets/aboutMe/aboutMe%20(1).jpeg',
      'assets/aboutMe/aboutMe%20(1).jpg',
      'assets/aboutMe/aboutMe%20(3).jpg',
      'assets/aboutMe/aboutMe%20(4).jpg',
      'assets/aboutMe/aboutMe%20(5).jpg',
      'assets/aboutMe/aboutMe%20(6).jpg',
      'assets/aboutMe/aboutMe%20(7).jpg',
      'assets/aboutMe/aboutMe%20(8).jpg',
      'assets/aboutMe/aboutMe%20(9).jpg',
      'assets/aboutMe/aboutMe%20(10).jpg',
      'assets/aboutMe/aboutMe%20(11).jpg',
      'assets/aboutMe/aboutMe%20(12).jpg',
      'assets/aboutMe/aboutMe%20(13).jpg'
    ]
  };

  readonly currentIndex: Record<CarouselKey, number> = {
    teams: 0,
    family: 0,
    aboutMe: 0
  };

  previous(key: CarouselKey): void {
    const items = this.carousels[key];
    this.currentIndex[key] = (this.currentIndex[key] - 1 + items.length) % items.length;
  }

  next(key: CarouselKey): void {
    const items = this.carousels[key];
    this.currentIndex[key] = (this.currentIndex[key] + 1) % items.length;
  }

  currentImage(key: CarouselKey): string {
    return this.carousels[key][this.currentIndex[key]];
  }
}
