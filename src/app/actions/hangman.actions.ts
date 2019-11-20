import { createAction, props } from '@ngrx/store';

export const tryLetter = createAction(
  '[Hangman] Try Letter',
  props<{ letter: string }>()
);

export const loseHealth = createAction(
  '[Hangman] Lose Health'
)

export const addLetterToTriedList = createAction(
  '[Hangman] Add Letter To Tried List',
  props<{ letter: string }>()
)