import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowQuizRoutingModule } from './show-quiz-routing.module';
import { ShowQuizComponent } from './show-quiz.component';


@NgModule({
  declarations: [
    ShowQuizComponent
  ],
  imports: [
    CommonModule,
    ShowQuizRoutingModule
  ]
})
export class ShowQuizModule { }
