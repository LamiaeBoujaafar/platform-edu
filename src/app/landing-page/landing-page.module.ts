import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LandingPageComponent,
  ],
    imports: [
      NzCarouselModule,
        CommonModule,
        LandingPageRoutingModule,
        SharedModule
    ]
})
export class LandingPageModule { }
