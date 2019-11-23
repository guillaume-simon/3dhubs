import { Action, createReducer, on } from '@ngrx/store';
import {
  resetGame,
  tryLetter,
  submitBadLetter,
  submitGoodLetter,
  gameWon
} from '../actions/hangman.actions';

import { Player } from '../models/player.model';

export const hangmanFeatureKey = 'hangman';

export interface State {
  word: string;
  nbFoundLetters: number;
  submittedLetters: string[];
  player: Player;
  score: number;
  highscore: number;
  multiplier: number;
  isGameOn: boolean;
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
  nbFoundLetters: 0,
  submittedLetters: [],
  player: { health: 5, score: 0 },
  score: 0,
  highscore: 0,
  multiplier: 1,
  isGameOn: true
};

const hangmanReducer = createReducer(
  initialState,
);

export const getWord = (state: State) => state.word;
export const getFoundLetters = (state: State) => state.submittedLetters;
export const getNbFoundLetters = (state: State) => state.nbFoundLetters;

const _reducer = createReducer(
  initialState,
  on(resetGame, 
    (state) => ({
      ...state,
      word: words[Math.floor(Math.random() * Math.floor(words.length))],
      nbFoundLetters: 0,
      submittedLetters: [],
      player: { health: 5, score: 0 },
      multiplier: 1,
      isGameOn: true
    })
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
        player: { ...state.player, health: state.player.health - 1 }
      })
  ),
  on(submitGoodLetter,
    (state, { letter }) => (
      {
      ...state,
        nbFoundLetters: state.nbFoundLetters + 1,
        player: { ...state.player, score: state.player.score + (state.multiplier * 1000) },
        multiplier: state.multiplier + 3/10,
        submittedLetters: state.submittedLetters.concat(letter)
      })
  ),
  on(gameWon,
    (state) => { 
      let finalScore = state.player.score + (state.multiplier * 1000);
      return ({
        ...state,
        player: { ...state.player, score: finalScore },
        isGameOn: false,
        highscore: (finalScore > state.highscore) ? finalScore : state.highscore
      }
    )})
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}
