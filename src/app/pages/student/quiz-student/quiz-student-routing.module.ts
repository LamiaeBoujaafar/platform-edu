import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizStudentComponent } from './quiz-student.component';

const routes: Routes = [
  { path: '', component: QuizStudentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizStudentRoutingModule { }
