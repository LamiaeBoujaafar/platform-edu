import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginInstitutePageRoutingModule } from './login-institute-page-routing.module';
import { LoginInstitutePageComponent } from './login-institute-page.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginInstitutePageComponent
  ],
  imports: [
    CommonModule,
    LoginInstitutePageRoutingModule,
    FormsModule
  ]
})
export class LoginInstitutePageModule { }
