import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, withLatestFrom, filter } from 'rxjs/operators';
import { HangmanService } from '../hangman.service';
import { Store } from '@ngrx/store';
import { State, getWord, getNbFoundLetters } from '../reducers';
import { tryLetter, submitGoodLetter } from '../actions/hangman.actions';

@Injectable()
export class HangmanEffects {


  tryLetterEffect$ = createEffect(() => this.actions$.pipe(
    ofType(tryLetter),
    withLatestFrom(this.store.select(getWord)),
    map(([action, word])  => {
      if (word.includes(action.letter)) {
        return ({ type: '[Hangman] Submit Good Letter', letter: action.letter, nbFoundLetters: word.split(action.letter).length-1 }) 
      } else {
        return ({ type: '[Hangman] Submit Bad Letter', letter: action.letter }) 
      }
   } )
  ))

  submitGoodLetterEffect$ = createEffect(() => this.actions$.pipe(
    ofType(submitGoodLetter),
    withLatestFrom(this.store.select(getWord),
      this.store.select(getNbFoundLetters)),
    filter(([action, word, nbLetters]) => word.length == nbLetters ),
    map(() => {
      return ({ type: '[Hangman] Game Won' }) 
   } )
  ));

constructor(
  private actions$: Actions,
  private hangmanService: HangmanService,
  private store: Store<State>
) {}

}

