import {QuestionModel} from '../question-model/question-model';

export class ResponseQuestionModel {
  id!:number;
  response!:string;
  correct!:boolean;
  Question!:QuestionModel;
}
