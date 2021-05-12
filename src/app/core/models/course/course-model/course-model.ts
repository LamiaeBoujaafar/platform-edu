import {SectionModel} from '../section-model/section-model';
import {ParcoursModel} from '../parcours-model/parcours-model';

export class CourseModel {
  id !:number;
  title !:string;
  description!:string;
  image: string | null | undefined;
  parcoursId!:number;
  sections!:SectionModel[];

}
