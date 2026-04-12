import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage, data: { lang: 'en' } },
  { path: 'pt', component: HomePage, data: { lang: 'pt' } },
  { path: 'en', redirectTo: '', pathMatch: 'full' },
  { path: 'personal-about', loadComponent: () => import('./pages/personal-about/personal-about').then(m => m.PersonalAboutPage), data: { lang: 'en' } },
  { path: 'proposal', loadComponent: () => import('./pages/proposal/proposal').then(m => m.ProposalPage), data: { lang: 'en' } },
  { path: 'business-profile', loadComponent: () => import('./pages/business-profile/business-profile').then(m => m.BusinessProfilePage), data: { lang: 'en' } },
  { path: 'hot-search', loadComponent: () => import('./pages/hot-search/hot-search').then(m => m.HotSearchPage), data: { lang: 'en' } },
  { path: 'pt/personal-about', loadComponent: () => import('./pages/personal-about/personal-about').then(m => m.PersonalAboutPage), data: { lang: 'pt' } },
  { path: 'pt/proposal', loadComponent: () => import('./pages/proposal/proposal').then(m => m.ProposalPage), data: { lang: 'pt' } },
  { path: 'pt/business-profile', loadComponent: () => import('./pages/business-profile/business-profile').then(m => m.BusinessProfilePage), data: { lang: 'pt' } },
  { path: 'pt/hot-search', loadComponent: () => import('./pages/hot-search/hot-search').then(m => m.HotSearchPage), data: { lang: 'pt' } },
  { path: 'en/business-profile', redirectTo: 'business-profile', pathMatch: 'full' },
  { path: 'en/hot-search', redirectTo: 'hot-search', pathMatch: 'full' },
  { path: 'en/personal-about', redirectTo: 'personal-about', pathMatch: 'full' },
  { path: 'en/proposal', redirectTo: 'proposal', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
