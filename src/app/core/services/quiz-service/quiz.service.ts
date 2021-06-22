import {Injectable} from '@angular/core';
import {ResponseQuestionModel} from '../../models/quiz/response-question-model/response-question-model';
import {QuestionModel} from '../../models/quiz/question-model/question-model';
import {QuizCourseModel} from '../../models/quiz/quiz-course-model/quiz-course-model';
import {CourseService} from '../course-service/course.service';
import {QuizParcoursModel} from '../../models/quiz/quiz-parcours-model/quiz-parcours-model';
import {CourseModel} from '../../models/course/course-model/course-model';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ProfService} from '../prof-service/prof.service';
import {StudentService} from '../Student-service/student.service';

@Injectable({
  providedIn: 'root'
})

export class QuizService {



  constructor(private courseService:CourseService ,private http:HttpClient,private profService:ProfService,private studentService:StudentService) {

  }
   host=environment.host


  SaveQuizCour(idCour: any, data: any):Observable<any>{

    let host=environment.host
    return  this.http.post<any>(host+"quizcoure/save/"+idCour,data)
  }
  GetQuizCoure(id:number):Observable<QuizCourseModel[] >{
    let host=environment.host
    return this.http.get<QuizCourseModel[]>(host+"quizcoure/prof/"+this.profService.prof.id)
  }

  GetQuizCoureStudent(id:number):Observable<QuizCourseModel[] >{
    let host=environment.host
    return this.http.get<QuizCourseModel[]>(host+"quizcoure/parcour/"+this.studentService.student.parcourVo?.id)
  }



  deleteQuiz(id:number):any{
    let host=environment.host
    return this.http.delete(host+"quizcoure/delete/"+id)
  }
  deleteQuizPrcour(id:number):any{
    let host=environment.host
    return this.http.delete(host+"quizparcour/"+id)
  }
  deleteQuestion(id:number){
    let host=environment.host
    return this.http.delete(host+"question/"+id)
  }
  SaveQuizParcour(idParcour: any, data: any):Observable<any>{
    let host=environment.host
    return  this.http.post<any>(host+"quizparcour/"+this.profService.prof.parcourVo?.id,data)
  }
  GetQuiParcour():Observable<QuizParcoursModel>{
    let host=environment.host
    return this.http.get<QuizParcoursModel>(host+"quizparcour/parcour/"+this.profService.prof.parcourVo?.id)
  }
 SaveEtudantQuizCoure(idEtudaint: any, idQuiz: any,note:any):Observable<any>{
    let host=environment.host
   return  this.http.post<any>(host+"etudiantquizcour/etudaint/"+this.studentService.student.id+"/quizcoure/"+idQuiz,note)
  }
  GetQuizParcour(parcourid:number):Observable<QuizParcoursModel>{
    let host=environment.host
    return this.http.get<QuizParcoursModel>(host+"quizparcour/parcour/"+this.profService.prof.parcourVo?.id)
  }
  SaveEtudantQuizParcour(idEtudaint: any, idQuiz: any,note:any):Observable<any>{
    let host=environment.host
    return  this.http.post<any>(host+"etudiantquizparcour/etudaint/"+this.studentService.student.id+"/quizparcour/"+idQuiz,note)
  }
  GetQuizByProf(idprof:number):Observable<any[]>{
    let host=environment.host
    return this.http.get<any[]>(host+"quizcoure/prof/"+this.profService.prof.id)
  }
  GetEtudanitQuizCoure(idetudaint:number):Observable<any[]>{
    let host=environment.host
    return this.http.get<any[]>(host+"etudiantquizcour/etudaint/"+this.studentService.student.id)
  }
  quizParcours!: QuizParcoursModel ;
  quizCourse!: QuizCourseModel[];



