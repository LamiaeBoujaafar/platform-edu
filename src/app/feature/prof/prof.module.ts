import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfRoutingModule } from './prof-routing.module';
import { ProfComponent } from './prof.component';
import {SharedModule} from "../../shared/shared.module";
import {NzLayoutModule} from "ng-zorro-antd/layout";


// @ts-ignore
@NgModule({
  declarations: [
    ProfComponent
  ],
  imports: [

    CommonModule,
    ProfRoutingModule,
    SharedModule,
    NzLayoutModule
  ]
})
export class ProfModule { }
