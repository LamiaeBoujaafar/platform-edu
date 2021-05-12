import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'add-institute',
        loadChildren: () => import('./add-institute/add-institute.module').then(m => m.AddInstituteModule)
      },
      {
        path: 'update-institute/:id',
        loadChildren: () => import('./update-institute/update-institute.module').then(m => m.UpdateInstituteModule)
      },
      {
        path: 'delete-institute',
        loadChildren: () => import('./delete-institute/delete-institute.module').then(m => m.DeleteInstituteModule)
      },
      {
        path: 'show-institute',
        loadChildren: () => import('./show-institute/show-institute.module').then(m => m.ShowInstituteModule)
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
