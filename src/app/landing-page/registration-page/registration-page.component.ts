import { Component, OnInit } from '@angular/core';
import {InstituteService} from '../../core/services/institute-service/institute.service';
import {ProfRequestService} from '../../core/services/prof-request-service/prof-request.service';
import {ProfRequestModel} from '../../core/models/prof-requeste-model/prof-request-model.model';
import {InstituteModel} from '../../core/models/institute/institute-model';
import {ParcoursModel} from '../../core/models/course/parcours-model/parcours-model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  test: Date = new Date();
  focus:boolean=false;
  focus1:boolean=false;
  focus2:boolean=false;

  request:ProfRequestModel={}
  institueId?:number
  parcourId?:number
  listInstitutes : InstituteModel[] = [];
  listParcous : ParcoursModel[] = [];
  constructor(private profRequestService:ProfRequestService,private instituteService:InstituteService) { }

  ngOnInit(): void {
    this.getIntitutes()
  }

  getIntitutes() {
    this.instituteService.getInstitutes().subscribe(data=> {
      this.listInstitutes = data;
      console.log(this.listInstitutes);
      this.listInstitutes.forEach(value => {
        console.log(value.etudiantVos)
      })
    })
  }

  getParcours() {
    this.instituteService.getParcoursByInstitute(this.institueId).subscribe(data => {
      this.listParcous=data
    });
  }

  register() {
   console.log(this.request)
   console.log(this.institueId)
   console.log(this.parcourId)

  }
}
