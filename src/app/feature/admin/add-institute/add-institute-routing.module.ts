import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstituteComponent } from './add-institute.component';

const routes: Routes = [{ path: '', component: AddInstituteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddInstituteRoutingModule { }
