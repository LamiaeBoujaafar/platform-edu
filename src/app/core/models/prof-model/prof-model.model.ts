import {InstituteModel} from '../institute/institute-model';
import {ParcourModel} from '../parcour-model/parcour-model.model';

export class ProfModel {
  id?:number;
  email?:string;
  login?:string;
  password?:string;
  sex?:string;
  telephone?:string;
  nom?:string;
  prenom?:string;
  parcourVo?:ParcourModel;
  instituteVo?:InstituteModel;
}
