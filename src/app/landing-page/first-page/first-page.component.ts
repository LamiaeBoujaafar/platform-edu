import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  focus: any;
  focus1: any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goLogin() {
    this.router.navigate(['/landing/login']);
  }

  goRegister() {
    this.router.navigate(['/landing/registration']);
  }

}
