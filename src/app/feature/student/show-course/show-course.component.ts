import { Component, OnInit } from '@angular/core';
import {ChapterModel} from '../../../core/models/chapter-model/chapter-model';
import {CourseQuizModel} from '../../../core/models/quiz-model/course-quiz-model';
import {QuizService} from '../../../core/services/quiz-service/quiz.service';
import {CourseModel} from '../../../core/models/course-model/course-model';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {
  courses: CourseModel[] = [];
  selectedCourse= false;
  courseItem!:CourseModel;
  percent = 0;
  currentCourse = 0;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.courses = this.quizService.getCourses();
  }

  startQuiz(course: CourseModel) {
  this.courseItem = course;
  this.selectedCourse = true;
  }
  increase(): void {
      this.percent = this.percent + (100/3);
      if (this.percent > 100) {
        this.percent = 100;
      }
      if(this.currentCourse<2){
        this.currentCourse++;
        console.log(this.currentCourse)
      }else {
        console.log("con")
      }
  }

  decline() {
    this.percent = this.percent - (100/3);
    if (this.percent < 0) {
      this.percent = 0;
    }
    if(this.currentCourse>0){
      console.log(this.currentCourse)
      this.currentCourse--;
    }

  }
}
