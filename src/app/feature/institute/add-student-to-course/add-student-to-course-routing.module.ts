import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentToCourseComponent } from './add-student-to-course.component';

const routes: Routes = [{ path: '', component: AddStudentToCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStudentToCourseRoutingModule { }
