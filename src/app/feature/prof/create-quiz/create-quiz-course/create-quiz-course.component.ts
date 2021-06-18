import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { ResponseQuestionModel } from 'src/app/core/models/quiz/response-question-model/response-question-model';
import {CourseModel} from "../../../../core/models/course/course-model/course-model";
import {QuestionModel} from "../../../../core/models/quiz/question-model/question-model";
import {QuizCourseModel} from "../../../../core/models/quiz/quiz-course-model/quiz-course-model";
import {QuizService} from "../../../../core/services/quiz-service/quiz.service";
@Component({


  selector: 'app-create-quiz-course',
  templateUrl: './create-quiz-course.component.html',
  styleUrls: ['./create-quiz-course.component.css']
})
export class CreateQuizCourseComponent implements OnInit {
  validateForm!: FormGroup;
 saved :any;
 savedQuestion:any ;
 savedQuestionar:any = [] ;
  listOfCours:CourseModel[]=[
    {
      idcour : 0,
      sections : [],
      title : "java",
      parcoursId : 0,
      description:"cour java",
      image: null

    },
    {
      idcour :1,
      sections : [],
      title : "php",
      parcoursId : 0,
      description:"cour php",
      image: null

    },
  ];
  etataOfQuestion:any[]=[
    {
      etta: true,

    },
    {
      etta: false
    }
]

  responseQuestionModel!:ResponseQuestionModel;
  questionModel!:QuestionModel;
  quizCourseModel!:QuizCourseModel;
  public ShowOptionsOfQuestion:ResponseQuestionModel [] = [];
  public QuestionOfCoure: QuestionModel[] = [];
  public QuizOffCoure: QuizCourseModel []= [];
  public ResponseQuestionModel: ResponseQuestionModel[]= [];
  public expand: boolean=false;
  nextClicked = 0;

  constructor(private formBuilder: FormBuilder, private message: NzMessageService ,private quizService:QuizService) {
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
    let QuestionModel;
    if (data.Question != null && data.cours != null && data.Qetat != null && data.option != null) {
      if (this.nextClicked == 1) {
        // @ts-ignore

        // @ts-ignore
       let qestion :QuestionModel = null;

        // @ts-ignore
        this.responseQuestionModel = {
          response: data.option,
          correct: data.Qetat.etta
        }
        console.log(data.Qetat.etta)
        // @ts-ignore
        this.ShowOptionsOfQuestion.push(this.responseQuestionModel);

      } else if (this.nextClicked == 0) {
        this.ResponseQuestionModel = JSON.parse(JSON.stringify(this.ShowOptionsOfQuestion))

        this.questionModel = {
          idquestion:null,
          question: data.Question,
         responses:this.ResponseQuestionModel
        }
        this.savedQuestion ={
          question: this.questionModel.question,
          responses:this.questionModel.responses

        }
        this.savedQuestionar.push(this.savedQuestion);

        this.QuestionOfCoure.push(this.questionModel);

        console.log(this.QuestionOfCoure)
        this.ShowOptionsOfQuestion.length = 0;
      } else {

        this.quizCourseModel = {
          idquiz:0,
          coure:new CourseModel(),
          questions: this.QuestionOfCoure,
          numberquestions:this.QuestionOfCoure.length,

        };

        this.saved={
          numberquestions:this.quizCourseModel.numberquestions,
          questions:this.savedQuestionar,

        }
        console.log(this.saved);

        this.onSavequiz(1,this.saved)
        this.QuizOffCoure.push(this.quizCourseModel);






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
  onSavequiz(id:number , data:any){
    this.quizService.SaveQuizCour(id,data).subscribe(data => {
      this.saved=data;
      this.validateForm.reset();
      window.location.reload();
      alert('succsess')
    })


  }



}

