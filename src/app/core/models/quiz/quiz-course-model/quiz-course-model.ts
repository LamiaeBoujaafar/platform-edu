import {CourseModel} from '../../course/course-model/course-model';
import {QuestionModel} from '../question-model/question-model';

export class QuizCourseModel {
  id!:number;
  numberQuestions!:number;
  estimatedDuration!:number;
  course!:CourseModel;
  questions!:QuestionModel[];

}
