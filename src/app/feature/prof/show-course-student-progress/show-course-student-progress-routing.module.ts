import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCourseStudentProgressComponent } from './show-course-student-progress.component';

const routes: Routes = [{ path: '', component: ShowCourseStudentProgressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCourseStudentProgressRoutingModule { }
