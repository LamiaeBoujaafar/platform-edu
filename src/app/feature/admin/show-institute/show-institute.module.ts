import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowInstituteRoutingModule } from './show-institute-routing.module';
import { ShowInstituteComponent } from './show-institute.component';


@NgModule({
  declarations: [
    ShowInstituteComponent
  ],
  imports: [
    CommonModule,
    ShowInstituteRoutingModule
  ]
})
export class ShowInstituteModule { }
