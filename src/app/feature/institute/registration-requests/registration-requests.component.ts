import { Component, OnInit } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {InstituteService} from '../../../core/services/institute-service/institute.service';
import {ProfRequestService} from '../../../core/services/prof-request-service/prof-request.service';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  constructor(private instituteService:InstituteService,private profRequesteService:ProfRequestService) { }

  ngOnInit(): void {



  }



}
