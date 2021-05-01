import {ResponseQuestionModel} from '../response-question-model/response-question-model';

export class QuestionModel {
  id!:number;
  question!:string;
  responses!:ResponseQuestionModel[];
}
