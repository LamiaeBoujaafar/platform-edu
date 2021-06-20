import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import {InstitutComponent} from '../feature/institute/institute.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '', loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule)
      },
      {
        path: 'registration', loadChildren: () => import('./registration-page/registration-page.module').then(m => m.RegistrationPageModule)
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
