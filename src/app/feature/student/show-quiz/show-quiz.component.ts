import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../core/services/quiz-service/quiz.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {QuizCourseModel} from '../../../core/models/quiz/quiz-course-model/quiz-course-model';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})

export class ShowQuizComponent implements OnInit {

  quizCourse: QuizCourseModel[] = [];
  selectedQuizCourse!: QuizCourseModel;
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result: boolean = false;
  selectedCourse = false;
  list : any[] =[]
  contour = 0

  constructor(private quizService: QuizService, private modal: NzModalService) {
  }

  ngOnInit(): void {
    this.quizCourse = this.quizService.getCourseQuiz();
  }

  onAnswer(correct: boolean) {
    this.answerSelected = true;
    this.list[this.currentQuiz] = correct;

  }
  next() {
    this.contour++
    if (this.list[this.currentQuiz]) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }
    setTimeout(() => {
      if (this.currentQuiz < 4) {
        this.currentQuiz++;
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
    this.selectedCourse = false;
    this.currentQuiz = 0;
    this.answerSelected = false;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.contour = 0
    this.list =[]
  }

  startQuiz(quizCourse: QuizCourseModel) {
    this.selectedCourse = true;
    console.log(quizCourse);
    this.selectedQuizCourse = quizCourse;
  }

}
