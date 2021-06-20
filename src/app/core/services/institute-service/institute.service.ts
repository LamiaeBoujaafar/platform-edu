import {Injectable} from '@angular/core';
import {InstituteModel} from '../../models/institute/institute-model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

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

  getInstitutesById(id: number | undefined): Observable<InstituteModel> {
    let host = environment.hostInstitute;
    return this.http.get<InstituteModel>(host+id)
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
