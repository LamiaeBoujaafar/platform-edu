import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInstitutePageComponent } from './login-institute-page.component';

const routes: Routes = [{ path: '', component: LoginInstitutePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginInstitutePageRoutingModule { }
