
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'dashboard', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