  // quizze0: QuizModel[] = [
  //   {
  //     question: 'What\'s the capital of somalia ?',
  //     answer: [
  //       {option: 'Nairobi', correct: false},
  //       {option: 'Asmara', correct: true},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of Mexico ?',
  //     answer: [
  //       {option: 'Guadalajara', correct: false},
  //       {option: 'Puebla', correct: false},
  //       {option: 'Mexico', correct: true},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of UK ?',
  //     answer: [
  //       {option: 'London', correct: true},
  //       {option: 'Asmara', correct: false},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of USA ?',
  //     answer: [
  //       {option: 'Washington DC', correct: true},
  //       {option: 'Asmara', correct: false},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of UAE ?',
  //     answer: [
  //       {option: 'Doha', correct: false},
  //       {option: 'Dubai', correct: false},
  //       {option: 'Abu Dhabi', correct: true},
  //     ]
  //   },
  // ];
  // quizze1: QuizModel[] = [
  //   {
  //     question: 'What\'s the capital of somalia 1?',
  //     answer: [
  //       {option: 'Nairobi', correct: false},
  //       {option: 'Asmara', correct: true},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of Mexico 1?',
  //     answer: [
  //       {option: 'Guadalajara', correct: false},
  //       {option: 'Puebla', correct: false},
  //       {option: 'Mexico', correct: true},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of UK 1?',
  //     answer: [
  //       {option: 'London', correct: true},
  //       {option: 'Asmara', correct: false},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of USA 1?',
  //     answer: [
  //       {option: 'Washington DC', correct: true},
  //       {option: 'Asmara', correct: false},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of UAE 1?',
  //     answer: [
  //       {option: 'Doha', correct: false},
  //       {option: 'Dubai', correct: false},
  //       {option: 'Abu Dhabi', correct: true},
  //     ]
  //   },
  // ];
  // quizze2: QuizModel[] = [
  //   {
  //     question: 'What\'s the capital of somalia 2?',
  //     answer: [
  //       {option: 'Nairobi', correct: false},
  //       {option: 'Asmara', correct: true},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of Mexico 2?',
  //     answer: [
  //       {option: 'Guadalajara', correct: false},
  //       {option: 'Puebla', correct: false},
  //       {option: 'Mexico', correct: true},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of UK 2?',
  //     answer: [
  //       {option: 'London', correct: true},
  //       {option: 'Asmara', correct: false},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of USA 2?',
  //     answer: [
  //       {option: 'Washington DC', correct: true},
  //       {option: 'Asmara', correct: false},
  //       {option: 'Mogadishu', correct: false},
  //     ]
  //   },
  //   {
  //     question: 'What\'s the capital of UAE 2?',
  //     answer: [
  //       {option: 'Doha', correct: false},
  //       {option: 'Dubai', correct: false},
  //       {option: 'Abu Dhabi', correct: true},
  //     ]
  //   },
  // ];
  //
  // courses: CourseModel[] = [{
  //   id: 1,
  //   title: 'course1',
  //   chapter: [
  //     {
  //       id: 1,
  //       title: 'chapter1',
  //       container: 'container1'
  //     },
  //     {id: 2, title: 'chapter2', container: 'container2'}, {
  //       id: 3,
  //       title: 'chapter3',
  //       container: 'container3'
  //     }]
  // }, {
  //   id: 2,
  //   title: 'course2',
  //   chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container2'}, {
  //     id: 3,
  //     title: 'chapter3',
  //     container: 'container3'
  //   }]
  // }, {
  //   id: 3,
  //   title: 'course3',
  //   chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container1'}, {
  //     id: 3,
  //     title: 'chapter3',
  //     container: 'container1'
  //   }]
  // }, {
  //   id: 4,
  //   title: 'course4',
  //   chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container1'}, {
  //     id: 3,
  //     title: 'chapter3',
  //     container: 'container1'
  //   }]
  // }, {
  //   id: 5,
  //   title: 'course5',
  //   chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container1'}, {
  //     id: 3,
  //     title: 'chapter3',
  //     container: 'container1'
  //   }]
  // }];
  // quizCourse: CourseQuizModel[] = [
  //   {
  //     course: this.courses[0],
  //     quizzes: this.quizze0
  //   },
  //   {
  //     course: this.courses[1],
  //     quizzes: this.quizze1
  //   },
  //   {
  //     course: this.courses[2],
  //     quizzes: this.quizze2
  //   },
  // ];

  // getQuizCourse() {
  //   return this.quizCourse;
  // }
  //
  // getCourses() {
  //   return this.courses;
  // }


}
