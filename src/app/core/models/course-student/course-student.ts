import {CourseModel} from '../course/course-model/course-model';
import {StudentModule} from '../../../feature/student/student.module';

export class CourseStudent {
  id!:number;
  nombreSectionValide!:number;
  nombreSectionNonValide!:number;
  cours!:CourseModel;
  etudiant!:StudentModule;
}
