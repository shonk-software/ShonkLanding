import { Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PersonalPagesComponent} from './personal-pages/personal-pages.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'personalpages', component: PersonalPagesComponent}
];
