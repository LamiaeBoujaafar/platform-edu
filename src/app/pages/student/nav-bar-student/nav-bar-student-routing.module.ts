import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizStudentComponent} from '../quiz-student/quiz-student.component';
import {NavBarStudentComponent} from './nav-bar-student.component';

const routes: Routes = [
  { path: '', component: NavBarStudentComponent },
  { path: 'quiz', loadChildren: () => import('../quiz-student/quiz-student.module').then(m => m.QuizStudentModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarStudentRoutingModule { }
