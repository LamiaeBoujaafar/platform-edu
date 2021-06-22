import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfModel} from '../../models/prof-model/prof-model.model';
import {environment} from '../../../../environments/environment';
import {StudentModel} from '../../models/student-model/student-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student:StudentModel={}

  constructor(private http: HttpClient) {
  }
  saveStudent(student: StudentModel, idInstitute: number | undefined, idParcour: number) {
    let host = environment.hostInstitute;
    const jwt =localStorage.getItem('JWT')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,
    }
    return this.http.post(host+"saveEtudiant/instituteId/"+idInstitute+"/parcourId/"+idParcour,student,{headers})
  }

  getProfLoged(): Observable<any> {
    let host = environment.hostStudent;
    const jwt =localStorage.getItem('JWT')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,
    }
    return this.http.get<any>(host+"me", {headers})
  }

  deleteStudent(id: number | undefined) {
    let host = environment.hostStudent;
    return this.http.delete(host+id)
  }
}
