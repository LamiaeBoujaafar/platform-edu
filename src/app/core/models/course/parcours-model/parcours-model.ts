import {CourseModel} from '../course-model/course-model';

export class ParcoursModel {
  id!:number;
  title !:string;
  description!:string;
  courses!:CourseModel[];
}

