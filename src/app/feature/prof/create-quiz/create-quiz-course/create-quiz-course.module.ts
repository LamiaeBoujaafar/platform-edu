import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CreateQuizCourseRoutingModule } from './create-quiz-course-routing.module';
import { CreateQuizCourseComponent } from './create-quiz-course.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";


@NgModule({
  declarations: [
    CreateQuizCourseComponent
  ],
  exports: [
    CreateQuizCourseComponent
  ],
  imports: [
    NzMessageModule,
    NzTableModule,
    NzCardModule,
    FormsModule,
    NzSelectModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    CommonModule,
    NzDividerModule,
    CreateQuizCourseRoutingModule,
    ReactiveFormsModule,
    NzTabsModule
  ]
})
export class CreateQuizCourseModule { }
