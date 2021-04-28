import { NgModule } from '@angular/core';

import { NavBarStudentRoutingModule } from './nav-bar-student-routing.module';

import {NavBarStudentComponent} from './nav-bar-student.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';


@NgModule({
  imports: [NavBarStudentRoutingModule, NzLayoutModule, NzMenuModule, NzIconModule],
  declarations: [NavBarStudentComponent],
  exports: [NavBarStudentComponent]
})
export class NavBarStudentModule { }
