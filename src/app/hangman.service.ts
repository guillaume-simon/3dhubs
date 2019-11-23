import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  yaya(): string {
    return 'yaya'
  }

  performLogin() : string {
    //throw "Something went wrong";
    //return of(true);
    console.log('performLogin()')
    return 'YAYAYA';
}

}
