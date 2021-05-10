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

  constructor(private parcoursQuizService:QuizService, private modal: NzModalService) { }

  ngOnInit(): void {
    this.quizParcours = this.parcoursQuizService.getParcoursQuiz()
  }
  onAnswer(correct: boolean) {
    this.answerSelected = true;
    setTimeout(() => {
      if (this.currentQuestion < 4) {
        this.currentQuestion++;
        this.answerSelected = false;
      }
    }, 1000);
    if (correct) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
      console.log('incorrect' + correct);
    }
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
  }

  start() {
    this.startQuiz = true;
  }
}
