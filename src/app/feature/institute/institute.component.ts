import {Component, OnInit} from '@angular/core';
import {InstituteService} from '../../core/services/institute-service/institute.service';


@Component({
  selector: 'app-institut',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstitutComponent implements OnInit {
  isCollapsed = false;


  constructor(private instituteService:InstituteService) { }

  ngOnInit(): void {
    this.getInstitueById()
  }

  getInstitueById() {
    this.instituteService.getInstitutesById(5).subscribe(data => {
      this.instituteService.intitute=data

    });
  }


}
