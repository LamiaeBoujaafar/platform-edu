import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowInstituteComponent } from './show-institute.component';

const routes: Routes = [{ path: '', component: ShowInstituteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowInstituteRoutingModule { }
