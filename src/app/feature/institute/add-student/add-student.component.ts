import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {InstituteService} from '../../../core/services/institute-service/institute.service';
import {ParcourModel} from '../../../core/models/parcour-model/parcour-model.model';
import {ProfModel} from '../../../core/models/prof-model/prof-model.model';
import {InstituteModel} from '../../../core/models/institute/institute-model';
import {StudentModel} from '../../../core/models/student-model/student-model';
import {StudentService} from '../../../core/services/Student-service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  validateForm!: FormGroup;
  listParcours?:ParcourModel[] |null
  institue:InstituteModel={}
  studentCreate:StudentModel={}

  constructor(private fb: FormBuilder,private message: NzMessageService,private instituteService:InstituteService,private studentService:StudentService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      prenom:[null, [Validators.required]],
      nom:[null, [Validators.required]],
      telephone:[null, [Validators.required]],
      login:[null, [Validators.required]],
      password:[null, [Validators.required]],
      sex:[null, [Validators.required]],
      parcour:[null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      checkEmail: [null, [Validators.required, this.confirmationValidator]],
    });
    this.institue=this.instituteService.intitute
    this.listParcours=this.instituteService.intitute.parcourVos
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm?.invalid) {
      return
    }
    this.studentCreate.nom=this.validateForm.controls.nom.value
    this.studentCreate.prenom=this.validateForm.controls.prenom.value
    this.studentCreate.email=this.validateForm.controls.email.value
    this.studentCreate.login=this.validateForm.controls.login.value
    this.studentCreate.password=this.validateForm.controls.password.value
    this.studentCreate.sex=this.validateForm.controls.sex.value
    this.studentCreate.telephone=this.validateForm.controls.telephone.value

    this.studentService.saveStudent(this.studentCreate, this.institue.id, this.validateForm.controls.parcour.value).subscribe(data => {
      if (data == 1) {
        alert('success');
        window.location.reload()
      }else if (data==-2) {
        alert('Le est deja existe');
      } else {
        alert('error');
      }
    });

  }



  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.email.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }


}
