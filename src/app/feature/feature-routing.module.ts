import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeatureComponent} from './feature.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'prof',
        loadChildren: () => import('./prof/prof.module').then(m => m.ProfModule)
      },
      {
        path: 'institute', loadChildren: () => import('./institute/institute.module').then(m => m.InstituteModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }]
  }
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
