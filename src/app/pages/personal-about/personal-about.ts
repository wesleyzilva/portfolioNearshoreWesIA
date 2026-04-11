import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

type CarouselKey = 'teams' | 'family' | 'aboutMe';

interface PhotoItem {
  url: string;
  caption: {
    pt: string;
    en: string;
  };
}

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

  readonly carousels: Record<CarouselKey, PhotoItem[]> = {
    teams: [
      {
        url: 'assets/teams/times%20(1).jpg',
        caption: {
          pt: 'Reunião da equipe de desenvolvimento - planejamento de sprint',
          en: 'Development team meeting - sprint planning'
        }
      },
      {
        url: 'assets/teams/times%20(2).jpg',
        caption: {
          pt: 'Sessão de retrospectiva com o time ágil',
          en: 'Retrospective session with agile team'
        }
      },
      {
        url: 'assets/teams/times%20(3).jpg',
        caption: {
          pt: 'Workshop de integração com equipe nearshore',
          en: 'Integration workshop with nearshore team'
        }
      },
      {
        url: 'assets/teams/times%20(4).jpg',
        caption: {
          pt: 'Celebração de entrega de projeto com a squad',
          en: 'Project delivery celebration with the squad'
        }
      }
    ],
    family: [
      {
        url: 'assets/family/20210728_173811.jpg',
        caption: {
          pt: 'Meus filhos Heitor e Samuel com nosso brinquedo preferido Lego. Construindo desde pequeno times fortes.',
          en: 'My sons Heitor and Samuel with our favorite toy Lego. Building strong teams since childhood.'
        }
      },
      {
        url: 'assets/family/20260105_195435.jpg',
        caption: {
          pt: 'Valdete e Francisco meus pais e base solida.',
          en: 'Valdete and Francisco my parents and solid foundation.'
        }
      },
      {
        url: 'assets/family/20260125_084719.jpg',
        caption: {
          pt: 'Daiana minha esposa, amiga e parceira nos negocios e na saude.',
          en: 'Daiana my wife, friend and business and health partner.'
        }
      }
    ],
    aboutMe: [
      {
        url: 'assets/aboutMe/aboutMe%20(1).jpeg',
        caption: {
          pt: 'Reconhecimento pelo trabalho.',
          en: 'Work recognition.'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(1).jpg',
        caption: {
          pt: 'Desde novo.',
          en: 'Since young.'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(3).jpg',
        caption: {
          pt: 'Leitura de diversos livros inclusive escrevendo o meu proprio "Menu da transformação"',
          en: 'Reading various books including writing my own "Menu da transformação"'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(4).jpg',
        caption: {
          pt: 'Trade para um operacional consistente e um dinheiro a mais.',
          en: 'Trading for consistent operations and extra income.'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(5).jpg',
        caption: {
          pt: 'Violino desde criança.',
          en: 'Violin since childhood.'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(6).jpg',
        caption: {
          pt: 'Mudança e adaptabilidade acima de tudo.',
          en: 'Change and adaptability above all.'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(8).jpg',
        caption: {
          pt: 'Dificuldades e parcerias que nos fortalecem (pandemia, remote work).',
          en: 'Difficulties and partnerships that strengthen us (pandemic, remote work).'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(9).jpg',
        caption: {
          pt: 'Compartilhando conhecimento e experiências',
          en: 'Sharing knowledge and experiences'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(10).jpg',
        caption: {
          pt: 'Inspiração em diferentes contextos',
          en: 'Inspiration in different contexts'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(11).jpg',
        caption: {
          pt: 'Construindo conexões significativas',
          en: 'Building meaningful connections'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(12).jpg',
        caption: {
          pt: 'Evolução constante e adaptação',
          en: 'Constant evolution and adaptation'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(13).jpg',
        caption: {
          pt: 'Changing changing changing',
          en: 'Changing changing changing'
        }
      }
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

  currentItem(key: CarouselKey): PhotoItem {
    return this.carousels[key][this.currentIndex[key]];
  }

  currentCaption(key: CarouselKey): string {
    const item = this.currentItem(key);
    return this.lang() === 'pt' ? item.caption.pt : item.caption.en;
  }
}
