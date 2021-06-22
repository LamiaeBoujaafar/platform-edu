import { Component, OnInit } from '@angular/core';
import {InstituteService} from '../../core/services/institute-service/institute.service';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth-service/auth.service';

@Component({
  selector: 'app-login-institute-page',
  templateUrl: './login-institute-page.component.html',
  styleUrls: ['./login-institute-page.component.css']
})
export class LoginInstitutePageComponent implements OnInit {

  focus:boolean=false;
  focus1:boolean=false;

  loginn:string=""
  password:string=""
  constructor(private authService:AuthService,private router : Router) { }

  ngOnInit(): void {
  }


  login() {
    if (this.loginn == 'admin' && this.password == 'admin') {
      this.router.navigate(['/dashboard/admin/show-institute']);
    } else {
      this.authService.login(this.loginn, this.password).subscribe(data => {
        if (data) {
          console.log(data);
          localStorage.setItem('JWT',data.token)
          if(data.userType==="INSTITUTE"){
            this.router.navigate(['/dashboard/institute/add-student'])
          }else if(data.userType==="ETUDIANT"){
            this.router.navigate(['/dashboard/student/show-course'])
          }else{
            this.router.navigate(['/dashboard/prof/dashboard'])
          }
        } else {
          console.log(data)
          alert("Error")
        }
      });
    }

  }

  back() {
    this.router.navigate(['/landing']);
  }
}
