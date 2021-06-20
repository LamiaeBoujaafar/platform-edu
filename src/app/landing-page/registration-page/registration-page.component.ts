import { Component, OnInit } from '@angular/core';
import {InstituteService} from '../../core/services/institute-service/institute.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  focus:boolean=false;
  focus1:boolean=false;

  loginn:string=""
  password:string=""
  constructor(private instituteService:InstituteService) { }

  ngOnInit(): void {
  }


  login() {
    this.instituteService.login(this.loginn, this.password).subscribe(data => {
      if (data) {
        alert('Success');
      } else {
        alert("Error")
      }
    });
  }
}
