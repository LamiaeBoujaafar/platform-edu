import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowProfileRoutingModule } from './show-profile-routing.module';
import { ShowProfileComponent } from './show-profile.component';


@NgModule({
  declarations: [
    ShowProfileComponent
  ],
  imports: [
    CommonModule,
    ShowProfileRoutingModule
  ]
})
export class ShowProfileModule { }
