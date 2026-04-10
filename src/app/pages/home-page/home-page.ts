import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Hero } from '../../hero/hero';
import { About } from '../../about/about';
import { Gallery } from '../../gallery/gallery';
import { Location } from '../../location/location';
import { Footer } from '../../footer/footer';
import { Comentarios } from '../../comentarios/comentarios';
import { WhatsappButton } from '../../whatsapp-button/whatsapp-button';
import { GuidedTour } from '../../guided/guided-tour';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Header, Hero, About, Gallery, Location, Footer, Comentarios, WhatsappButton, GuidedTour],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {}
