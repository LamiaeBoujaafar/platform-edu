import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowQuizParcoursRoutingModule } from './show-quiz-parcours-routing.module';
import { ShowQuizParcoursComponent } from './show-quiz-parcours.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {CoreModule} from '../../../core/core.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';


@NgModule({
  declarations: [
    ShowQuizParcoursComponent
  ],
  imports: [
    CommonModule,
    ShowQuizParcoursRoutingModule,
    NzEmptyModule,
    NzCardModule,
    NzButtonModule,
    CoreModule,
    NzModalModule,
    NzListModule
  ]
})
export class ShowQuizParcoursModule { }
