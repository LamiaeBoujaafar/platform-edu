import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizParcoursComponent } from './create-quiz-parcours.component';

const routes: Routes = [{ path: '', component: CreateQuizParcoursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuizParcoursRoutingModule { }
