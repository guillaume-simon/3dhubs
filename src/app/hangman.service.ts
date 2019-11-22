import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  constructor() { 
  }

  testLetter(word: string, letter: string): boolean {
    if (word.includes(letter)) {
      return true
    }
    return false
  }

}
