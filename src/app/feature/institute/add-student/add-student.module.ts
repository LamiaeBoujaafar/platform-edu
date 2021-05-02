import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudentRoutingModule } from './add-student-routing.module';
import { AddStudentComponent } from './add-student.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    AddStudentComponent
  ],
    imports: [
        CommonModule,
        AddStudentRoutingModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzFormModule,
        NzInputModule
    ]
})
export class AddStudentModule { }
