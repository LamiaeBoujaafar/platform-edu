import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../core/services/quiz-service/quiz.service";

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
  constructor(private quizservice:QuizService) { }

  ngOnInit(): void {
    this.ongetEtudaintQuizCoure(1)
  }
  ongetEtudaintQuizCoure(idetudaint:number){
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

