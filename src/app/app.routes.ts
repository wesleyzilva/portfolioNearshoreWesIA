import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { PersonalAboutPage } from './pages/personal-about/personal-about';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'personal-about', component: PersonalAboutPage },
  { path: '**', redirectTo: '' }
];
