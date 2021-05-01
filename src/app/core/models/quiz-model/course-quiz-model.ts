import {ChapterModel} from '../chapter-model/chapter-model';
import {QuizModel} from './quiz-model';
import {CourseModel} from '../course-model/course-model';

export class CourseQuizModel {
  course!:CourseModel;
  quizzes!:QuizModel[];

}
