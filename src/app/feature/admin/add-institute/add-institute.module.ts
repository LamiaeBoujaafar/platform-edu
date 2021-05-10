import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInstituteRoutingModule } from './add-institute-routing.module';
import { AddInstituteComponent } from './add-institute.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputModule} from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    AddInstituteComponent
  ],
  imports: [
    CommonModule,
    AddInstituteRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class AddInstituteModule { }
