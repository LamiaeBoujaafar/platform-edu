import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentRequestService {

  constructor(private http: HttpClient) { }

  getAllStudentRequest(idInstitute: number | undefined) :Observable<any[]>{
    let host = environment.hostStudentRequest;
    return this.http.get<any[]>(host+"instituteId/"+idInstitute)
  }

  approveRequest(idRequeste: number | undefined) {
    let host = environment.hostStudentRequest;
    return this.http.get(host+"saveApproved/"+idRequeste)
  }
}
