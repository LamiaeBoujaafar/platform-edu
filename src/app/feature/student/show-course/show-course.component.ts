import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../core/services/course-service/course.service';
import {Course} from '../../../core/models/course/course-model/course';
import {SectionModel} from '../../../core/models/course/section-model/section-model';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})

export class ShowCourseComponent implements OnInit {
  courses!: Array<Course> ;
  selectedCourse= false;
  courseItem!: Course ;
  percent = 0;
  currentCourse = 0;
  sectionLength = 0;
  completedCourse = false;

  constructor(private courseService:CourseService) {
    this.courseService.getCoursesFromDb().subscribe(data => {
      this.courses = data
    });

  }

  ngOnInit(): void {
    //this.courses = this.courseService.getCourses();
  }
  startCourse(course: Course) {
    this.courseItem = course;
    this.selectedCourse = true;
    this.sectionLength = this.courseItem.section.length;
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
