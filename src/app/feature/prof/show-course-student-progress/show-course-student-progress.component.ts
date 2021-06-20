import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseModel} from "../../../core/models/course/course-model/course-model";
import {NzMessageService} from "ng-zorro-antd/message";
import {StudentCourseModel} from "../../../core/models/course/student-course-model/student-course-model";
import {StudentModel} from "../../../core/models/student-model/student-model";

@Component({
  selector: 'app-show-course-student-progress',
  templateUrl: './show-course-student-progress.component.html',
  styleUrls: ['./show-course-student-progress.component.css']
})
export class ShowCourseStudentProgressComponent implements OnInit {
  showListEtudiantCours!:StudentCourseModel[];
  validateForm!: FormGroup;
  listOfCours:CourseModel[]=[
    {
      id : 0,
      sections : [],
      title : "java",
      parcoursId : 0,
      description:"cour java",
      image: null

    },
    {
      id :1,
      sections : [],
      title : "php",
      parcoursId : 0,
      description:"cour php",
      image: null

    },
  ];
  Students:StudentModel[]=[

  ]
  ListEtudiantCours:StudentCourseModel[] = [

  ];
  public SelectedCour!:CourseModel ;

  constructor(private formBuilder: FormBuilder, private message: NzMessageService) { }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      cours: [null, [Validators.required]],
    });
    // @ts-ignore


  }

  submitForm(data: any) {

  }

  changeCour(SelectData: any) {
    this.SelectedCour=SelectData;

      let listIndex :any []=[];
    this.showListEtudiantCours = this.ListEtudiantCours.filter(course=>course.course== SelectData);

      console.log(  this.showListEtudiantCours);

  //  let index:number = this.ListEtudiantCours.findIndex(course=>course.course== SelectData);

  console.log( this.showListEtudiantCours);

  }
}
