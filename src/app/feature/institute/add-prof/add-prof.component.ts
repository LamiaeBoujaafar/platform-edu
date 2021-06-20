import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NzFormTooltipIcon} from "ng-zorro-antd/form";
import {NzMessageService} from "ng-zorro-antd/message";
import {ParcourModel} from '../../../core/models/parcour-model/parcour-model.model';
import {InstitutComponent} from '../institute.component';
import {InstituteService} from '../../../core/services/institute-service/institute.service';
import {ProfService} from '../../../core/services/prof-service/prof.service';
import {ProfModel} from '../../../core/models/prof-model/prof-model.model';
import {InstituteModel} from '../../../core/models/institute/institute-model';

@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.component.html',
  styleUrls: ['./add-prof.component.css']
})
export class AddProfComponent implements OnInit{

  validateForm!: FormGroup;
  listParcours?:ParcourModel[] |null
  profCreate:ProfModel={}
  institue:InstituteModel={}

  constructor(private fb: FormBuilder,private message: NzMessageService,private instituteService:InstituteService,private profService:ProfService) {}

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
    console.log(this.institue)
  }




  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm?.invalid) {
      return
    }

    this.profCreate.nom=this.validateForm.controls.nom.value
    this.profCreate.prenom=this.validateForm.controls.prenom.value
    this.profCreate.email=this.validateForm.controls.email.value
    this.profCreate.login=this.validateForm.controls.login.value
    this.profCreate.password=this.validateForm.controls.password.value
    this.profCreate.sex=this.validateForm.controls.sex.value
    this.profCreate.telephone=this.validateForm.controls.telephone.value

    this.profService.saveProf(this.profCreate, this.institue.id, this.validateForm.controls.parcour.value).subscribe(data => {
      if (data == 1) {
        alert('success');
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
