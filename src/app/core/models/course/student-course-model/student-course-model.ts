import {CourseModel} from '../course-model/course-model';
import {SectionModel} from "../section-model/section-model";
import {StudentModel} from "../../student-model/student-model";

export class StudentCourseModel {
  id!:number;
  numberValidSection!:number;
  numberInvalidSection!:number;
  numberRemainingSection!:number;
  validParcours!:boolean;
  course!:CourseModel;
  student!:StudentModel;

}
