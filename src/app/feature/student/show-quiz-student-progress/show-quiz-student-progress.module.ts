import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowQuizStudentProgressRoutingModule } from './show-quiz-student-progress-routing.module';
import { ShowQuizStudentProgressComponent } from './show-quiz-student-progress.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzSelectModule} from "ng-zorro-antd/select";
import {ReactiveFormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";


@NgModule({
  declarations: [
    ShowQuizStudentProgressComponent
  ],
  imports: [
    CommonModule,
    ShowQuizStudentProgressRoutingModule,
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzTableModule,
    NzProgressModule,
    NzDropDownModule
  ]
})
export class ShowQuizStudentProgressModule { }
