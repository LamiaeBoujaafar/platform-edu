import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCourseProgressRoutingModule } from './show-course-progress-routing.module';
import { ShowCourseProgressComponent } from './show-course-progress.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {FormsModule} from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzProgressModule} from "ng-zorro-antd/progress";
@NgModule({
  declarations: [
    ShowCourseProgressComponent
  ],
    imports: [
        CommonModule,
        ShowCourseProgressRoutingModule,
        NzTableModule,
        NzDropDownModule,
        FormsModule,
        NzRateModule,
        NzIconModule,
        NzButtonModule,
        NzInputModule,
        NzProgressModule
    ]
})
export class ShowCourseProgressModule { }
