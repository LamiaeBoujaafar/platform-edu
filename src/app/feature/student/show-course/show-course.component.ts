import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../../core/models/course/course-model/course-model';
import {CourseService} from '../../../core/services/course-service/course.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})

export class ShowCourseComponent implements OnInit {
  courses: CourseModel[] = [];
  selectedCourse= false;
  courseItem!: CourseModel ;
  percent = 0;
  currentCourse = 0;
  sectionLength = 0;
  completedCourse = false;
  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
  startCourse(course: CourseModel) {
    this.courseItem = course;
    this.selectedCourse = true;
    this.sectionLength = this.courseItem.sections.length;
  }
  increase(): void {
      this.percent = this.percent + (100/this.sectionLength);
      if (this.percent > 100) {
        this.percent = 100;
      }
      if(this.currentCourse<(this.sectionLength-1)){
        this.currentCourse++;
        console.log(this.currentCourse)
        this.completedCourse = false;
      }else {
        console.log("con")
        this.completedCourse = true;
      }
  }

  decline() {
    this.percent = this.percent - (100/this.sectionLength);
    if (this.percent < 0) {
      this.percent = 0;
    }
    if(this.currentCourse>0){
      console.log(this.currentCourse)
      this.currentCourse--;
      this.completedCourse = false;
    }

  }

  back() {
    this.selectedCourse = false;
    this.completedCourse = false;
    this.percent = 0;
    this.currentCourse = 0;
    this.sectionLength = 0;
  }
}
