import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateInstituteComponent } from './update-institute.component';

const routes: Routes = [{ path: '', component: UpdateInstituteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateInstituteRoutingModule { }
