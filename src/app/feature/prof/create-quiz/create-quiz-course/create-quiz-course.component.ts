import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { ResponseQuestionModel } from 'src/app/core/models/quiz/response-question-model/response-question-model';
import {CourseModel} from "../../../../core/models/course/course-model/course-model";
import {QuestionModel} from "../../../../core/models/quiz/question-model/question-model";
import {QuizCourseModel} from "../../../../core/models/quiz/quiz-course-model/quiz-course-model";
@Component({


  selector: 'app-create-quiz-course',
  templateUrl: './create-quiz-course.component.html',
  styleUrls: ['./create-quiz-course.component.css']
})
export class CreateQuizCourseComponent implements OnInit {
  validateForm!: FormGroup;

  listOfCours:CourseModel[]=[
    {
      id : 0,
      sections : [],
      title : "Present simple",
      parcoursId : 0,
      description:"cour java",
      image: null

    },
    {
      id :1,
      sections : [],
      title : "Present continuous",
      parcoursId : 0,
      description:"cour php",
      image: null

    }, {
      id :1,
      sections : [],
      title : "Simple tenses",
      parcoursId : 0,
      description:"cour php",
      image: null

    },
  ];
  responseQuestionModel!:ResponseQuestionModel;
  questionModel!:QuestionModel;
  quizCourseModel!:QuizCourseModel;
  public ShowOptionsOfQuestion:ResponseQuestionModel [] = [];
  public QuestionOfCoure: QuestionModel[] = [];
  public QuizOffCoure: QuizCourseModel []= [];
  public ResponseQuestionModel: ResponseQuestionModel[]= [];
  public expand: boolean=false;
  nextClicked = 0;

  constructor(private formBuilder: FormBuilder, private message: NzMessageService) {
  }

  ngOnInit(): void {


    this.validateForm = this.formBuilder.group({
      Question: [null, [Validators.required]],
      cours: [null, [Validators.required]],
      Qetat: [null, [Validators.required]],
      section: [null, [Validators.required]],
      option: [null, [Validators.required]],

    });

  }


  submitForm(data: any) {

    // @ts-ignore
    console.log(data);
    let QuestionModel;
    if (data.Question != null && data.cours != null && data.Qetat != null && data.option != null) {
      if (this.nextClicked == 1) {
        // @ts-ignore

        // @ts-ignore
       let qestion :QuestionModel = null;

        this.responseQuestionModel = {
          response: data.option,
          id: 0,
          Question: qestion,
          correct: data.Qetat,
        }
        // @ts-ignore
        this.ShowOptionsOfQuestion.push(this.responseQuestionModel);


      } else if (this.nextClicked == 0) {
        this.ResponseQuestionModel = JSON.parse(JSON.stringify(this.ShowOptionsOfQuestion))

        this.questionModel = {
          id:0,
          question: data.Question,
         responses:this.ResponseQuestionModel
        }

        this.QuestionOfCoure.push(this.questionModel);
        console.log(this.QuestionOfCoure);

    //here save options and question to DB
        this.ShowOptionsOfQuestion.length = 0;
      } else {
        this.quizCourseModel = {
           id:0,
          course:data.cours,
          questions: this.QuestionOfCoure,
          estimatedDuration:12,
          numberQuestions:this.QuestionOfCoure.length,

        };
        this.QuizOffCoure.push(this.quizCourseModel);
        //here save QUIZ  to DB

        this.QuestionOfCoure.splice(0, this.QuestionOfCoure.length) ;

        console.log(this.ResponseQuestionModel)
        console.log(this.QuizOffCoure);
        console.log(this.QuestionOfCoure);


      }


    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();

    }


  }

  delete(i: number) {

    delete this.ShowOptionsOfQuestion[i];
    this.ShowOptionsOfQuestion.splice(i, 1)

  }
  deletetQestion(i: number) {

    delete this.QuestionOfCoure[i];
    this.QuestionOfCoure.splice(i, 1)

  }

  public onNextClick(): void {
    this.nextClicked = 1;
  }

  public onCreateQ(): void {
    this.nextClicked = 0;
  }

  public onSave(): void {
    this.nextClicked = 3;
  }
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expand=false
    } else {
      this.expand=false
    }
  }



}

