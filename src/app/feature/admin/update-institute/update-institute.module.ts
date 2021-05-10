import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateInstituteRoutingModule } from './update-institute-routing.module';
import { UpdateInstituteComponent } from './update-institute.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputModule} from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    UpdateInstituteComponent
  ],
  imports: [
    CommonModule,
    UpdateInstituteRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class UpdateInstituteModule { }
