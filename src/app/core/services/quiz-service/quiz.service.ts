import {Injectable} from '@angular/core';
import {QuizModel} from '../../models/quiz-model/quiz-model';
import {ChapterModel} from '../../models/chapter-model/chapter-model';
import {CourseQuizModel} from '../../models/quiz-model/course-quiz-model';
import {CourseModel} from '../../models/course-model/course-model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizze0: QuizModel[] = [
    {
      question: 'What\'s the capital of somalia ?',
      answer: [
        {option: 'Nairobi', correct: false},
        {option: 'Asmara', correct: true},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of Mexico ?',
      answer: [
        {option: 'Guadalajara', correct: false},
        {option: 'Puebla', correct: false},
        {option: 'Mexico', correct: true},
      ]
    },
    {
      question: 'What\'s the capital of UK ?',
      answer: [
        {option: 'London', correct: true},
        {option: 'Asmara', correct: false},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of USA ?',
      answer: [
        {option: 'Washington DC', correct: true},
        {option: 'Asmara', correct: false},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of UAE ?',
      answer: [
        {option: 'Doha', correct: false},
        {option: 'Dubai', correct: false},
        {option: 'Abu Dhabi', correct: true},
      ]
    },
  ];
  quizze1: QuizModel[] = [
    {
      question: 'What\'s the capital of somalia 1?',
      answer: [
        {option: 'Nairobi', correct: false},
        {option: 'Asmara', correct: true},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of Mexico 1?',
      answer: [
        {option: 'Guadalajara', correct: false},
        {option: 'Puebla', correct: false},
        {option: 'Mexico', correct: true},
      ]
    },
    {
      question: 'What\'s the capital of UK 1?',
      answer: [
        {option: 'London', correct: true},
        {option: 'Asmara', correct: false},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of USA 1?',
      answer: [
        {option: 'Washington DC', correct: true},
        {option: 'Asmara', correct: false},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of UAE 1?',
      answer: [
        {option: 'Doha', correct: false},
        {option: 'Dubai', correct: false},
        {option: 'Abu Dhabi', correct: true},
      ]
    },
  ];
  quizze2: QuizModel[] = [
    {
      question: 'What\'s the capital of somalia 2?',
      answer: [
        {option: 'Nairobi', correct: false},
        {option: 'Asmara', correct: true},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of Mexico 2?',
      answer: [
        {option: 'Guadalajara', correct: false},
        {option: 'Puebla', correct: false},
        {option: 'Mexico', correct: true},
      ]
    },
    {
      question: 'What\'s the capital of UK 2?',
      answer: [
        {option: 'London', correct: true},
        {option: 'Asmara', correct: false},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of USA 2?',
      answer: [
        {option: 'Washington DC', correct: true},
        {option: 'Asmara', correct: false},
        {option: 'Mogadishu', correct: false},
      ]
    },
    {
      question: 'What\'s the capital of UAE 2?',
      answer: [
        {option: 'Doha', correct: false},
        {option: 'Dubai', correct: false},
        {option: 'Abu Dhabi', correct: true},
      ]
    },
  ];

  courses: CourseModel[] = [{
    id: 1,
    title: 'course1',
    chapter: [
      {
        id: 1,
        title: 'chapter1',
        container: 'container1'
      },
      {id: 2, title: 'chapter2', container: 'container2'}, {
        id: 3,
        title: 'chapter3',
        container: 'container3'
      }]
  }, {
    id: 2,
    title: 'course2',
    chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container2'}, {
      id: 3,
      title: 'chapter3',
      container: 'container3'
    }]
  }, {
    id: 3,
    title: 'course3',
    chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container1'}, {
      id: 3,
      title: 'chapter3',
      container: 'container1'
    }]
  }, {
    id: 4,
    title: 'course4',
    chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container1'}, {
      id: 3,
      title: 'chapter3',
      container: 'container1'
    }]
  }, {
    id: 5,
    title: 'course5',
    chapter: [{id: 1, title: 'chapter1', container: 'container1'}, {id: 2, title: 'chapter2', container: 'container1'}, {
      id: 3,
      title: 'chapter3',
      container: 'container1'
    }]
  }];
  quizCourse: CourseQuizModel[] = [
    {
      course: this.courses[0],
      quizzes: this.quizze0
    },
    {
      course: this.courses[1],
      quizzes: this.quizze1
    },
    {
      course: this.courses[2],
      quizzes: this.quizze2
    },
  ];

  constructor() {
  }

  getQuizCourse() {
    return this.quizCourse;
  }

  getCourses() {
    return this.courses;
  }


}
