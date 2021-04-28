import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInstituteRoutingModule } from './add-institute-routing.module';
import { AddInstituteComponent } from './add-institute.component';


@NgModule({
  declarations: [
    AddInstituteComponent
  ],
  imports: [
    CommonModule,
    AddInstituteRoutingModule
  ]
})
export class AddInstituteModule { }
