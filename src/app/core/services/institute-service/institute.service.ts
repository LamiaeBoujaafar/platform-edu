import { Injectable } from '@angular/core';
import {InstituteModel} from '../../models/institute/institute-model';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
 intitutes:InstituteModel[] = [{
   id:1,
  phone:'0658963214',
  image:'image',
  login:'login',
  email:'email',
  password:'password',
  libelle:'institute1',
  description:'Un institut est une organisation permanente créée dans un certain but. C\'est habituellement une institution de recherche, une société savante, un établissement d\'enseignement supérieur indépendant ou annexé à une faculté',
 },{
   id:2,
   phone:'065896324',
   image:'image2',
   login:'login2',
   email:'email2',
   password:'password2',
   libelle:'institute2',
   description:'Un institut est une organisation permanente créée dans un certain but. C\'est habituellement une institution de recherche, une société savante, un établissement d\'enseignement supérieur indépendant ou annexé à une faculté',
 },{
   id:3,
   phone:'0658968814',
   image:'image3',
   login:'login3',
   email:'email3',
   password:'password3',
   libelle:'institute3',
   description:'Un institut est une organisation permanente créée dans un certain but. C\'est habituellement une institution de recherche, une société savante, un établissement d\'enseignement supérieur indépendant ou annexé à une faculté',
 }]
  constructor() { }
  getInstitutes(){
   return this.intitutes;
  }
}
