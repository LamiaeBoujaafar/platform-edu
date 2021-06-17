import {ParcoursModel} from '../course/parcours-model/parcours-model';

export class Etudiant {
  id!:number;
  dateNaissance!:string;
  telephone!:string;
  prenom!:string;
  nom!:string;
  email!:string;
  login!:string;
  password!:string;
  sexe!:string;
  parcours !:ParcoursModel | null;
  cv !: String;
}
