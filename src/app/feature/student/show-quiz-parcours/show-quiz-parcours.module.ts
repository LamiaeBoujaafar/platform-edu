import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowQuizParcoursRoutingModule } from './show-quiz-parcours-routing.module';
import { ShowQuizParcoursComponent } from './show-quiz-parcours.component';


@NgModule({
  declarations: [
    ShowQuizParcoursComponent
  ],
  imports: [
    CommonModule,
    ShowQuizParcoursRoutingModule
  ]
})
export class ShowQuizParcoursModule { }
