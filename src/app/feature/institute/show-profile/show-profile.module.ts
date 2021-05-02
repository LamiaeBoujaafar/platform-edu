import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowProfileRoutingModule } from './show-profile-routing.module';
import { ShowProfileComponent } from './show-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ProfProfileComponent } from './prof-profile/prof-profile.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzProgressModule} from "ng-zorro-antd/progress";


@NgModule({
  declarations: [
    ShowProfileComponent,
    StudentProfileComponent,
    ProfProfileComponent
  ],
  imports: [
    CommonModule,
    ShowProfileRoutingModule,
    NzTabsModule,
    NzTableModule,
    NzProgressModule
  ]
})
export class ShowProfileModule { }
