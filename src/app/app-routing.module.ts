
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'dashboard', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: 'landing', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'feature/prof/dashboard', loadChildren: () => import('./feature/prof/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'feature/prof/profile', loadChildren: () => import('./feature/prof/profile/profile.module').then(m => m.ProfileModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
