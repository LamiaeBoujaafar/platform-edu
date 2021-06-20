import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  focus: any;
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
  focus1: any;
  constructor() { }

  ngOnInit(): void {
  }

  fub() {

  }
}
