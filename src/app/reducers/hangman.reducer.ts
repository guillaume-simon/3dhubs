import { Action, createReducer, on } from '@ngrx/store';
import {
  resetGame,
  tryLetter,
  submitBadLetter,
  submitGoodLetter,
  gameWon
} from '../actions/hangman.actions';

import { Player } from '../models/player.model';
import { Game } from '../models/game.model';

export const hangmanFeatureKey = 'hangman';

export interface State {
  player: Player;
  game: Game;
  isGameOn: boolean;
  highscore: number;
}

export const words: string[] = [
  'marvin',
  'print',
  'filament',
  'order',
  'layer'
]

export const initialState: State = {
  game: {
    word: words[Math.floor(Math.random() * Math.floor(words.length))],
    nbFoundLetters: 0,
    submittedLetters: [],
    score: 0,
    multiplier: 1
  },
  player: { 
    health: 5, 
    score: 0 
  },
  isGameOn: true,
  highscore: 0
};

const hangmanReducer = createReducer(
  initialState,
);

export const getWord = (state: State) => state.game.word;
export const getFoundLetters = (state: State) => state.game.submittedLetters;
export const getNbFoundLetters = (state: State) => state.game.nbFoundLetters;

const _reducer = createReducer(
  initialState,
  on(resetGame, 
    (state) => ({
      ...state,
      game: {
        word: words[Math.floor(Math.random() * Math.floor(words.length))],
        nbFoundLetters: 0,
        submittedLetters: [],
        score: 0,
        multiplier: 1
      },
      player: { health: 5, score: 0 },
      isGameOn: true
    })
    ),
  on(tryLetter, 
    (state, { letter }) => (
      { ...state,
        game: {
          ...state.game,
          submittedLetters: state.game.submittedLetters
        }
      })
    ),
  on(submitBadLetter,
    (state, { letter }) => (
      {
      ...state,
        game: {
          ...state.game,
          multiplier: 1,
          submittedLetters: state.game.submittedLetters.concat(letter),
        },
        player: { 
          ...state.player, 
          health: state.player.health - 1
        }
      })
  ),
  on(submitGoodLetter,
    (state, { letter, nbFoundLetters }) => (
      {
      ...state,
        game: {
          ...state.game,
          nbFoundLetters: state.game.nbFoundLetters + nbFoundLetters,
          multiplier: state.game.multiplier + 3/10,
          submittedLetters: state.game.submittedLetters.concat(letter)
        },
        player: { ...state.player, score: state.player.score + (state.game.multiplier * 1000) },

      })
  ),
  on(gameWon,
    (state) => { 
      let finalScore = state.player.score + (state.game.multiplier * 1000);
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
