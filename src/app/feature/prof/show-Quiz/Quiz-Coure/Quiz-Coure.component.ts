import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "../../../../core/models/quiz/question-model/question-model";
import {QuizCourseModel} from "../../../../core/models/quiz/quiz-course-model/quiz-course-model";
import {ResponseQuestionModel} from "../../../../core/models/quiz/response-question-model/response-question-model";
import {QuizService} from "../../../../core/services/quiz-service/quiz.service";
import {AppDataState,DataStateEnum} from "../../../../state/client.state";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {ProfService} from '../../../../core/services/prof-service/prof.service';

@Component({
  selector: 'app-quiz-coure',
  templateUrl: './Quiz-Coure.component.html',
  styleUrls: ['./Quiz-Coure.component.css']
})
export class QuizCoureComponent implements OnInit {

  public QuestionOfCoure: QuestionModel[] = [];
  public QuizOffCoure: QuizCourseModel [] = [];

  public responseQuestionModel: ResponseQuestionModel[] = [];
  public expand: boolean = false;
  saved:any;
  quizcoure$: Observable<AppDataState<any[]>> | null = null;
  DataStateEnum = DataStateEnum
  loading: boolean = false;
  errorMessage: any;
  constructor(private quizService: QuizService,private profService:ProfService) {
  }

  getProf() {
    this.profService.getProfLoged().subscribe(data => {
      this.profService.prof=data
      console.log(data)
    });
  }

  expandSet = new Set<number>();

  onExpandChange(idquiz: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(idquiz);
    } else {
      this.expandSet.delete(idquiz);
    }
  }

  ngOnInit(): void {
    this.onShowQuizCoure(1);


  }


  deletetQestion(quest: any) {
    console.log(quest)
    this.onDeleteQuestion(quest);

  }

  deletetQuize(quiz: any) {
    console.log(quiz)
    this.onDeleteQuize(quiz);
  }

  onShowQuizCoure(id:number) {

    this.getProf()
    this.loading = true;
    this.errorMessage = "";
    this.quizService.GetQuizCoure(id)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.QuizOffCoure = response;
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

  onDeleteQuestion(question: QuestionModel) {

    this.quizService.deleteQuestion(question.idquestion).subscribe(data => {
      this.saved=data;
      alert('deleted')
      window.location.reload();

    })
  }
  onDeleteQuize(quize: QuizCourseModel){
    this.quizService.deleteQuiz(quize.idquiz).subscribe((data: any) => {
      this.saved=data;
      alert('deleted')
      window.location.reload();

    })
  }
  }

