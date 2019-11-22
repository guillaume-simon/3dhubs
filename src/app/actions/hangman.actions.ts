import { createAction, props } from '@ngrx/store';

export const resetGame = createAction(
  '[Hangman] Reset Game'
);

export const tryLetter = createAction(
  '[Hangman] Try Letter',
  props<{ letter: string }>()
);

export const submitBadLetter = createAction(
  '[Hangman] Submit Bad Letter',
  props<{ letter: string }>()
)

export const submitGoodLetter = createAction(
  '[Hangman] Submit Good Letter',
  props<{ letter: string }>()
);