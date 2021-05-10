import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizCourseComponent } from './create-quiz-course.component';

const routes: Routes = [{ path: '', component: CreateQuizCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuizCourseRoutingModule { }
