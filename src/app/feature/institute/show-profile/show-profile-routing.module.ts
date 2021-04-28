import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProfileComponent } from './show-profile.component';

const routes: Routes = [{ path: '', component: ShowProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowProfileRoutingModule { }
