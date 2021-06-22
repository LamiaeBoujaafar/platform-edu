import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../core/services/course-service/course.service';
import {CourseStudent} from '../../../core/models/course-student/course-student';
import {StudentService} from '../../../core/services/Student-service/student.service';

@Component({
  selector: 'app-show-course-progress',
  templateUrl: './show-course-progress.component.html',
  styleUrls: ['./show-course-progress.component.css']
})
export class ShowCourseProgressComponent implements OnInit {
  loading: boolean = false;
  errorMessage: any;
  EtudaintCoure:any=[];
  searchValue = '';
  visible = false;
  courseStudent : CourseStudent[] = []
  courseStudentDisplay : CourseStudent[] = []
  constructor(private courseService: CourseService,private studentService:StudentService) { }
  getStudentLoged() {
    this.studentService.getProfLoged().subscribe(data => {
      this.studentService.student=data
      console.log(this.studentService.student)
    });
  }

  ngOnInit(): void {
  //  this.courseStudent = this.courseService.getValidSection();
    this.ongetEtudaintCoures(1);
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
  ongetEtudaintCoures(etudaintid:number){
    this.getStudentLoged()
    this.loading = true;
    this.errorMessage = "";
    this.courseService.GetEtudaintCouresByetudaint(etudaintid)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.EtudaintCoure = response;
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed
          this.loading = false;
        })
  }


}
