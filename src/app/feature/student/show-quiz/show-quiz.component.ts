import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../core/services/quiz-service/quiz.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ChapterService} from '../../../core/services/chapter-service/chapter.service';
import {ChapterModel} from '../../../core/models/chapter-model/chapter-model';
import {ChapterQuizModel} from '../../../core/models/chapter-model/chapter-quiz-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

  quizChapter: ChapterQuizModel[] = [];
  selectedQuizChapter!: ChapterQuizModel;
  chapters: ChapterModel[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result: boolean = false;
  selectedChapter = false;

  constructor(private quizService: QuizService, private chapterService: ChapterService, private modal: NzModalService, private route: Router) {
  }

  ngOnInit(): void {
    this.quizChapter = this.quizService.getQuizChapter();
  }

  onAnswer(correct: boolean) {
    this.answerSelected = true;
    setTimeout(() => {
      if (this.currentQuiz < 4) {
        this.currentQuiz++;
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
    this.selectedChapter = false;
    this.currentQuiz = 0;
    this.answerSelected = false;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
  }

  startQuiz(quizChapter: ChapterQuizModel) {
    this.selectedChapter = true;
    console.log(quizChapter);
    this.selectedQuizChapter = quizChapter;


    //this.route.navigate(['dashboard/student/show-course']);
  }
}
