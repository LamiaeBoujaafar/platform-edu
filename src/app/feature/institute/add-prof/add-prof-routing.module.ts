import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfComponent } from './add-prof.component';

const routes: Routes = [{ path: '', component: AddProfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProfRoutingModule { }
