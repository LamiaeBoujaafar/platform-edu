import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizDirective } from './background/quiz.directive';



@NgModule({
  declarations: [
    QuizDirective
  ],
  exports: [
    QuizDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
