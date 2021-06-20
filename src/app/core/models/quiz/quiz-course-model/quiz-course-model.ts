import {CourseModel} from '../../course/course-model/course-model';
import {QuestionModel} from '../question-model/question-model';

export class QuizCourseModel {
  idquiz!:number;
  numberquestions!:number;
  questions!:QuestionModel[];
  coure!:CourseModel;

}
