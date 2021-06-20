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
  email:'elHiba@gmail.com',
  password:'password',
  libelle:'El Hiba',
  description:'Un institut est une organisation permanente créée dans un certain but. C\'est habituellement une institution de recherche, une société savante, un établissement d\'enseignement supérieur indépendant ou annexé à une faculté',
 },{
   id:2,
   phone:'065896324',
   image:'image2',
   login:'login2',
   email:'elKalam@gmail.com',
   password:'password2',
   libelle:'El KALAM',
   description:'An institute is a permanent organization created for a certain purpose. It is usually a research institution, a learned society, an independent higher education establishment or attached to a faculty.',
 },{
   id:3,
   phone:'0658968814',
   image:'image3',
   login:'login3',
   email:'englishInst@gmail.com',
   password:'password3',
   libelle:'englishInst',
   description:'Un institut est une organisation permanente créée dans un certain but. C\'est habituellement une institution de recherche, une société savante, un établissement d\'enseignement supérieur indépendant ou annexé à une faculté',
 }]
  constructor() { }
  getInstitutes(){
   return this.intitutes;
  }
}
