import { createAction, props } from '@ngrx/store';

export const tryLetter = createAction(
  '[Hangman] Try Letter',
  props<{ letter: string }>()
);