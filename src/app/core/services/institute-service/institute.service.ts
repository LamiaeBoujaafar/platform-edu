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
    let host = environment.hostInstitute;
    return this.http.get<InstituteModel[]>(host);
  }

  getParcoursByInstitute(id: number | undefined): Observable<ParcoursModel[]> {
    let host = environment.hostParcour;
    return this.http.get<ParcoursModel[]>(host+"instituteId/"+id)
  }

  getInstitutesById(id: number | undefined): Observable<InstituteModel> {
    let host = environment.hostInstitute;
    return this.http.get<InstituteModel>(host+id)
  }

  login(login: string,password:string): Observable<InstituteModel> {
    let host = environment.hostInstitute;
    return this.http.get<InstituteModel>(host+"login/"+login+"/password/"+password)
  }

  saveInstite(institue: InstituteModel) {
    let host = environment.hostInstitute;
    return this.http.post(host, institue);
  }

  daleteInstitute(id: number | undefined) {
    let host = environment.hostInstitute;
    return this.http.delete(host+id)
  }
  updateInstite(id: number | undefined,institue: InstituteModel) {
    let host = environment.hostInstitute;
    return this.http.put(host+id,institue)
  }




}
