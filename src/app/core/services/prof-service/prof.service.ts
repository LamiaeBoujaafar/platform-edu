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

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http:HttpClient) {

  }
  host=environment.host

  GetDashbord(idprof:number,idparcour:number):Observable<ProfDashboardModel >{
    let host=environment.host
    return this.http.get<ProfDashboardModel>(host+"prof/dashbord/"+idprof+"/parcour/"+idparcour)
  }
  GetEtudaints(idparcour:number):Observable<any[]>{
    let host=environment.host
    return this.http.get<any[]>(host+"etudaint/parcour/"+idparcour)
  }

  saveProf(prof: ProfModel, idInstitute: number | undefined, idParcour: number) {
    let host = environment.hostProf;
    return this.http.post(host+"instituteId/"+idInstitute+"/parcourId/"+idParcour,prof)
  }

  deleteProf(id: number | undefined) {
    let host = environment.hostProf;
    return this.http.delete(host+id)
  }
}
