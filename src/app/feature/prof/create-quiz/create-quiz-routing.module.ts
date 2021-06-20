import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizComponent } from './create-quiz.component';
import {ProfComponent} from "../prof.component";

const routes: Routes = [{
  path: '', component: CreateQuizComponent,
  children: [
    {
      path: 'create-quiz-coures',
      loadChildren: () => import('./create-quiz-course/create-quiz-course.module').then(m => m.CreateQuizCourseModule)
    },
    {
      path: 'create-quiz-parcours',
      loadChildren: () => import('./create-quiz-parcours/create-quiz-parcours.module').then(m => m.CreateQuizParcoursModule)
    }
    ]
}];

@NgModule({
  exports: [RouterModule]
})
export class CreateQuizRoutingModule { }
