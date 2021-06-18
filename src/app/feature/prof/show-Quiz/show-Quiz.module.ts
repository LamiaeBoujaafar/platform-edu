import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowQuizRoutingModule } from './show-Quiz-routing.module';
import { ShowQuizComponent } from './show-Quiz.component';
import { QuizParcourComponent } from './Quiz-Parcour/Quiz-Parcour.component';
import { QuizCoureComponent } from './Quiz-Coure/Quiz-Coure.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzProgressModule} from "ng-zorro-antd/progress";


@NgModule({
  declarations: [
    ShowQuizComponent,
    QuizParcourComponent,
    QuizCoureComponent
  ],
  imports: [
    CommonModule,
    ShowQuizRoutingModule,
    NzTabsModule,
    NzTableModule,
    NzProgressModule
  ]
})
export class ShowQuizModule { }
