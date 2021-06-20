import {InstituteModel} from '../institute/institute-model';
import {StudentModel} from '../student-model/student-model';
import {ProfModel} from '../prof-model/prof-model.model';

export class ParcourModel {
  id?:number;
  title?: string;
  description?: string;
  dateCreation?: string;
  instituteVo?: InstituteModel;
  etudiantVos?: StudentModel[];
  profVos?:ProfModel[]

}

