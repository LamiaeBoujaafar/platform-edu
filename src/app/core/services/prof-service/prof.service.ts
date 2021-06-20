import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfModel} from '../../models/prof-model/prof-model.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http: HttpClient) { }

  saveProf(prof: ProfModel, idInstitute: number | undefined, idParcour: number) {
    let host = environment.hostProf;
    return this.http.post(host+"instituteId/"+idInstitute+"/parcourId/"+idParcour,prof)
  }

  deleteProf(id: number | undefined) {
    let host = environment.hostProf;
    return this.http.delete(host+id)
  }
}
