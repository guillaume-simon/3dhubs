import { Injectable } from '@angular/core';
import { Word } from './data/word';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  constructor() { }

  getWord(): Word {
    return {  text: "Marvin" };
  }
}
