import {CourseModel} from '../course-model/course-model';

export class StudentCourseModel {
  id!:number;
  numberValidSection!:number;
  numberInvalidSection!:number;
  numberRemainingSection!:number;
  validParcours!:boolean;
  course!:CourseModel;
  studentId!:number;

}
