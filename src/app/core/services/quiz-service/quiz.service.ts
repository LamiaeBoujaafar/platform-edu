import {Injectable} from '@angular/core';
import {ResponseQuestionModel} from '../../models/quiz/response-question-model/response-question-model';
import {QuestionModel} from '../../models/quiz/question-model/question-model';
import {QuizCourseModel} from '../../models/quiz/quiz-course-model/quiz-course-model';
import {CourseService} from '../course-service/course.service';
import {QuizParcoursModel} from '../../models/quiz/quiz-parcours-model/quiz-parcours-model';
import {CourseModel} from '../../models/course/course-model/course-model';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  questions :QuestionModel[] = [{
    id:1,
    question:'What\'s the capital of somalia ?',
    responses:[]
  },{
    id:2,
    question:'What\'s the capital of Mexico ?',
    responses:[]
  },{
    id:3,
    question:'What\'s the capital of UK ?',
    responses:[]
  },{
    id:4,
    question:'What\'s the capital of USA ?',
    responses:[]
  },{
    id:5,
    question:'What\'s the capital of UAE ?',
    responses:[]
  }]
  responseQ1 :ResponseQuestionModel[]= [{
    id: 1,
    response: 'Nairobi',
    correct: false,
    Question: this.questions[0]
  }, {
    id: 2,
    response: 'Asmara',
    correct: true,
    Question: this.questions[0]
  }, {
    id: 3,
    response: 'Mogadishu',
    correct: false,
    Question: this.questions[0]
  }];
  responseQ2  :ResponseQuestionModel[]= [{
    id: 1,
    response: 'Guadalajara',
    correct: false,
    Question: this.questions[1]
  }, {
    id: 2,
    response: 'Puebla',
    correct: false,
    Question: this.questions[1]
  }, {
    id: 3,
    response: 'Mexico',
    correct: true,
    Question: this.questions[1]
  }];
  responseQ3  :ResponseQuestionModel[]= [{
    id: 1,
    response: 'Guadalajara',
    correct: false,
    Question: this.questions[2]
  }, {
    id: 2,
    response: 'London',
    correct: true,
    Question: this.questions[2]
  }, {
    id: 3,
    response: 'Mexico',
    correct: false,
    Question: this.questions[2]
  }];
  responseQ4  :ResponseQuestionModel[]= [{
    id: 1,
    response: 'Guadalajara',
    correct: false,
    Question: this.questions[3]
  }, {
    id: 2,
    response: 'London',
    correct: false,
    Question: this.questions[3]
  }, {
    id: 3,
    response: 'Washington DC',
    correct: true,
    Question: this.questions[3]
  }];
  responseQ5  :ResponseQuestionModel[]= [{
    id: 1,
    response: 'Guadalajara',
    correct: false,
    Question: this.questions[4]
  }, {
    id: 2,
    response: 'London',
    correct: false,
    Question: this.questions[4]
  }, {
    id: 3,
    response: 'Abu Dhabi',
    correct: true,
    Question: this.questions[4]
  }];

  constructor(private courseService:CourseService) {

  }

  quizParcours!: QuizParcoursModel ;
  quizCourse!: QuizCourseModel[];

  getCourseQuiz(){
    this.questions = [{
      id:1,
      question:'What\'s the capital of somalia ?',
      responses:this.responseQ1
    },{
      id:2,
      question:'What\'s the capital of Mexico ?',
      responses:this.responseQ2
    },{
      id:3,
      question:'What\'s the capital of UK ?',
      responses:this.responseQ3
    },{
      id:4,
      question:'What\'s the capital of USA ?',
      responses:this.responseQ4
    },{
      id:5,
      question:'What\'s the capital of UAE ?',
      responses:this.responseQ5
    }]
    this.quizCourse= [{
      id:1,
      numberQuestions:5,
      estimatedDuration:10,
      course:this.courseService.getCourses()[0],
      questions :this.questions
    },{
      id:2,
      numberQuestions:5,
      estimatedDuration:10,
      course:this.courseService.getCourses()[1],
      questions :this.questions
    },{
      id:3,
      numberQuestions:5,
      estimatedDuration:10,
      course:this.courseService.getCourses()[2],
      questions :this.questions
    }]
    return this.quizCourse;
  }
  getParcoursQuiz(){
    this.questions = [{
      id:1,
      question:'What\'s the capital of somalia ?',
      responses:this.responseQ1
    },{
      id:2,
      question:'What\'s the capital of Mexico ?',
      responses:this.responseQ2
    },{
      id:3,
      question:'What\'s the capital of UK ?',
      responses:this.responseQ3
    },{
      id:4,
      question:'What\'s the capital of USA ?',
      responses:this.responseQ4
    },{
      id:5,
      question:'What\'s the capital of UAE ?',
      responses:this.responseQ5
    }]
    this.quizParcours = {
      id: 1,
      numberQuestions: 5,
      estimatedDuration: 30,
      questions: this.questions
    };
    return this.quizParcours;
  }


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
