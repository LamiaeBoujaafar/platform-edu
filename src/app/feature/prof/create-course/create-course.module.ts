import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CreateCourseRoutingModule } from './create-course-routing.module';
import { CreateCourseComponent } from './create-course.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  declarations: [
    CreateCourseComponent
  ],
  imports: [
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    NzFormModule,
    NzCardModule,
    CommonModule,
    CreateCourseRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateCourseModule { }
