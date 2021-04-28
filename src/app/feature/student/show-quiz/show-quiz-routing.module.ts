import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowQuizComponent } from './show-quiz.component';

const routes: Routes = [{ path: '', component: ShowQuizComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowQuizRoutingModule { }
