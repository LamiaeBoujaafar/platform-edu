import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProfRoutingModule } from './add-prof-routing.module';
import { AddProfComponent } from './add-prof.component';


@NgModule({
  declarations: [
    AddProfComponent
  ],
  imports: [
    CommonModule,
    AddProfRoutingModule
  ]
})
export class AddProfModule { }
