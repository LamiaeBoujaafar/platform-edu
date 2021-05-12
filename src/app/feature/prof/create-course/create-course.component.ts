import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseModel} from "../../../core/models/course/course-model/course-model";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  validateForm!: FormGroup;
  Cour!: CourseModel;
  submitForm(data: any): void {

    if ( data.titre!=null &&  data.Descption!=null && data.image!=null){
      console.log(data);
      this.Cour= {
        id : 0,
        image: data.image,
        parcoursId:0,
        sections:[],
        title:data.titre,
        description : data.Descption,
      }


    }

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

}

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      titre: [null, [Validators.required]],
      Descption: [null, [Validators.required]],
      image: [null,[Validators.required]]

    });
  }




}
