import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCourseProgressRoutingModule } from './show-course-progress-routing.module';
import { ShowCourseProgressComponent } from './show-course-progress.component';


@NgModule({
  declarations: [
    ShowCourseProgressComponent
  ],
  imports: [
    CommonModule,
    ShowCourseProgressRoutingModule
  ]
})
export class ShowCourseProgressModule { }
