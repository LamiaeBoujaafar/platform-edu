import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../../core/models/course/course-model/course-model';
import {CourseService} from '../../../core/services/course-service/course.service';
import {StudentService} from '../../../core/services/Student-service/student.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})

export class ShowCourseComponent implements OnInit {
  Cours: any = [];
  selectedCourse= false;
  courseItem!: any ;
  percent = 0;
  currentCourse = 0;
  sectionLength = 0;
  loading: boolean = false;
  errorMessage: any;
  saved: any;
  completedCourse = false;
  etudaintcoure : any ;
  updateEtudaintCoure :any ;
  constructor(private courseService:CourseService ,private studentService:StudentService) { }

  getStudentLoged() {
    this.studentService.getProfLoged().subscribe(data => {
      this.studentService.student=data
      console.log(this.studentService.student)
    });
  }
  ngOnInit(): void {

    this.ongetCoures(1);
  }
  startCourse(course: any) {
    this.courseItem = course;
    this.selectedCourse = true;
    this.sectionLength = this.courseItem.section.length;
    this.etudaintcoure={
      nombresectionnonvalide: this.sectionLength ,
      nombresectionvalide:0,
    }
  this.onSaveEtudaintCoure(1,course.idcour,this.etudaintcoure);

  }
  increase(): void {
      this.percent = this.percent + (100/this.sectionLength);
      if (this.percent > 100) {
        this.percent = 100;
      }
      if(this.currentCourse<(this.sectionLength-1)){
        this.currentCourse++;
        console.log(this.currentCourse)
         this.updateEtudaintCoure={
           nombresectionnonvalide: this.sectionLength-this.currentCourse,
           nombresectionvalide:this.currentCourse,
         }
        this.onUpdateEtudaintCoure(1,this.courseItem.idcour,this.updateEtudaintCoure)
        this.completedCourse = false;
      }else {
        this.updateEtudaintCoure={
          nombresectionnonvalide: 0,
          nombresectionvalide:this.sectionLength,
        }
        this.onUpdateEtudaintCoure(1,this.courseItem.idcour,this.updateEtudaintCoure)
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
  ongetCoures(idparcour:number){
    this.getStudentLoged()
    this.loading = true;
    this.errorMessage = "";
    this.courseService.GetCouresByParcour(idparcour)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.Cours = response;
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
  onSaveEtudaintCoure(idetudaint:number,idCoure:number,data:any){
    this.courseService.SaveEtudaintCoure(idetudaint,idCoure, data).subscribe(data => {
      this.saved = data;

    })



  }
  onUpdateEtudaintCoure(idetudaint:number,idCoure:number,data:any){
    this.courseService.UpdateEtudaiintCoure(idetudaint,idCoure, data).subscribe(data => {
      this.saved = data;

    })
}
}
