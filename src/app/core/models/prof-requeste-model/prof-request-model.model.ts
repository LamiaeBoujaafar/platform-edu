import {ParcourModel} from '../parcour-model/parcour-model.model';
import {InstituteModel} from '../institute/institute-model';

export class ProfRequestModel {
  id?:number;
  email?:string;
  login?:string;
  password?:string;
  sex?:string;
  telephone?:string;
  nom?:string;
  prenom?:string;
  cv?:string;
  etat?:boolean;
  parcours?:any;
  institute?:any;
}
