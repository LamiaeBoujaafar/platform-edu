import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {StudentRequest} from '../../models/student-request/student-request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentRequestService {

  constructor(private http: HttpClient) { }

  getAllStudentRequest(idInstitute: number | undefined) :Observable<any[]>{
    let host = environment.hostStudentRequest;
    const jwt =localStorage.getItem('JWT')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,
    }
    return this.http.get<any[]>(host+"instituteId/"+idInstitute,{headers})
  }

  approveRequest(idRequeste: number | undefined) {
    let host = environment.hostStudentRequest;
    return this.http.get(host+"saveApproved/"+idRequeste)
  }

  saveRequeste(requeste: StudentRequest, idInstitute: number | undefined, idParcour: number | undefined) {
    let host = environment.hostStudentRequest;
    return this.http.post(host+"instituteId/"+idInstitute+"/parcourId/"+idParcour, requeste);
  }
}
