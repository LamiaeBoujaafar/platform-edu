import { Component, OnInit } from '@angular/core';
import {InstituteService} from '../../../../core/services/institute-service/institute.service';
import {ProfService} from '../../../../core/services/prof-service/prof.service';
import {ProfModel} from '../../../../core/models/prof-model/prof-model.model';

@Component({
  selector: 'app-prof-profile',
  templateUrl: './prof-profile.component.html',
  styleUrls: ['./prof-profile.component.css']
})
export class ProfProfileComponent implements OnInit {

  listProfs:ProfModel[]=[]
  constructor(private instituteService:InstituteService,private profService:ProfService) { }

  ngOnInit(): void {
    this.getProfs()
  }

  getProfs() {
    if (this.instituteService.intitute.profVos) {
      this.listProfs=this.instituteService.intitute.profVos;
    }

  }
  delete(id:number | undefined) {
    console.log(id)
    this.profService.deleteProf(id).subscribe(data => {
      if (data == 1) {
        this.getProfs();
        alert('success');
      } else {
        alert("Error")
      }
    });
  }

}
