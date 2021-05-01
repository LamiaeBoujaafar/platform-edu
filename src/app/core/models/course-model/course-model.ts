import {ChapterModel} from '../chapter-model/chapter-model';

export class CourseModel {
  id !:number;
  title !:string;
  chapter!:ChapterModel[];

}
