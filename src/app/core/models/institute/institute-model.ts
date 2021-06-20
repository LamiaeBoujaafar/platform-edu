import {StudentModel} from '../student-model/student-model';
import {ProfModel} from '../prof-model/prof-model.model';
import {ParcourModel} from '../parcour-model/parcour-model.model';

export class InstituteModel {
  id?:number;
  title?:string;
  telephone?:string;
  login?:string;
  email?:string;
  password?:string;
  etudiantVos?:StudentModel[];
  profVos?:ProfModel[];
  parcourVos?:ParcourModel[];

}
