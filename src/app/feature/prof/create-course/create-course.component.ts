import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseModel} from "../../../core/models/course/course-model/course-model";
import {CourseService} from "../../../core/services/course-service/course.service";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  validateForm!: FormGroup;
  Cour!: CourseModel;
  Coure:any ;
  saved :any;
  submitForm(data: any): void {

    if ( data.titre!=null &&  data.Descption!=null){
      console.log(data);

      this.Coure={
        title:data.titre,
        description:data.Descption ,

      }

      this.onSaveCour(1,1,this.Coure) ;


    }

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

}

  constructor(private fb: FormBuilder , private courseService:CourseService ) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      titre: [null, [Validators.required]],
      Descption: [null, [Validators.required]],

    });
  }


  onSaveCour(idparcour:number ,profid:number, data:any) {
    this.courseService.SaveCoure(idparcour, profid, data).subscribe(data => {
      this.saved = data;
      this.validateForm.reset();
      window.location.reload();
      alert('succsess')
    })


  }
  }
