import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import {InstituteService} from '../../../core/services/institute-service/institute.service';
import {InstituteModel} from '../../../core/models/institute/institute-model';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {

  validateForm!: FormGroup;
  MyFom!: FormGroup;
  institeCreate:InstituteModel={}
  constructor(private fb: FormBuilder,private instituteService:InstituteService) { }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+212'],
      phoneNumber: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
    this.MyFom = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      title: [null, [Validators.required]],
      login: [null, [Validators.required]],
      telephone: [null, [Validators.required]]
    });


  }

  submitForm() {
    for (const i in this.MyFom.controls) {
      this.MyFom.controls[i].markAsDirty();
      this.MyFom.controls[i].updateValueAndValidity();
    }
    if (this.MyFom?.invalid) {
      return
    }

    this.institeCreate.email = this.MyFom.controls.email.value;
    this.institeCreate.password = this.MyFom.controls.password.value;
    this.institeCreate.title = this.MyFom.controls.title.value;
    this.institeCreate.login = this.MyFom.controls.login.value;
    this.institeCreate.telephone = this.MyFom.controls.telephone.value;


    this.instituteService.saveInstite(this.institeCreate).subscribe(data=>{
      if (data == 1) {
        alert('success');
        this.MyFom.reset();
      } else {
        alert('erroor');
      }
    })
  }


}
