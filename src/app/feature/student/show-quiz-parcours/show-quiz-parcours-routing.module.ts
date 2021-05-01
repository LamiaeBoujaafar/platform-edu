import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowQuizParcoursComponent } from './show-quiz-parcours.component';

const routes: Routes = [{ path: '', component: ShowQuizParcoursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowQuizParcoursRoutingModule { }
