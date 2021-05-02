import { Component, OnInit } from '@angular/core';
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-show-course-student-progress',
  templateUrl: './show-course-student-progress.component.html',
  styleUrls: ['./show-course-student-progress.component.css']
})
export class ShowCourseStudentProgressComponent implements OnInit {
  EtudiantCours = [];
  cour:any;

  constructor() { }

  ngOnInit(): void {
    this.cour=[

      {
        titre : "php",
        Descption: "php coure",
        image: "imageX"
      },


    ];
    this.EtudiantCours = [

    ];
    console.log(this.cour[0].titre);
  }

}
