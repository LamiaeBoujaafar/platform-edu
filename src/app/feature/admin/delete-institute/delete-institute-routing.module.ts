import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteInstituteComponent } from './delete-institute.component';

const routes: Routes = [{ path: '', component: DeleteInstituteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteInstituteRoutingModule { }
