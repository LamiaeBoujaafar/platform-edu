import {CourseModel} from '../course/course-model/course-model';
import {StudentModule} from '../../../feature/student/student.module';
import {Course} from '../course/course-model/course';
import {Etudiant} from '../etudiantTest/etudiant';

export class EtudiantCours {
  id!:number;
  nombreSectionValide!:number;
  nombreSectionNonValide!:number;
  numberRemainingSection!:number;
  validCours!:boolean;
  cours!:Course |null;
  etudiant!:Etudiant |null;
}
