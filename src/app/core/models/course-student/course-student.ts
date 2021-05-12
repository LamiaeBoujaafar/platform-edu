import {CourseModel} from '../course/course-model/course-model';
import {StudentModule} from '../../../feature/student/student.module';

export class CourseStudent {
  id!:number;
  numberValidSection!:number;
  numberNoValidSection!:number;
  course!:CourseModel;
  student!:StudentModule;
}
