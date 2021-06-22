import { Component, OnInit } from '@angular/core';
import {InstituteService} from '../../../../core/services/institute-service/institute.service';
import {StudentRequestService} from '../../../../core/services/student-request-service/student-request.service';


@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css']
})
export class RegistrationStudentComponent implements OnInit {

  listStudentRquest:any[]=[]

  constructor(private instituteService:InstituteService,private studentRequestService:StudentRequestService) { }

  ngOnInit(): void {

    this.getAllRequest()

  }
  getAllRequest() {
    this.studentRequestService.getAllStudentRequest(this.instituteService.intitute.id).subscribe(data => {
        this.listStudentRquest=data
        console.log(this.listStudentRquest)
      }
    );

  }

  saveRequeste(idRequeste: number) {
    this.studentRequestService.approveRequest(idRequeste).subscribe(data => {
      if (data == 1) {
        alert('Student saved');
        window.location.reload()
        this.getAllRequest()
      } else {
        alert("Error")
        console.log(data)
      }
    });
  }




}
