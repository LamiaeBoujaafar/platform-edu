import { Injectable } from '@angular/core';
import {ChapterModel} from '../../models/chapter-model/chapter-model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chapter :ChapterModel[] = [{
    id:1,
    title:'title1'
  },{
    id:2,
    title:'title2'
  },{
    id:3,
    title:'title3'
  },{
    id:4,
    title:'title4'
  },{
    id:5,
    title:'title5'
  }]
  constructor() { }
  getChapter(){
    return this.chapter;
  }
}
