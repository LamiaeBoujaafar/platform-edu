import {Injectable} from '@angular/core';
import {InstituteModel} from '../../models/institute/institute-model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {ParcoursModel} from '../../models/course/parcours-model/parcours-model';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  intitutes: InstituteModel[] = [];
  intitute: InstituteModel= {};

  constructor(private http: HttpClient) {
  }

  getInstitutes():Observable<InstituteModel[]> {
    let host = environment.hostAdmin;
    return this.http.get<InstituteModel[]>(host);
  }

  getParcoursByInstitute(id: number | undefined): Observable<ParcoursModel[]> {
    let host = environment.hostAdmin;
    return this.http.get<ParcoursModel[]>(host+"instituteId/"+id)
  }

  getInstitutesById(id: number | undefined): Observable<InstituteModel> {
    let host = environment.hostAdmin;
    return this.http.get<InstituteModel>(host+id)
  }

  getInstituteLoged(): Observable<any> {
    let host = environment.hostInstitute;
    const jwt =localStorage.getItem('JWT')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,
    }
    return this.http.get<any>(host+"me", {headers})
  }



  saveInstite(institue: InstituteModel) {
    let host = environment.hostAdmin;
    return this.http.post(host, institue);
  }

  daleteInstitute(id: number | undefined) {
    let host = environment.hostAdmin;
    return this.http.delete(host+id)
  }
  updateInstite(id: number | undefined,institue: InstituteModel) {
    let host = environment.hostAdmin;
    return this.http.put(host+id,institue)
  }




}
