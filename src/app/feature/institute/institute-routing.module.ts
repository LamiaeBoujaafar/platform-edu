import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstitutComponent} from './institute.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutComponent,
    children: [
      {
        path: 'add-student', loadChildren: () => import('./add-student/add-student.module').then(m => m.AddStudentModule)
      },
      {
        path: 'add-prof',
        loadChildren: () => import('./add-prof/add-prof.module').then(m => m.AddProfModule)
      },
      {
        path: 'registration-requests',
        loadChildren: () => import('./registration-requests/registration-requests.module').then(m => m.RegistrationRequestsModule)
      },
      {
        path: 'add-student-to-course',
        loadChildren: () => import('./add-student-to-course/add-student-to-course.module').then(m => m.AddStudentToCourseModule)
      },
      {
        path: 'show-profile',
        loadChildren: () => import('./show-profile/show-profile.module').then(m => m.ShowProfileModule)
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteRoutingModule {
}
