import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {AppDataState,DataStateEnum} from "../../../../state/client.state";
import {QuizService} from "../../../../core/services/quiz-service/quiz.service";
import {QuizParcoursModel} from "../../../../core/models/quiz/quiz-parcours-model/quiz-parcours-model";
import {catchError, map, startWith} from "rxjs/operators";
import {QuizCourseModel} from "../../../../core/models/quiz/quiz-course-model/quiz-course-model";
import {QuestionModel} from "../../../../core/models/quiz/question-model/question-model";

@Component({
  selector: 'app-quiz-parcour',
  templateUrl: './Quiz-Parcour.component.html',
  styleUrls: ['./Quiz-Parcour.component.css']
})
export class QuizParcourComponent implements OnInit {
  quizparcour$: Observable<AppDataState<QuizParcoursModel[]>> | null=null;
  DataStateEnum=DataStateEnum
  loading: boolean = false
  saved: any
  public QuizOffParcour: QuizParcoursModel [] = [];
  errorMessage: any;
  expandSet = new Set<number>();
  onExpandChange(idquiz: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(idquiz);
    } else {
      this.expandSet.delete(idquiz);
    }
  }
  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.OnGetQuiz();
    this.onShowQuizparcour()
  }
  OnGetQuiz(){

    this.quizparcour$=this.quizService.GetQuiParcour().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.Error,errorMessage:err.message}))
    )
  }

  deletetQestion(ques: QuestionModel) {
    console.log(ques)
    this.onDeleteQuestion(ques)

  }

  deletetQuize(data: any) {
    console.log(data);
    this.onDeleteQuize(data);

  }
  onShowQuizparcour() {
    this.loading = true;
    this.errorMessage = "";
    this.quizService.GetQuiParcour()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.QuizOffParcour = response;
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
  onDeleteQuize(quize: QuizParcoursModel){
    this.quizService.deleteQuizPrcour(quize.idquiz).subscribe((data: any) => {
      this.saved=data;
      alert('deleted')
      window.location.reload();

    })
  }

}
