import {SectionModel} from '../section-model/section-model';
import {Prof} from '../prof-model/prof';

export class Course {
  id !:number;
  title !:string;
  description!:string;
  image: string | null | undefined;
  parcoursId!:number;
  section!:Array<SectionModel>;
  prof !:Prof | null;
  constructor() {
    this.section = new Array<SectionModel>()
  }
}
