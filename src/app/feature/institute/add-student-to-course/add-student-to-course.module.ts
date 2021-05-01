import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudentToCourseRoutingModule } from './add-student-to-course-routing.module';
import { AddStudentToCourseComponent } from './add-student-to-course.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";


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
    NzButtonModule
  ]
})
export class AddStudentToCourseModule { }
