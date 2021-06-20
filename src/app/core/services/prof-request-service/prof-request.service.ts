import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {InstituteModel} from '../../models/institute/institute-model';
import {ProfRequestModel} from '../../models/prof-requeste-model/prof-request-model.model';

@Injectable({
  providedIn: 'root'
})
export class ProfRequestService {

  constructor(private http: HttpClient) { }

    getAllProfRequest(idInstitute: number | undefined) :Observable<any[]>{
    let host = environment.hostProfRequest;
    return this.http.get<any[]>(host+"instituteId/"+idInstitute)
  }

  approveRequest(idRequeste: number | undefined) {
    let host = environment.hostProfRequest;
    return this.http.get(host+"saveApproved/"+idRequeste)
  }

}
