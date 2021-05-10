import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowInstituteRoutingModule } from './show-institute-routing.module';
import { ShowInstituteComponent } from './show-institute.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {FormsModule} from '@angular/forms';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
@NgModule({
  declarations: [
    ShowInstituteComponent
  ],
  imports: [
    CommonModule,
    ShowInstituteRoutingModule,
    NzTableModule,
    FormsModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class ShowInstituteModule { }
