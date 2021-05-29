import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteRoutingModule } from './institute-routing.module';
import { InstitutComponent } from './institute.component';
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {SharedModule} from "../../shared/shared.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";


@NgModule({
  declarations: [
    InstitutComponent
  ],
  imports: [
    CommonModule,
    InstituteRoutingModule,
    NzPopconfirmModule,
    NzSelectModule,
    NzInputModule,
    NzMessageModule,
    NzProgressModule,
    SharedModule,
    NzLayoutModule
  ]
})
export class InstituteModule { }
