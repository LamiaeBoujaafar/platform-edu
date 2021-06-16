import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CreateCourseRoutingModule } from './create-course-routing.module';
import { CreateCourseComponent } from './create-course.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {MatFormFieldModule} from "@angular/material/form-field";

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
        ReactiveFormsModule,
        MatFormFieldModule,
      NzModalModule
    ]
})
export class CreateCourseModule { }
