import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudentToCourseRoutingModule } from './add-student-to-course-routing.module';
import { AddStudentToCourseComponent } from './add-student-to-course.component';


@NgModule({
  declarations: [
    AddStudentToCourseComponent
  ],
  imports: [
    CommonModule,
    AddStudentToCourseRoutingModule
  ]
})
export class AddStudentToCourseModule { }
