import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {InstituteService} from '../../../core/services/institute-service/institute.service';
import {InstituteModel} from '../../../core/models/institute/institute-model';

@Component({
  selector: 'app-update-institute',
  templateUrl: './update-institute.component.html',
  styleUrls: ['./update-institute.component.css']
})
export class UpdateInstituteComponent implements OnInit {

  validateForm!: FormGroup;
  institeSelected:InstituteModel={}
  id!:number;
  MyFom!: FormGroup;
  constructor(private fb: FormBuilder,private  router : ActivatedRoute,private instituteService:InstituteService,private router2 : Router) { }

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
    this.getInstitute()

  }

  getInstitute() {
    this.id = this.router.snapshot.params['id']
    console.log("the id is " + this.id)
    this.instituteService.getInstitutesById(this.id).subscribe(data => {
      this.institeSelected = data;
      this.MyFom = this.fb.group({
        email: [this.institeSelected.email, [Validators.email, Validators.required]],
        password: [this.institeSelected.password, [Validators.required]],
        title: [this.institeSelected.title, [Validators.required]],
        login: [this.institeSelected.login, [Validators.required]],
        telephone: [this.institeSelected.telephone, [Validators.required]]
      });
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

    this.institeSelected.email = this.MyFom.controls.email.value;
    this.institeSelected.password = this.MyFom.controls.password.value;
    this.institeSelected.title = this.MyFom.controls.title.value;
    this.institeSelected.login = this.MyFom.controls.login.value;
    this.institeSelected.telephone = this.MyFom.controls.telephone.value;

    this.instituteService.updateInstite(this.id,this.institeSelected).subscribe(data=>{
      if (data==1) {
        alert("success")
        this.router2.navigate(['/dashboard/admin/show-institute'])
      }
    })
  }
}
