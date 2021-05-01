import { Injectable } from '@angular/core';
import {ChapterModel} from '../../models/chapter-model/chapter-model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chapter :ChapterModel[] = []
  constructor() { }
  getChapter(){
    return this.chapter;
  }
}
