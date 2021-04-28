import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCourseProgressComponent } from './show-course-progress.component';

const routes: Routes = [{ path: '', component: ShowCourseProgressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCourseProgressRoutingModule { }
