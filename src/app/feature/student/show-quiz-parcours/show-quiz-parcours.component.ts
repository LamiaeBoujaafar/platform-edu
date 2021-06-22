import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../core/services/quiz-service/quiz.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {QuizParcoursModel} from '../../../core/models/quiz/quiz-parcours-model/quiz-parcours-model';
import {StudentService} from '../../../core/services/Student-service/student.service';

@Component({
  selector: 'app-show-quiz-parcours',
  templateUrl: './show-quiz-parcours.component.html',
  styleUrls: ['./show-quiz-parcours.component.css']
})
export class ShowQuizParcoursComponent implements OnInit {
  etudaintquiparcour:any
  quizParcours!: QuizParcoursModel ;
  currentQuestion = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result: boolean = false;
  startQuiz = false;
  list : any[] =[]
  contour = 0
  loading: boolean = false;
  errorMessage: any;
  saved: any;


  constructor( private modal: NzModalService,private quizService: QuizService,private studentService:StudentService) { }

  getStudentLoged() {
    this.studentService.getProfLoged().subscribe(data => {
      this.studentService.student=data
      console.log(this.studentService.student)
    });
  }

  ngOnInit(): void {
    this. onShowQuizCoure(1)
  }
  onAnswer(correct: boolean) {
    this.answerSelected = true;
    this.list[this.currentQuestion] = correct;
  }
  next() {
  this.contour++
    if (this.list[this.currentQuestion]) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }
    setTimeout(() => {
      if (this.currentQuestion < this.quizParcours.numberquestions -1) {
        this.currentQuestion++;
        console.log('incorrect'  +this.currentQuestion);
        this.answerSelected = false;
      }
    }, 500);

  }

  showResult() {
    this.etudaintquiparcour ={
      note:this.correctAnswers*100/this.quizParcours.numberquestions
    }
    this.onSaveEtudaintQuizCour(1,this.quizParcours.idquiz,this.etudaintquiparcour)
    if (this.correctAnswers >= this.quizParcours.numberquestions/2) {
      this.modal.success({
        nzTitle: 'Congratulation!! YOU WIN',
        nzContent: 'Correct answers : ' + this.correctAnswers + ' | ' + 'Incorrect answers : ' + this.incorrectAnswers,
        nzOkText: 'close',
        nzOkType: 'primary',
        nzOkDanger: false,
        nzOnOk: () => {
          this.initialize();
        },
      });
    } else {
      this.modal.error({
        nzTitle: 'Sorry !! YOU LOSE',
        nzContent: 'Correct answers : ' + this.correctAnswers + ' | ' + 'Incorrect answers : ' + this.incorrectAnswers,
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => {
          this.initialize();
        }
      });
    }
  }

  initialize() {
    this.startQuiz = false;
    this.currentQuestion = 0;
    this.answerSelected = false;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.contour = 0;
    this.list =[]
  }

  start() {
    this.startQuiz = true;
  }
  onShowQuizCoure(parcourid:number) {
    this.getStudentLoged()
    this.loading = true;
    this.errorMessage = "";
    this.quizService.GetQuizParcour(parcourid)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.quizParcours = response;
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
  onSaveEtudaintQuizCour(idEtudaint: any, idQuiz: any, note: any) {
    this.quizService.SaveEtudantQuizParcour(idEtudaint, idQuiz, note).subscribe(data => {
      this.saved = data;
    })

  }
}
