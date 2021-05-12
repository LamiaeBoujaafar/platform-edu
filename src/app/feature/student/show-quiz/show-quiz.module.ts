import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { ShowQuizRoutingModule } from './show-quiz-routing.module';
import { ShowQuizComponent } from './show-quiz.component';
import {CoreModule} from '../../../core/core.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {NzGridModule} from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    ShowQuizComponent
  ],
  imports: [
    CommonModule,
    ShowQuizRoutingModule,
    NzListModule,
    CoreModule,
    NzButtonModule,
    NzModalModule,
    NzGridModule,
    NzCardModule,
    NzTypographyModule,
    NzIconModule
  ]
})
export class ShowQuizModule { }
