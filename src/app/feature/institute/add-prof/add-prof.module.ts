import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProfRoutingModule } from './add-prof-routing.module';
import { AddProfComponent } from './add-prof.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    AddProfComponent
  ],
  imports: [
    CommonModule,
    AddProfRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule
  ]
})
export class AddProfModule { }
