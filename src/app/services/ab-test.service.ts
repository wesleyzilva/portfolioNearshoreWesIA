import { Injectable } from '@angular/core';

declare function gtag(...args: any[]): void;

export type AbVariant = 'A' | 'B';

const EXPERIMENTS = ['hero_tagline', 'hero_cta', 'business_cta'] as const;
export type ExperimentId = (typeof EXPERIMENTS)[number];

@Injectable({ providedIn: 'root' })
export class AbTestService {
  private readonly assignments = new Map<ExperimentId, AbVariant>();

  constructor() {
    for (const id of EXPERIMENTS) {
      this.assignments.set(id, this.resolveVariant(id));
    }
  }

  variant(id: ExperimentId): AbVariant {
    return this.assignments.get(id) ?? 'A';
  }

  isB(id: ExperimentId): boolean {
    return this.variant(id) === 'B';
  }

  private resolveVariant(id: ExperimentId): AbVariant {
    const key = `ab_${id}`;
    const stored = sessionStorage.getItem(key) as AbVariant | null;
    if (stored === 'A' || stored === 'B') return stored;

    const assigned: AbVariant = Math.random() < 0.5 ? 'A' : 'B';
    sessionStorage.setItem(key, assigned);

    if (typeof gtag !== 'undefined') {
      gtag('event', 'ab_assignment', {
        event_category: 'ab_test',
        event_label: id,
        ab_variant: assigned,
        non_interaction: true
      });
    }

    return assigned;
  }
}
