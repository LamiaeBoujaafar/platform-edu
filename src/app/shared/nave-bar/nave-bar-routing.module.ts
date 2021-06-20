import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaveBarComponent } from './nave-bar.component';

const routes: Routes = [{ path: '', component: NaveBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaveBarRoutingModule { }
