
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'dashboard', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: 'landing', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'navBar', loadChildren: () => import('./shared/nave-bar/nave-bar.module').then(m => m.NaveBarModule) },
  { path: 'first-page', loadChildren: () => import('./landing-page/first-page/first-page.module').then(m => m.FirstPageModule) },
  { path: 'registration-page', loadChildren: () => import('./landing-page/registration-page/registration-page.module').then(m => m.RegistrationPageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
