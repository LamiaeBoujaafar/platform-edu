import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfModel} from '../../models/prof-model/prof-model.model';
import {environment} from '../../../../environments/environment';
import {StudentModel} from '../../models/student-model/student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }
  saveStudent(student: StudentModel, idInstitute: number | undefined, idParcour: number) {
    let host = environment.hostStudent;
    return this.http.post(host+"instituteId/"+idInstitute+"/parcourId/"+idParcour,student)
  }

  deleteStudent(id: number | undefined) {
    let host = environment.hostStudent;
    return this.http.delete(host+id)
  }
}
