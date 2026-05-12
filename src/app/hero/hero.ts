import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { AbTestService } from '../services/ab-test.service';

export interface ProofItem { value: string; labelEn: string; labelPt: string; }

const ALL_PROOF_ITEMS: ProofItem[] = [
  { value: '14+',            labelEn: 'yrs · see what shipped',              labelPt: 'anos · veja o que entregou'           },
  { value: '80M+',           labelEn: 'tx/day · see the system',             labelPt: 'tx/dia · veja o sistema'              },
  { value: '99.9%',          labelEn: 'SLA · see how',                       labelPt: 'SLA · veja como'                      },
  { value: '90%',            labelEn: 'vulns fixed · see the method',        labelPt: 'vulns corrigidas · veja o método'     },
  { value: '45%',            labelEn: 'MTTR cut · see the sprint',           labelPt: 'MTTR reduzido · veja o sprint'        },
  { value: 'R$500M+',        labelEn: 'reconciled/mo · zero errors',         labelPt: 'reconciliado/mês · zero erros'        },
  { value: '50+',            labelEn: 'engineers led · 3 countries',         labelPt: 'engenheiros liderados · 3 países'     },
  { value: '12+',            labelEn: 'products · 8 countries · scroll ↓',   labelPt: 'produtos · 8 países · role ↓'         },
  { value: 'UTC&#8209;3',    labelEn: 'same hours as NY · available now',    labelPt: 'mesmo fuso NY · disponível agora'     },
  { value: '$0',             labelEn: 'timezone gap · ever',                 labelPt: 'diferença de fuso · nunca'            },
  { value: '4h',             labelEn: 'overlap with London · book a call',   labelPt: 'sobreposição Londres · agende'        },
  { value: 'Contractor',     labelEn: 'available · flexible payment',        labelPt: 'disponível · pagamento flexível'      },
  { value: 'Agile',          labelEn: 'since 2012 · see the projects ↓',     labelPt: 'desde 2012 · veja os projetos ↓'      },
  { value: 'AI&#8209;First', labelEn: 'in every sprint · not just a badge',  labelPt: 'em cada sprint · não só um badge'     },
  { value: 'DevSecOps',      labelEn: '0 critical findings · see how ↓',     labelPt: '0 achados críticos · veja como ↓'    },
  { value: 'English',        labelEn: 'C1 · async or live · start today',    labelPt: 'C1 · async ou ao vivo · começa hoje' },
];

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  readonly langService = inject(LanguageService);
  readonly ab = inject(AbTestService);
  lang = this.langService.lang;

  readonly photos = ['assets/Wesley/wesley%20(1).jpg'];
  currentPhotoIndex = 0;
  photoVisible = true;

  proofVisible = signal(true);
  proofOffset = signal(0);

  get proofWindow(): ProofItem[] {
    const items = ALL_PROOF_ITEMS;
    const o = this.proofOffset();
    return [items[o % items.length], items[(o + 1) % items.length], items[(o + 2) % items.length]];
  }

  private photoInterval: ReturnType<typeof setInterval> | null = null;
  private proofInterval: ReturnType<typeof setInterval> | null = null;

  get currentPhoto(): string {
    return this.photos[this.currentPhotoIndex];
  }

  ngOnInit() {
    this.photoInterval = setInterval(() => {
      this.photoVisible = false;
      setTimeout(() => {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
        this.photoVisible = true;
      }, 600);
    }, 5000);

    this.proofInterval = setInterval(() => {
      this.proofVisible.set(false);
      setTimeout(() => {
        this.proofOffset.set((this.proofOffset() + 3) % ALL_PROOF_ITEMS.length);
        this.proofVisible.set(true);
      }, 400);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.photoInterval) clearInterval(this.photoInterval);
    if (this.proofInterval) clearInterval(this.proofInterval);
  }

  scrollToAbout(event: MouseEvent): void {
    event.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
