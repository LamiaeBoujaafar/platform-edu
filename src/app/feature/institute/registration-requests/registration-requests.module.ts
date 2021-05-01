import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRequestsRoutingModule } from './registration-requests-routing.module';
import { RegistrationRequestsComponent } from './registration-requests.component';
import { RegistrationProfComponent } from './registration-prof/registration-prof.component';
import { RegistrationStudentComponent } from './registration-student/registration-student.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";


@NgModule({
  declarations: [
    RegistrationRequestsComponent,
    RegistrationProfComponent,
    RegistrationStudentComponent
  ],
  imports: [
    CommonModule,
    RegistrationRequestsRoutingModule,
    NzTabsModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzButtonModule,
    NzBadgeModule,
    NzDropDownModule,
    NzPopconfirmModule
  ]
})
export class RegistrationRequestsModule { }
