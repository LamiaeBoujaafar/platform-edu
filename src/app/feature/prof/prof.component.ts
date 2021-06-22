import { Component, OnInit } from '@angular/core';
import {ProfService} from '../../core/services/prof-service/prof.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {
  isCollapsed = false;

  constructor(private profService:ProfService) { }

  ngOnInit(): void {
    this.getProf()
  }

  getProf() {
    this.profService.getProfLoged().subscribe(data => {
      this.profService.prof=data
      console.log(data)
    });
  }


}
