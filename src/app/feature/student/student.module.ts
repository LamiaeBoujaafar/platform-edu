import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {SharedModule} from "../../shared/shared.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NzModalModule,
    SharedModule,
    NzLayoutModule
  ]
})
export class StudentModule { }
