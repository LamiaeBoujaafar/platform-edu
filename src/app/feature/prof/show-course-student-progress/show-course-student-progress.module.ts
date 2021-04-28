import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCourseStudentProgressRoutingModule } from './show-course-student-progress-routing.module';
import { ShowCourseStudentProgressComponent } from './show-course-student-progress.component';


@NgModule({
  declarations: [
    ShowCourseStudentProgressComponent
  ],
  imports: [
    CommonModule,
    ShowCourseStudentProgressRoutingModule
  ]
})
export class ShowCourseStudentProgressModule { }
