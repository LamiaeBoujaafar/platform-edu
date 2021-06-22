
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
const routes: Routes = [

  { path: 'dashboard', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: 'landing', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: '', loadChildren: () => import('./landing-page/first-page/first-page.module').then(m => m.FirstPageModule) },
  { path: 'navBar', loadChildren: () => import('./shared/nave-bar/nave-bar.module').then(m => m.NaveBarModule) },
  { path: 'first-page', loadChildren: () => import('./landing-page/first-page/first-page.module').then(m => m.FirstPageModule) },
  { path: 'registration-page', loadChildren: () => import('./landing-page/registration-page/registration-page.module').then(m => m.RegistrationPageModule) },
  { path: 'login-institute', loadChildren: () => import('./landing-page/login-institute-page/login-institute-page.module').then(m => m.LoginInstitutePageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
