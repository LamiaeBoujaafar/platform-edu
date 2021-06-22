import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InstituteModel} from '../../models/institute/institute-model';
import {environment} from '../../../../environments/environment';
import {ParcourModel} from '../../models/parcour-model/parcour-model.model';

@Injectable({
  providedIn: 'root'
})
export class ParcourService {

  constructor(private http: HttpClient) { }

  saveParcour(parcour: ParcourModel, idInstitute: number | undefined) {
    let host = environment.hostAdmin;
    return this.http.post(host+"saveParcour/instituteId/"+idInstitute, parcour);
  }
}
