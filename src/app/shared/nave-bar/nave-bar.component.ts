import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-nave-bar',
  templateUrl: './nave-bar.component.html',
  styleUrls: ['./nave-bar.component.css']
})
export class NaveBarComponent implements OnInit {
  public isCollapsed = true;
  private lastPoppedUrl?: string="";
  private yScrollStack?: number[] = [];
  constructor(public location: Location, private router: Router) { }

  ngOnInit(): void {

  }

}
