import {Injectable} from '@angular/core';
import {CourseModel} from '../../models/course/course-model/course-model';
import {ParcoursModel} from '../../models/course/parcours-model/parcours-model';
import {SectionModel} from '../../models/course/section-model/section-model';
import {StudentModule} from '../../../feature/student/student.module';
import {CourseStudent} from '../../models/course-student/course-student';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ProfDashboardModel} from "../../models/ProfDashboard/ProfDashboard-model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) {}
  host=environment.host

  SaveCoure(idParcour: any,profid:any, data: any):Observable<any>{

    let host=environment.host
    return  this.http.post<any>(host+"cours/save/parcour/"+idParcour+"/prof/"+profid,data)
  }

  GetCoures(id:number):Observable<any[]>{
    let host=environment.host
    return this.http.get<any[]>(host+"cours/prof/"+id)
  }

  SaveSection(coureId: any, data: any):Observable<any>{

    let host=environment.host
    return  this.http.post<any>(host+"section/coure/"+coureId,data)
  }

  GetCouresByParcour(id:number):Observable<any[]>{
    let host=environment.host
    return this.http.get<any[]>(host+"cours/parcour/"+id)
  }
  SaveEtudaintCoure(etudaintcoure:any , coureId: any, data: any):Observable<any>{

    let host=environment.host
    return  this.http.post<any>(host+"etudaintcoure/save/etudaint/"+etudaintcoure+"/coure/"+coureId,data)
  }
  UpdateEtudaiintCoure(etudaintid:any , coureId: any, data: any):Observable<any>{

    let host=environment.host
    return  this.http.put<any>(host+"etudaintcoure/coure/"+coureId+"/etudaint/"+etudaintid,data)
  }
  GetEtudaintCoures(coureid:number):Observable<any[]>{
    let host=environment.host
    return this.http.get<any[]>(host+"etudaintcoure/coure/"+coureid)
  }
  GetEtudaintCouresByetudaint(idetudaint:number):Observable<any[]>{
    let host=environment.host
    return this.http.get<any[]>(host+"etudaintcoure/etudaint/"+idetudaint)
  }



}
