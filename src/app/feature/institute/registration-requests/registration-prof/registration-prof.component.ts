import { Component, OnInit } from '@angular/core';
import {InstituteService} from '../../../../core/services/institute-service/institute.service';
import {ProfRequestService} from '../../../../core/services/prof-request-service/prof-request.service';




@Component({
  selector: 'app-registration-prof',
  templateUrl: './registration-prof.component.html',
  styleUrls: ['./registration-prof.component.css']
})
export class RegistrationProfComponent implements OnInit {

  listProfRquest:any[]=[]


  constructor(private instituteService:InstituteService,private profRequesteService:ProfRequestService) { }

  ngOnInit(): void {

      this.getAllRequest()
  }
  getAllRequest() {
    this.profRequesteService.getAllProfRequest(this.instituteService.intitute.id).subscribe(data => {
        this.listProfRquest=data
        console.log(this.listProfRquest)
      }
    );

  }

  saveRequeste(idRequeste: number) {
    this.profRequesteService.approveRequest(idRequeste).subscribe(data => {
      if (data == 1) {
        alert('Prof saved');
        window.location.reload()
        this.getAllRequest()
      } else {
        alert("Error")
        console.log(data)
      }
    });
  }


  deleteRow(id: number): void {
    // @ts-ignore
    this.listOfParentData = this.listOfParentData.filter(d => d.id !== id);
  }


}

