import { Component, OnInit } from '@angular/core';
import {Routes} from "@angular/router";
import {FeatureComponent} from "../../feature/feature.component";

const routes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    children: [
      {
        path: 'student',
        loadChildren: () => import('../../feature/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'prof',
        loadChildren: () => import('../../feature/prof/prof.module').then(m => m.ProfModule)
      },
      {
        path: 'institute', loadChildren: () => import('../../feature/institute/institute.module').then(m => m.InstituteModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../../feature/admin/admin.module').then(m => m.AdminModule)
      }]
  }
  ,
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
