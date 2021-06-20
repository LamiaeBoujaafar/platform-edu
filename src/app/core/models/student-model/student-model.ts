import {InstituteModel} from '../institute/institute-model';
import {ParcourModel} from '../parcour-model/parcour-model.model';

export class StudentModel {
  id?:number;
  telephone?:string;
  nom?:string;
  prenom?:string;
  email?:string;
  login?:string;
  password?:string;
  sex?:string;
  parcourVo?:ParcourModel;
  instituteVo?:InstituteModel;
}
