import { Component, OnInit } from '@angular/core';

interface ParentItemData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cv: string;
  createdAt: string;
}



@Component({
  selector: 'app-registration-prof',
  templateUrl: './registration-prof.component.html',
  styleUrls: ['./registration-prof.component.css']
})
export class RegistrationProfComponent implements OnInit {
  listOfParentData: ParentItemData[] = [];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 15; ++i) {
      this.listOfParentData.push({
        id: i,
        firstName: 'Oussama',
        lastName: 'Goumghar',
        email: 'g.oussamaww@gmail.com',
        cv:"https://drive.google.com/file/d/0B4KDctmojhWubGFYdzF4blBSRXY4S29GSGpjcVFlZVFvWi13/view?usp=sharing",
        createdAt: '2014-12-24 23:12:00',
      });
    }

  }


  deleteRow(id: number): void {
    // @ts-ignore
    this.listOfParentData = this.listOfParentData.filter(d => d.id !== id);
  }

  displayAlert() {
    alert("Prof approved")
  }
}

