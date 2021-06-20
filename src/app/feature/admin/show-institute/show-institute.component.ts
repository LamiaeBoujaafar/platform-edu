import { Component, OnInit } from '@angular/core';
import {InstituteModel} from '../../../core/models/institute/institute-model';
import {InstituteService} from '../../../core/services/institute-service/institute.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-show-institute',
  templateUrl: './show-institute.component.html',
  styleUrls: ['./show-institute.component.css']
})
export class ShowInstituteComponent implements OnInit {
  searchValue = '';
  visible = false;
  listInstitutes : InstituteModel[] = [];
  expandSet = new Set<number>();
  listOfDisplayInstitute: InstituteModel[] = [];
  constructor(private serviceInstitute:InstituteService,private modal: NzModalService,private router : Router) { }
  ngOnInit(): void {
   this.getIntitutes()
  }

  getIntitutes() {
    this.serviceInstitute.getInstitutes().subscribe(data=> {
      this.listInstitutes = data;
      console.log(this.listInstitutes);
      this.listInstitutes.forEach(value => {
        console.log(value.etudiantVos)
      })
    })
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }



  search(): void {

  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }


  delete(data:InstituteModel) {
    this.serviceInstitute.daleteInstitute(data.id).subscribe(data => {
      if (data == 1) {
        this.getIntitutes();
      } else {
        alert("error!!")
      }
    });
  }

  edit(data:InstituteModel) {
    console.log("edit id : " + data.id )
    this.router.navigate(['/dashboard/admin/update-institute',data.id])

  }
}
