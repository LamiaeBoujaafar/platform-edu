import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRequestsRoutingModule } from './registration-requests-routing.module';
import { RegistrationRequestsComponent } from './registration-requests.component';


@NgModule({
  declarations: [
    RegistrationRequestsComponent
  ],
  imports: [
    CommonModule,
    RegistrationRequestsRoutingModule
  ]
})
export class RegistrationRequestsModule { }
