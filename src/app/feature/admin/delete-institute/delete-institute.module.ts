import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteInstituteRoutingModule } from './delete-institute-routing.module';
import { DeleteInstituteComponent } from './delete-institute.component';


@NgModule({
  declarations: [
    DeleteInstituteComponent
  ],
  imports: [
    CommonModule,
    DeleteInstituteRoutingModule
  ]
})
export class DeleteInstituteModule { }
