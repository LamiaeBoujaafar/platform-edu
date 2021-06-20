import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowQuizStudentProgressComponent } from './show-quiz-student-progress.component';

const routes: Routes = [{ path: '', component: ShowQuizStudentProgressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowQuizStudentProgressRoutingModule { }
