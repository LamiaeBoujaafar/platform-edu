import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../core/services/quiz-service/quiz.service';
import {QuizModel} from '../../../core/models/quiz-model/quiz-model';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ChapterService} from '../../../core/services/chapter-service/chapter.service';
import {ChapterModel} from '../../../core/models/chapter-model/chapter-model';
import {ChapterQuizModel} from '../../../core/models/chapter-model/chapter-quiz-model';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

  quizChapter: ChapterQuizModel[] = [];
  selectedQuizChapter!:ChapterQuizModel;
  chapters: ChapterModel[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result: boolean = false;
  selectedChapter = false;

  constructor(private quizService: QuizService, private chapterService: ChapterService, private modal: NzModalService) {
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
        nzContent: 'Correct answers : ' + this.correctAnswers + ' | ' + 'Incorrect answers : ' + this.incorrectAnswers
      });
    } else {
      this.modal.error({
        nzTitle: 'Sorry !! YOU LOSE',
        nzContent: 'Correct answers : ' + this.correctAnswers + ' | ' + 'Incorrect answers : ' + this.incorrectAnswers
      });
    }
  }

  startQuiz(quizChapter: ChapterQuizModel) {
    this.selectedChapter = true;
    console.log(quizChapter);
    this.selectedQuizChapter = quizChapter;
  }
}
