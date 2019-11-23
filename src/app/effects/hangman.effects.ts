import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, withLatestFrom, filter } from 'rxjs/operators';
import { HangmanService } from '../hangman.service';
import { Store } from '@ngrx/store';
import { State, getWord, getNbFoundLetters } from '../reducers';

@Injectable()
export class HangmanEffects {


  tryLetterEffect$ = createEffect(() => this.actions$.pipe(
    ofType('[Hangman] Try Letter'),
    withLatestFrom(this.store.select(getWord)),
    map(([action, word])  => { 
      if (word.includes(action.letter)) {
        return ({ type: '[Hangman] Submit Good Letter', letter: action.letter }) 
      } else {
        return ({ type: '[Hangman] Submit Bad Letter', letter: action.letter }) 
      }
   } )
  ))

  submitGoodLetterEffect$ = createEffect(() => this.actions$.pipe(
    ofType('[Hangman] Submit Good Letter'),
    withLatestFrom(this.store.select(getWord),
      this.store.select(getNbFoundLetters)),
    filter(([action, word, nbLetters]) => word.length == nbLetters ),
    map(() => {
      return ({ type: '[Hangman] Game Won' }) 
   } )
  ));

/*
), { dispatch: false });


  loadYaya$ = createEffect(() => this.actions$.pipe(
    ofType('[Hangman] Yaya'),
    map(action => { 
      if (action.letter == 'a') {
        return ({ type: '[Hangman] Submit Good Letter', text: action.letter }) 
      } else {
        return ({ type: '[Hangman] Submit Bad Letter', text: action.letter }) 
      }
   } )
  ))
*/
/*
  loadYaya$ = createEffect(() => this.actions$.pipe(
    ofType('[Hangman] Yaya'),
    map(ev => ({ type: '[Hangman] Yaya Success', text: 'lololo' }) )
  ))
*/
  /*
  loadYaya$ = createEffect(() => this.actions$.pipe(
    ofType('[Hangman] Yaya'),
    mapTo( yayaSuccessAction({ text: 'lololo' }) )
  ))
*/
/*
  loadYaya$ = createEffect(() => this.actions$.pipe(
    ofType('[Hangman] Yaya'),
    mergeMap(() => this.hangmanService.performLogin()
      .pipe(map(text => ({ type: '[Hangman] Yaya Success', payload: text})))
    )
  ));*/
/*
  @Effect()
  public firstAction$: Observable<Action> = this.actions$.pipe(
    ofType( '[Hangman] Yaya' ),
    mapTo( yayaSuccessAction({ text: 'lololo' }) )
  );
*/



constructor(
  private actions$: Actions,
  private hangmanService: HangmanService,
  private store: Store<State>
) {}

}

