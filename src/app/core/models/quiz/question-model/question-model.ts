import {ResponseQuestionModel} from '../response-question-model/response-question-model';

export class QuestionModel {
  idquestion!:any;
  question!:string;
  responses!:ResponseQuestionModel[];
}
