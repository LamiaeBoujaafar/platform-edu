import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProfRoutingModule } from './add-prof-routing.module';
import { AddProfComponent } from './add-prof.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {MatButtonModule} from '@angular/material/button';
import {NzSelectModule} from 'ng-zorro-antd/select';


@NgModule({
  declarations: [
    AddProfComponent
  ],
  imports: [
    CommonModule,
    AddProfRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    MatButtonModule,
    NzSelectModule
  ]
})
export class AddProfModule { }
