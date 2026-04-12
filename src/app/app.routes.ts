import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { PersonalAboutPage } from './pages/personal-about/personal-about';
import { ProposalPage } from './pages/proposal/proposal';
import { BusinessProfilePage } from './pages/business-profile/business-profile';
import { HotSearchPage } from './pages/hot-search/hot-search';

export const routes: Routes = [
  { path: '', component: HomePage, data: { lang: 'en' } },
  { path: 'pt', component: HomePage, data: { lang: 'pt' } },
  { path: 'en', redirectTo: '', pathMatch: 'full' },
  { path: 'personal-about', component: PersonalAboutPage, data: { lang: 'en' } },
  { path: 'proposal', component: ProposalPage, data: { lang: 'en' } },
  { path: 'business-profile', component: BusinessProfilePage, data: { lang: 'en' } },
  { path: 'hot-search', component: HotSearchPage, data: { lang: 'en' } },
  { path: 'pt/personal-about', component: PersonalAboutPage, data: { lang: 'pt' } },
  { path: 'pt/proposal', component: ProposalPage, data: { lang: 'pt' } },
  { path: 'pt/business-profile', component: BusinessProfilePage, data: { lang: 'pt' } },
  { path: 'pt/hot-search', component: HotSearchPage, data: { lang: 'pt' } },
  { path: 'en/business-profile', redirectTo: 'business-profile', pathMatch: 'full' },
  { path: 'en/hot-search', redirectTo: 'hot-search', pathMatch: 'full' },
  { path: 'en/personal-about', redirectTo: 'personal-about', pathMatch: 'full' },
  { path: 'en/proposal', redirectTo: 'proposal', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
