import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCardModule } from 'ng-zorro-antd/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { ShowCourseStudentProgressRoutingModule } from './show-course-student-progress-routing.module';
import { ShowCourseStudentProgressComponent } from './show-course-student-progress.component';


@NgModule({
  declarations: [
    ShowCourseStudentProgressComponent
  ],
  imports: [
    NzProgressModule,
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
    ReactiveFormsModule,
    ShowCourseStudentProgressRoutingModule
  ]
})
export class ShowCourseStudentProgressModule { }
