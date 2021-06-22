import {Component, OnInit} from '@angular/core';
import {QuizService} from '../../../core/services/quiz-service/quiz.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {QuizCourseModel} from '../../../core/models/quiz/quiz-course-model/quiz-course-model';
import {StudentService} from '../../../core/services/Student-service/student.service';

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
  list: any[] = []
  etudaintQuizeCour:any;
  contour = 0
  loading: boolean = false;
  errorMessage: any;
  saved: any;

  constructor(private quizService: QuizService, private modal: NzModalService,private studentService:StudentService) {
  }
  getStudentLoged() {
    this.studentService.getProfLoged().subscribe(data => {
      this.studentService.student=data
      console.log(this.studentService.student)
    });
  }

  ngOnInit(): void {

    this.onShowQuizCoure(1)

  }

  onAnswer(correct: boolean) {
    console.log(correct)
    this.answerSelected = true;
    this.list[this.currentQuiz] = correct;

  }

  next() {
    console.log(this.currentQuiz)
    this.contour++
    if (this.list[this.currentQuiz] == true) {
      this.correctAnswers++;
      console.log(this.correctAnswers)
    } else {
      this.incorrectAnswers++;
    }

    if (this.currentQuiz < this.selectedQuizCourse.numberquestions - 1) {
      this.currentQuiz++;
      this.answerSelected = false;
    }


  }

  showResult() {
  this.etudaintQuizeCour ={
    note:this.correctAnswers*100/this.selectedQuizCourse.numberquestions
  }
    this.onSaveEtudaintQuizCour(1,this.selectedQuizCourse.idquiz,this.etudaintQuizeCour)

    if (this.correctAnswers >= this.selectedQuizCourse.numberquestions / 2) {
      this.modal.success({
        nzTitle: 'Congratulation!! YOU WIN',
        nzContent: 'Correct answers : ' + this.correctAnswers + ' | ' + 'Incorrect answers : ' + this.incorrectAnswers,
        nzOkText: 'close',
        nzOkType: 'primary',
        nzStyle: { position: 'absolute', top: `70px`, left: `300px` },
        nzOkDanger: false,
        nzOnOk: () => {
          this.initialize();
        },
      });
    } else {
      this.modal.error({
        nzStyle: { position: 'absolute', top: `70px`, left: `300px` },
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
    this.list = []
  }

  startQuiz(quizCourse: QuizCourseModel) {
    this.selectedCourse = true;
    console.log(quizCourse);
    this.selectedQuizCourse = quizCourse;
  }

  onShowQuizCoure(idparcour:number) {
    this.getStudentLoged()
    this.loading = true;
    this.errorMessage = "";
    this.quizService.GetQuizCoureStudent(idparcour)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.quizCourse = response;
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
    this.quizService.SaveEtudantQuizCoure(idEtudaint, idQuiz, note).subscribe(data => {
      this.saved = data;

    })

  }
}
