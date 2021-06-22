import {Component, Input, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';
import {FeatureComponent} from "../../feature/feature.component";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTESStudent: RouteInfo[] = [
  { path: 'show-course', title: 'Courses',  icon:'class', class: '' },
  { path: 'show-quiz', title: 'Quiz Course',  icon: 'quiz', class: '' },
  { path: 'show-quiz-parcours', title: 'Quiz Parcours',  icon:'live_help', class: '' },
  { path: 'show-course-progress', title: 'Course Progress',  icon:'data_usage', class: '' },
  { path: 'show-quiz-student-progress', title: 'progress quiz ',  icon:'data_usage', class: '' },

];
export const ROUTESProf: RouteInfo[] = [
  { path: 'dashboard', title: 'dashboard',  icon:'grid_view', class: '' },
  { path: 'create-course', title: 'Create Course',  icon:'class', class: '' },
  { path: 'create-section', title: 'Create Section',  icon:'menu', class: '' },
  { path: 'create-quiz-course', title: 'Quiz Course',  icon: 'quiz', class: '' },
  { path: 'create-quiz-parcours', title: 'Quiz Parcours',  icon: 'help_center', class: '' },
  { path: 'show-quiz', title: 'show Quiz',  icon:'data_usage', class: '' },
  { path: 'show-course-student-progress', title: 'student progress coures',  icon:'data_usage', class: '' },

];
export const ROUTESInstitutes: RouteInfo[] = [
  { path: 'add-student', title: 'Add Student',  icon:'school', class: '' },
  { path: 'add-prof', title: 'Add Professor',  icon:'hail', class: '' },
  { path: 'parcour', title: 'Add Parcours',  icon:'menu', class: '' },
  { path: 'registration-requests', title: 'Registration Requests',  icon: 'assignment_turned_in', class: '' },
  { path: 'show-profile', title: 'Show Profile',  icon:'perm_contact_calendar', class: '' },
];
export const ROUTESAdmin: RouteInfo[] = [
  { path: 'add-institute', title: 'Add Institute',  icon:'add_business', class: '' },
  { path: 'show-institute', title: 'Show Institutes',  icon:'travel_explore', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[]=[];
  @Input() public role: string="";



  constructor(private router : Router) { }

  ngOnInit(): void {
    if (this.role == "student") {
      this.menuItems = ROUTESStudent.filter(menuItem => menuItem);
    }else if (this.role=="prof") {
      this.menuItems = ROUTESProf.filter(menuItem => menuItem);
    }else if (this.role=="institute") {
      this.menuItems = ROUTESInstitutes.filter(menuItem => menuItem);
    }else if (this.role=="admin") {
      this.menuItems = ROUTESAdmin.filter(menuItem => menuItem);
    }
  }

  logout() {
    localStorage.removeItem('JWT');
    this.router.navigate(['/landing']);
  }

}
