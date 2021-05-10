import {Component, OnInit} from '@angular/core';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cour: string;
  percentage:number;
}

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  listStudent: Student[] = [
    {
      id: 0,
      firstName: "oussama",
      lastName: "goumghar",
      email: "oussama@gmail.com",
      cour: "Grammer bases",
      percentage:55
    },
    {
      id: 0,
      firstName: "brahim",
      lastName: "Affassi",
      email: "brahim@gmail.com",
      cour: "Grammer advanced",
      percentage:80
    },
    {
      id:0,
      firstName:"Mohamed",
      lastName:"erraji",
      email:"mohamed@gmail.com",
      cour:"Orthograf bases",
      percentage:10
    },
    {
      id:0,
      firstName:"lamiae",
      lastName:"Boujaafar",
      email:"lamiae@gmail.com",
      cour:"Grammar Advanced",
      percentage:20
    },
    {
      id:0,
      firstName:"Amine",
      lastName:"elmeskaoui",
      email:"amine@gmail.com",
      cour:"Pronunciation",
      percentage:100
    },
    {
      id:0,
      firstName:"houssam",
      lastName:"echakiri",
      email:"houssam@gmail.com",
      cour:"Grammer bases",
      percentage:90
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
