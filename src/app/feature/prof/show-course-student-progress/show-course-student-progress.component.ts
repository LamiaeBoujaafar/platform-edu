import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseModel} from "../../../core/models/course/course-model/course-model";
import {NzMessageService} from "ng-zorro-antd/message";
import {StudentCourseModel} from "../../../core/models/course/student-course-model/student-course-model";
import {StudentModel} from "../../../core/models/student-model/student-model";
import {CourseService} from "../../../core/services/course-service/course.service";

@Component({
  selector: 'app-show-course-student-progress',
  templateUrl: './show-course-student-progress.component.html',
  styleUrls: ['./show-course-student-progress.component.css']
})
export class ShowCourseStudentProgressComponent implements OnInit {
  Cours : any=[];
  EtudaintCoure : any=[];
  htmlContent1 = '';
  loading: boolean = false;
  errorMessage: any;
  showListEtudiantCours!:StudentCourseModel[];
  validateForm!: FormGroup;


  public SelectedCour!:any ;

  constructor(private formBuilder: FormBuilder, private message: NzMessageService,private courseService:CourseService) { }

  ngOnInit(): void {
    this.ongetCoures(1)
    this.validateForm = this.formBuilder.group({
      cours: [null, [Validators.required]],
    });
    // @ts-ignore


  }

  submitForm(data: any) {

  }

  changeCour(coureselect: any) {
    this.SelectedCour=coureselect;

    this.ongetEtudaintCoures(coureselect.idcour);

  //  let index:number = this.ListEtudiantCours.findIndex(course=>course.course== SelectData);

  console.log(coureselect);

  }
  ongetCoures(idprof:number){
    this.loading = true;
    this.errorMessage = "";
    this.courseService.GetCoures(idprof)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.Cours = response;
          console.log(this.Cours)
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
  ongetEtudaintCoures(coureid:number){
    this.loading = true;
    this.errorMessage = "";
    this.courseService.GetEtudaintCoures(coureid)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.EtudaintCoure = response;
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

}
