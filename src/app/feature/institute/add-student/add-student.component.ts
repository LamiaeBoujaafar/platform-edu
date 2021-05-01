import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName:[null, [Validators.required]],
      lastName:[null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      checkEmail: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log("email=="+this.validateForm.controls.email.value);
  }

  // updateConfirmValidator(): void {
  //   /** wait for refresh value */
  //   Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  // }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.email.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


}
