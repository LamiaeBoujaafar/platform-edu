import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../../core/services/quiz-service/quiz.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {QuizParcoursModel} from '../../../core/models/quiz/quiz-parcours-model/quiz-parcours-model';

@Component({
  selector: 'app-show-quiz-parcours',
  templateUrl: './show-quiz-parcours.component.html',
  styleUrls: ['./show-quiz-parcours.component.css']
})
export class ShowQuizParcoursComponent implements OnInit {
  quizParcours!: QuizParcoursModel ;
  currentQuestion = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result: boolean = false;
  startQuiz = false;
  list : any[] =[]
  contour = 0

  constructor(private parcoursQuizService:QuizService, private modal: NzModalService) { }

  ngOnInit(): void {
    this.quizParcours = this.parcoursQuizService.getParcoursQuiz()
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
      if (this.currentQuestion < this.quizParcours.numberQuestions -1) {
        this.currentQuestion++;
        console.log('incorrect'  +this.currentQuestion);
        this.answerSelected = false;
      }
    }, 500);

  }

  showResult() {
    if (this.correctAnswers >= 3) {
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


}
