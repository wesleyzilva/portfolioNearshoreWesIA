import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type CarouselKey = 'family' | 'aboutMe' | 'githubPocs';

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
  readonly carousels: Record<CarouselKey, PhotoItem[]> = {
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
        url: 'assets/aboutMe/aboutMe%20(10).jpg',
        caption: {
          pt: 'Aprendendo chines como parte de curiosidade intelectual e expansao cultural.',
          en: 'Learning Chinese as part of intellectual curiosity and cultural expansion.'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(11).jpg',
        caption: {
          pt: 'Vestindo a camisa.',
          en: 'Wearing the jersey.'
        }
      },
      {
        url: 'assets/aboutMe/aboutMe%20(13).jpg',
        caption: {
          pt: 'Changing changing changing',
          en: 'Changing changing changing'
        }
      }
    ],
    githubPocs: [
      {
        url: 'assets/aboutMe/taxTech.webp',
        caption: {
          pt: 'Tax/Legal Tech: aproveitando a janela de oportunidade no Brasil para recuperacao comissionada de impostos em clientes PME e cadeias produtivas interestaduais (energia, transporte e outros setores). Repositorio: https://github.com/wesleyzilva/restituicaoICMS_ISS_porIBS_front',
          en: 'Tax/Legal Tech: using the Brazil market opportunity to drive commission-based tax recovery for SMB clients and interstate value chains (energy, transportation, and other sectors). Repository: https://github.com/wesleyzilva/restituicaoICMS_ISS_porIBS_front'
        }
      },
      {
        url: 'assets/aboutMe/smallBusiness.webp',
        caption: {
          pt: 'Sistema de fidelizacao digital para pequenos comercios de servicos (barbearias, clinicas odontologicas e petshops), sem papel e sem esquecimento, com jornada simples para recorrencia de clientes. Repositorio: https://github.com/wesleyzilva/VIPpocket_adm',
          en: 'Digital loyalty system for small service businesses (barbershops, dental clinics, and pet shops), paperless and reminder-friendly, designed to increase repeat customers through a simple user journey. Repository: https://github.com/wesleyzilva/VIPpocket_adm'
        }
      },
      {
        url: 'assets/aboutMe/www.jpg',
        caption: {
          pt: 'Projeto IA First para deixar um cartao digital na avenida da internet para pequenos comercios locais, combinando UX e analytics para validar hipoteses rapidamente. Repositorio: https://github.com/wesleyzilva/dradaianaferraz_gold',
          en: 'AI-first project built to place a digital business card on the internet avenue for local small businesses, combining UX and analytics for fast hypothesis validation. Repository: https://github.com/wesleyzilva/dradaianaferraz_gold'
        }
      },
      {
        url: 'assets/aboutMe/reinventing.jpeg',
        caption: {
          pt: 'Sistema CRM POC para resolver administracao interna do negocio em abordagem AI-first, aumentando produtividade em equipes distribuidas. Repositorio: https://github.com/wesleyzilva/partners.crm.com',
          en: 'CRM POC system to solve internal business administration in an AI-first approach, improving productivity in distributed teams. Repository: https://github.com/wesleyzilva/partners.crm.com'
        }
      },
      {
        url: 'assets/aboutMe/trade.png',
        caption: {
          pt: 'POC de aprendizado guiado para Price Action em Trade e Forex, estruturando conceitos praticos e teoricos com foco em evolucao consistente. Repositorio: https://github.com/wesleyzilva/PriceAction_Fisica',
          en: 'Guided learning POC for Price Action in Trade and Forex, structuring practical and theoretical concepts to support consistent progression. Repository: https://github.com/wesleyzilva/PriceAction_Fisica'
        }
      }
    ]
  };

  readonly currentIndex: Record<CarouselKey, number> = {
    family: 0,
    aboutMe: 0,
    githubPocs: 0
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
    return item.caption.en;
  }
}
