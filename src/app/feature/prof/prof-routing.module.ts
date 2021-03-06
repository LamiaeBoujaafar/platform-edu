import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfComponent} from './prof.component';

const routes: Routes = [
  {
    path: '',
    component: ProfComponent,
    children: [
      {
        path: 'create-section',
        loadChildren: () => import('./create-section/create-section.module').then(m => m.CreateSectionModule)
      },
      {
        path: 'create-course',
        loadChildren: () => import('./create-course/create-course.module').then(m => m.CreateCourseModule)
      },
      {
        path: 'create-quiz-course',
        loadChildren: () => import('./create-quiz/create-quiz-course/create-quiz-course.module').then(m => m.CreateQuizCourseModule)
      },
      {
        path: 'create-quiz-parcours',
        loadChildren: () => import('./create-quiz/create-quiz-parcours/create-quiz-parcours.module').then(m => m.CreateQuizParcoursModule)
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
