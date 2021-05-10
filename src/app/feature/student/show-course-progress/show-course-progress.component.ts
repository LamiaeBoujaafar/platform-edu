import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../core/services/course-service/course.service';
import {CourseStudent} from '../../../core/models/course-student/course-student';

@Component({
  selector: 'app-show-course-progress',
  templateUrl: './show-course-progress.component.html',
  styleUrls: ['./show-course-progress.component.css']
})
export class ShowCourseProgressComponent implements OnInit {

  searchValue = '';
  visible = false;
  courseStudent : CourseStudent[] = []
  courseStudentDisplay : CourseStudent[] = []
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseStudent = this.courseService.getValidSection();
    this.courseStudentDisplay = [...this.courseStudent];
  }
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.courseStudentDisplay = this.courseStudent.filter((item: CourseStudent) => item.course.title.indexOf(this.searchValue) !== -1);
  }


}
