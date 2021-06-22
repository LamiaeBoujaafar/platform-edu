import {Injectable} from '@angular/core';
import {CourseModel} from '../../models/course/course-model/course-model';
import {ParcoursModel} from '../../models/course/parcours-model/parcours-model';
import {SectionModel} from '../../models/course/section-model/section-model';
import {StudentModule} from '../../../feature/student/student.module';
import {CourseStudent} from '../../models/course-student/course-student';
import {Observable} from "rxjs";
import {QuizCourseModel} from "../../models/quiz/quiz-course-model/quiz-course-model";
import {environment} from "../../../../environments/environment";
import {CourseService} from "../course-service/course.service";
import {HttpClient} from "@angular/common/http";
import {ProfDashboardModel} from "../../models/ProfDashboard/ProfDashboard-model";
import {ProfModel} from '../../models/prof-model/prof-model.model';
import {StudentModel} from '../../models/student-model/student-model';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  prof:ProfModel={}

  constructor(private http:HttpClient) {

  }
  host=environment.host

  GetDashbord(idprof:number,idparcour:number):Observable<ProfDashboardModel >{
    let host=environment.host
    return this.http.get<ProfDashboardModel>(host+"prof/dashbord/"+this.prof.id+"/parcour/"+this.prof.parcourVo?.id)
  }
  GetEtudaints(idparcour:number):StudentModel[] | undefined{

    return this.prof.parcourVo?.etudiantVos
  }

  saveProf(prof: ProfModel, idInstitute: number | undefined, idParcour: number) {
    let host = environment.hostInstitute;
    const jwt =localStorage.getItem('JWT')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,
    }
    return this.http.post(host+"saveProf/instituteId/"+idInstitute+"/parcourId/"+idParcour,prof,{headers})
  }

  deleteProf(id: number | undefined) {
    let host = environment.hostProf;
    return this.http.delete(host+id)
  }

  getProfLoged(): Observable<any> {
    let host = environment.hostProf;
    const jwt =localStorage.getItem('JWT')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,
    }
    return this.http.get<any>(host+"me", {headers})
  }
}
