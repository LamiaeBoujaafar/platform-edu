import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudentToCourseRoutingModule } from './add-student-to-course-routing.module';
import { AddStudentToCourseComponent } from './add-student-to-course.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    AddStudentToCourseComponent
  ],
  imports: [
    CommonModule,
    AddStudentToCourseRoutingModule,
    NzSelectModule,
    FormsModule,
    NzPopconfirmModule,
    NzTableModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    NzDividerModule,
    NzIconModule,
    NzInputModule,
    ReactiveFormsModule
  ]
})
export class AddStudentToCourseModule { }
