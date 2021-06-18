import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from "ng-zorro-antd/message";
import {concatMap} from "rxjs/operators";
import {ParcoursModel} from "../../../../core/models/course/parcours-model/parcours-model";
import {CourseModel} from "../../../../core/models/course/course-model/course-model";
import {ResponseQuestionModel} from "../../../../core/models/quiz/response-question-model/response-question-model";
import {QuestionModel} from "../../../../core/models/quiz/question-model/question-model";
import {QuizParcoursModel} from "../../../../core/models/quiz/quiz-parcours-model/quiz-parcours-model";
import {QuizService} from "../../../../core/services/quiz-service/quiz.service";
@Component({
  selector: 'app-create-quiz-parcours',
  templateUrl: './create-quiz-parcours.component.html',
  styleUrls: ['./create-quiz-parcours.component.css']
})
export class CreateQuizParcoursComponent implements OnInit {
  validateForm!: FormGroup;

  listOfParcours:ParcoursModel[]=[
    {
  id: 1,
      title:"devlempent",
   courses:[],
      description:"desption1"

},
{
  id: 1,
  title:"RH",
  courses:[],
  description:"desption1"



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
  time!: any ;
  quiz!:QuizParcoursModel;
  questionModel!:QuestionModel;
  responseQuestionModel!:ResponseQuestionModel;
  public SelectedParcour:any;
  public QuizParcoursList: QuizParcoursModel[] = [];
  public QuestionOfParcours: QuestionModel[] = [];
  public ShowOptionsOfQuestion:ResponseQuestionModel [] = [];
  public QuizOffParcours:any = [];
  saved :any;
  public ResponseQuestionModel: ResponseQuestionModel [] = [];
  nextClicked = 0;
  constructor(private formBuilder: FormBuilder, private message: NzMessageService, private quizService:QuizService) { }

  ngOnInit(): void {

    this.validateForm = this.formBuilder.group({
      Question: [null, [Validators.required]],
      parcour: [null, [Validators.required]],
      Qetat: [null, [Validators.required]],
      option: [null, [Validators.required]],
      duree : [null, [Validators.required]],

    });

  }
  submitForm(data: any) {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();

    }
    // @ts-ignore
    console.log(data);
    if (data.Question != null && data.parcour != null && data.Qetat != null && data.option != null ) {
      if (this.nextClicked == 1) {

        // @ts-ignore
        let qestion :QuestionModel = null;

        this.responseQuestionModel = {
          response: data.option,
          correct: data.Qetat.etta
        }


        console.log(this.responseQuestionModel);


        this.ShowOptionsOfQuestion.push(this.responseQuestionModel);
      } else if (this.nextClicked == 0) {
        this.ResponseQuestionModel = JSON.parse(JSON.stringify(this.ShowOptionsOfQuestion))
        this.questionModel = {
         idquestion:undefined,
          question :data.Question,
          responses :  this.ResponseQuestionModel
        }
        this.QuestionOfParcours.push( this.questionModel);
        console.log(this.QuestionOfParcours);
        this.ShowOptionsOfQuestion.length = 0;
      } else {

        this.quiz = {
          parcour: undefined,
          idquiz:undefined,
          numberquestions: this.QuestionOfParcours.length,
          questions :this.QuestionOfParcours,



        };
         this.onSavequiz(1,  this.quiz)
        this.QuizParcoursList.push(this.quiz);
        console.log(this.QuizParcoursList);


      }


    }
  }

  delete(i: number) {

    delete this.ShowOptionsOfQuestion[i];
    this.ShowOptionsOfQuestion.splice(i, 1)

  }

  public onNextClick(): void {
    this.nextClicked = 1;
  }

  public onPreviousClick(): void {
    this.nextClicked = 0;
  }

  public onSave(): void {
    this.nextClicked = 3;
  }


  changeParcour(SelectData: any) {
    this.SelectedParcour= SelectData;
    console.log( this.SelectedParcour);

  }
  deletetQestion(i: number) {

    delete this.QuestionOfParcours[i];
    this.QuestionOfParcours.splice(i, 1)

  }
  onSavequiz(id:number , data:any){
    this.quizService.SaveQuizParcour(id,data).subscribe(data => {
      this.saved=data;
      this.validateForm.reset();
      alert('succsess')
      window.location.reload();

    })


  }
}
