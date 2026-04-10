import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { PersonalAboutPage } from './pages/personal-about/personal-about';
import { ProposalPage } from './pages/proposal/proposal';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'personal-about', component: PersonalAboutPage },
  { path: 'proposal', component: ProposalPage },
  { path: '**', redirectTo: '' }
];
