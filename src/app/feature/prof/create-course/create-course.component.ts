import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Course} from '../../../core/models/course/course-model/course';
import {CourseService} from '../../../core/services/course-service/course.service';
import {NzModalService} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  validateForm!: FormGroup;
  course!: Course;

  constructor(private fb: FormBuilder,private courseService :CourseService,private modal: NzModalService) {

  }
  //@ViewChild('myForm', {static: false}) myForm : NgForm
  submitForm(data: any): void {

    if ( data.titre!=null &&  data.Descption!=null ){
      this.course= {
        id : 0,
        image: null,
        parcoursId:10,
        section:[],
        title:data.titre,
        description : data.Descption,
        prof : null
      }
      this.saveCourse();
      this.validateForm.reset();
    }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
}
  saveCourse(){
    this.courseService.postCourse(this.course).subscribe(data => {
      console.log(data)
      this.modal.success({
        nzTitle: 'Add a new course',
        nzContent: 'The course is successfully added'
      });
    });
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      titre: [null, [Validators.required]],
      Descption: [null, [Validators.required]],
      image: [null,[Validators.required]]

    });
  }




}
