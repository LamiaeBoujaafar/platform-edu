import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
import {SharedModule} from "../../shared/shared.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzModalModule,
    SharedModule,
    NzLayoutModule
  ]
})
export class AdminModule { }
