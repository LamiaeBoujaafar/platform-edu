import {CourseModel} from '../../course/course-model/course-model';
import {QuestionModel} from '../question-model/question-model';

export class QuizParcoursModel {
  id!:number;
  numberQuestions!:number;
  estimatedDuration!:number;
  // course!:CourseModel;
  questions!:QuestionModel[];
}
