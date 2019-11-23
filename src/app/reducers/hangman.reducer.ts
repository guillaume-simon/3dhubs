import { Action, createReducer, on } from '@ngrx/store';
import {
  resetGame,
  tryLetter,
  submitBadLetter,
  submitGoodLetter,
  yayaAction,
  yayaSuccessAction
} from '../actions/hangman.actions';

import { Player } from '../models/player.model';

export const hangmanFeatureKey = 'hangman';

export interface State {
  word: string;
  submittedLetters: string[];
  player: Player;
  score: number;
  multiplier: number;
}

export const words: string[] = [
  'marvin',
  'print',
  'filament',
  'order',
  'layer'
]

export const initialState: State = {
  word: words[Math.floor(Math.random() * Math.floor(words.length))],
  submittedLetters: [],
  player: { health: 5, score: 0 },
  score: 0,
  multiplier: 1
};

const hangmanReducer = createReducer(
  initialState,
);

export const getWord = (state: State) => state.word;
export const getFoundLetters = (state: State) => state.submittedLetters;

const _reducer = createReducer(
  initialState,
  on(resetGame, 
    (state) => ({  
      word: words[Math.floor(Math.random() * Math.floor(words.length))],
      submittedLetters: [],
      player: { health: 5, score: 0 },
      score: 0,
      multiplier: 1})
    ),
  on(tryLetter, 
    (state, { letter }) => (
      { ...state,
        submittedLetters: state.submittedLetters
      })
    ),
  on(submitBadLetter,
    (state, { letter }) => (
      {
      ...state,
        multiplier: 1,
        submittedLetters: state.submittedLetters.concat(letter),
        player: { ...state.player, health: state.player.health - 1, }
      })
  ),
  on(submitGoodLetter,
    (state, { letter }) => (
      {
      ...state,
        score: state.score + (state.multiplier * 100),
        multiplier: state.multiplier + 1,
        submittedLetters: state.submittedLetters.concat(letter)
      })
  ),
  on(yayaAction,
    (state, { letter }) => (state)),
  on(yayaSuccessAction,
    (state, { text }) => (
      {...state,
      word: text
    }))
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}
