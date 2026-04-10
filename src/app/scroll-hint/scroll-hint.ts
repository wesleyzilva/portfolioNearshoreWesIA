import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-hint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-hint.html',
  styleUrl: './scroll-hint.scss'
})
export class ScrollHint {
  @Input() targetSection: string = '';
  
  scrollToSection() {
    const element = document.getElementById(this.targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
