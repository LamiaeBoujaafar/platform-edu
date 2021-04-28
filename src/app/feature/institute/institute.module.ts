import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteRoutingModule } from './institute-routing.module';
import { InstitutComponent } from './institute.component';


@NgModule({
  declarations: [
    InstitutComponent
  ],
  imports: [
    CommonModule,
    InstituteRoutingModule
  ]
})
export class InstituteModule { }
