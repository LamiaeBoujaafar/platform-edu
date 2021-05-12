import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfRoutingModule } from './prof-routing.module';
import { ProfComponent } from './prof.component';


// @ts-ignore
@NgModule({
  declarations: [
    ProfComponent
  ],
  imports: [

    CommonModule,
    ProfRoutingModule
  ]
})
export class ProfModule { }
