import {Injectable} from '@angular/core';
import {QuizModel} from '../../models/quiz-model/quiz-model';
import {ChapterModel} from '../../models/chapter-model/chapter-model';
import {ChapterQuizModel} from '../../models/chapter-model/chapter-quiz-model';

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
  chapters: ChapterModel[] = [{
    id: 1,
    title: 'title1'
  }, {
    id: 2,
    title: 'title2'
  }, {
    id: 3,
    title: 'title3'
  }];
  quizChapter: ChapterQuizModel[] = [
    {
      chapter: this.chapters[0],
      quizzes: this.quizze0
    },
    {
      chapter: this.chapters[1],
      quizzes: this.quizze1
    },
    {
      chapter: this.chapters[2],
      quizzes: this.quizze2
    },
  ];

  constructor() {
  }

  getQuizChapter() {
    return this.quizChapter;
  }
}
