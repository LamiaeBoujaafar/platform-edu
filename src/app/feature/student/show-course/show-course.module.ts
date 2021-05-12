import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShowCourseRoutingModule} from './show-course-routing.module';
import {ShowCourseComponent} from './show-course.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';

@NgModule({
  declarations: [
    ShowCourseComponent
  ],
  imports: [
    CommonModule,
    ShowCourseRoutingModule,
    NzCardModule,
    NzGridModule,
    NzProgressModule,
    NzButtonModule,
    NzIconModule,
    NzResultModule
  ]
})
export class ShowCourseModule {
}
