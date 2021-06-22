import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../core/services/quiz-service/quiz.service";
import {StudentService} from '../../../core/services/Student-service/student.service';

@Component({
  selector: 'app-show-quiz-student-progress',
  templateUrl: './show-quiz-student-progress.component.html',
  styleUrls: ['./show-quiz-student-progress.component.css']
})
export class ShowQuizStudentProgressComponent implements OnInit {
  loading: boolean = false;
  errorMessage: any;
  saved: any;
  EtudaintQuizCoure :any=[]
  constructor(private quizservice:QuizService,private studentService:StudentService) { }
  getStudentLoged() {
    this.studentService.getProfLoged().subscribe(data => {
      this.studentService.student=data
      console.log(this.studentService.student)
    });
  }

  ngOnInit(): void {

    this.ongetEtudaintQuizCoure(1)
  }
  ongetEtudaintQuizCoure(idetudaint:number){
    this.getStudentLoged()
    this.loading = true;
    this.errorMessage = "";
    this.quizservice.GetEtudanitQuizCoure(idetudaint)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.EtudaintQuizCoure = response;
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

