import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {InstituteModel} from '../../models/institute/institute-model';
import {ProfRequestModel} from '../../models/prof-requeste-model/prof-request-model.model';
import {StudentRequest} from '../../models/student-request/student-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProfRequestService {

  constructor(private http: HttpClient) { }

    getAllProfRequest(idInstitute: number | undefined) :Observable<any[]>{
    let host = environment.hostProfRequest;
      const jwt =localStorage.getItem('JWT')
      console.log(jwt);
      const headers= {
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+jwt,
      }
    return this.http.get<any[]>(host+"instituteId/"+idInstitute,{headers})
  }

  approveRequest(idRequeste: number | undefined) {
    let host = environment.hostProfRequest;
    return this.http.get(host+"saveApproved/"+idRequeste)
  }

  saveRequeste(requeste: ProfRequestModel, idInstitute: number | undefined, idParcour: number | undefined) {
    let host = environment.hostProfRequest;
    return this.http.post(host+"instituteId/"+idInstitute+"/parcourId/"+idParcour, requeste);
  }

}
