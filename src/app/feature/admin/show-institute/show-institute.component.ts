import { Component, OnInit } from '@angular/core';
import {InstituteModel} from '../../../core/models/institute/institute-model';
import {InstituteService} from '../../../core/services/institute-service/institute.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-institute',
  templateUrl: './show-institute.component.html',
  styleUrls: ['./show-institute.component.css']
})
export class ShowInstituteComponent implements OnInit {
  searchValue = '';
  visible = false;
  listInstitutes: InstituteModel[] = [];
  expandSet = new Set<number>();
  listOfDisplayInstitute: InstituteModel[] = [];
  constructor(private serviceInstitute:InstituteService,private modal: NzModalService,private router : Router) { }
  ngOnInit(): void {
    this.listInstitutes = this.serviceInstitute.getInstitutes();
     this.listOfDisplayInstitute = [...this.listInstitutes];
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }
  search(): void {
    this.visible = false;
    this.listOfDisplayInstitute = this.listInstitutes.filter((item: InstituteModel) => item.libelle.indexOf(this.searchValue) !== -1);
    console.log(this.listOfDisplayInstitute)
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }


  delete(data:InstituteModel) {
    const index = this.listInstitutes.indexOf( data)
    this.modal.confirm({
      nzTitle: 'Are you sure delete this institute?',
      nzContent: '' + data.libelle ,
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.listInstitutes = this.listInstitutes.filter((value)=>{
          return value.id != data.id;
        });
        console.log(this.listInstitutes)
      },
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });

  }

  edit(id:number) {
    console.log("edit id : " + id )
    this.router.navigate(['/dashboard/admin/update-institute',id])

  }
}
