import { NgModule } from '@angular/core';

import { QuizStudentRoutingModule } from './quiz-student-routing.module';

import { QuizStudentComponent } from './quiz-student.component';


@NgModule({
  imports: [QuizStudentRoutingModule],
  declarations: [QuizStudentComponent],
  exports: [QuizStudentComponent]
})
export class QuizStudentModule { }
