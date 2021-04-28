import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateInstituteRoutingModule } from './update-institute-routing.module';
import { UpdateInstituteComponent } from './update-institute.component';


@NgModule({
  declarations: [
    UpdateInstituteComponent
  ],
  imports: [
    CommonModule,
    UpdateInstituteRoutingModule
  ]
})
export class UpdateInstituteModule { }
