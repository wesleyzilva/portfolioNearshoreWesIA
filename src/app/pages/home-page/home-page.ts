import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Hero } from '../../hero/hero';
import { About } from '../../about/about';
import { Gallery } from '../../gallery/gallery';
import { Location } from '../../location/location';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Header, Hero, About, Gallery, Location, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {}
