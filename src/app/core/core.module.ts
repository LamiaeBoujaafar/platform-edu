import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizDirective } from './background/quiz.directive';
import {NzModalService} from "ng-zorro-antd/modal";



@NgModule({
  declarations: [
    QuizDirective
  ],
  exports: [
    QuizDirective
  ],
  imports: [
    CommonModule,

  ]
})
export class CoreModule { }
