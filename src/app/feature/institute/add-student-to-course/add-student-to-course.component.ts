import { Component, OnInit } from '@angular/core';
import {NzButtonSize} from "ng-zorro-antd/button";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseModel} from '../../../core/models/course/course-model/course-model';
import {CourseService} from '../../../core/services/course-service/course.service';
import {ParcourService} from '../../../core/services/parcour-service/parcour.service';
import {ParcourModel} from '../../../core/models/parcour-model/parcour-model.model';
import {InstituteService} from '../../../core/services/institute-service/institute.service';
interface ItemData {
  id: string;
  etudiant: string;
  parcour: string;
  cour: string;
}

@Component({
  selector: 'app-add-student-to-course',
  templateUrl: './add-student-to-course.component.html',
  styleUrls: ['./add-student-to-course.component.css']
})
export class AddStudentToCourseComponent implements OnInit {
  validateForm!: FormGroup;
  Cour!: CourseModel;
  parcour:ParcourModel={}
  Coure:any ;
  saved :any;
  submitForm(data: any): void {

    if ( data.titre!=null &&  data.Descption!=null){
      console.log(data);

     this.parcour.title=data.titre
      this.parcour.description=data.Descption

      this.parcourService.saveParcour(this.parcour, this.instituteService.intitute.id).subscribe(data => {
        if (data == 1) {
          alert('Success');
          window.location.reload();
        } else {
          alert('Error');
        }
      });

    }

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  }

  constructor(private fb: FormBuilder , private courseService:CourseService ,private parcourService:ParcourService,private instituteService:InstituteService) {

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
