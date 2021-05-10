import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSectionComponent } from './create-section.component';

const routes: Routes = [{ path: '', component: CreateSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSectionRoutingModule { }
