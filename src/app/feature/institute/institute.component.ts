import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institut',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstitutComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
