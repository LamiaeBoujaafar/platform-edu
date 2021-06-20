import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuizRoutingModule } from './create-quiz-routing.module';
import { CreateQuizComponent } from './create-quiz.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {CreateQuizCourseModule} from "./create-quiz-course/create-quiz-course.module";
import {CreateQuizParcoursModule} from "./create-quiz-parcours/create-quiz-parcours.module";



@NgModule({
  declarations: [
    CreateQuizComponent
  ],
  imports: [
    CommonModule,
    CreateQuizRoutingModule,
    NzTabsModule,
    CreateQuizCourseModule,
    CreateQuizParcoursModule
  ]
})
export class CreateQuizModule { }
