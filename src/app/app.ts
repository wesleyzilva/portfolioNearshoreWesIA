import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

declare function gtag(...args: any[]): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly scrollMilestones = [25, 50, 75, 90];
  private readonly firedMilestones = new Set<number>();

  ngOnInit(): void {
    this.firedMilestones.clear();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const el = target.closest('[data-gtm-event]') as HTMLElement | null;
    if (!el) return;
    const eventName = el.getAttribute('data-gtm-event');
    if (eventName && typeof gtag !== 'undefined') {
      gtag('event', eventName, { event_category: 'cta_click', value: 1 });
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const win = this.document.defaultView;
    if (!win) return;
    const scrollTop = win.scrollY || win.pageYOffset;
    const docHeight = this.document.documentElement.scrollHeight - win.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.round((scrollTop / docHeight) * 100);
    for (const milestone of this.scrollMilestones) {
      if (pct >= milestone && !this.firedMilestones.has(milestone)) {
        this.firedMilestones.add(milestone);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_depth', { event_category: 'engagement', event_label: `${milestone}%`, value: milestone });
        }
      }
    }
  }
}
