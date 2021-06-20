import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaveBarRoutingModule } from './nave-bar-routing.module';
import { NaveBarComponent } from './nave-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NaveBarComponent
  ],
  exports: [
    NaveBarComponent
  ],
  imports: [
    CommonModule,
    NaveBarRoutingModule,
    NgbModule
  ]
})
export class NaveBarModule { }
