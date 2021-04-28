import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfComponent} from './prof.component';

const routes: Routes = [
  {
    path: '',
    component: ProfComponent,
    children: [
      {
        path: 'create-course',
        loadChildren: () => import('./create-course/create-course.module').then(m => m.CreateCourseModule)
      },
      {
        path: 'create-quiz',
        loadChildren: () => import('./create-quiz/create-quiz.module').then(m => m.CreateQuizModule)
      },
      {
        path: 'show-course-student-progress',
        loadChildren: () => import('./show-course-student-progress/show-course-student-progress.module').then(m => m.ShowCourseStudentProgressModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfRoutingModule {
}
