import { createAction, props } from '@ngrx/store';

export const resetGame = createAction(
  '[Hangman] Reset Game'
);

export const yayaAction = createAction(
  '[Hangman] Yaya',
  props<{ letter: string }>()
);

export const yayaSuccessAction = createAction(
  '[Hangman] Yaya Success',
  props<{ text: string }>()
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