import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'show-quiz',
        loadChildren: () => import('./show-quiz/show-quiz.module').then(m => m.ShowQuizModule)
      },
      {
        path: 'show-course',
        loadChildren: () => import('./show-course/show-course.module').then(m => m.ShowCourseModule)
      },
      {
        path: 'show-course-progress',
        loadChildren: () => import('./show-course-progress/show-course-progress.module').then(m => m.ShowCourseProgressModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
