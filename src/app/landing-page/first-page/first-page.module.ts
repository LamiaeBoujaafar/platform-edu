import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import {NaveBarModule} from '../../shared/nave-bar/nave-bar.module';


@NgModule({
  declarations: [
    FirstPageComponent
  ],
    imports: [
        CommonModule,
        FirstPageRoutingModule,
        NaveBarModule
    ]
})
export class FirstPageModule { }
