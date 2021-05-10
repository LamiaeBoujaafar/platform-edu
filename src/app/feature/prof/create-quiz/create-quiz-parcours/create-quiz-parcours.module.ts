import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CreateQuizParcoursRoutingModule } from './create-quiz-parcours-routing.module';
import { CreateQuizParcoursComponent } from './create-quiz-parcours.component';


@NgModule({
  declarations: [
    CreateQuizParcoursComponent
  ],
  imports: [
    NzTimePickerModule,
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
    CommonModule,
    CreateQuizParcoursRoutingModule
  ]
})
export class CreateQuizParcoursModule { }
