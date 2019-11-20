import { Action, createReducer, on } from '@ngrx/store';
import {
  tryLetter
} from '../actions/hangman.actions';

export const hangmanFeatureKey = 'hangman';

export interface State {
  word: string;
  foundLetters: string[];
  health: number;
}

export const initialState: State = {
  word: 'marvin',
  foundLetters: ['a'],
  health: 5
};

const hangmanReducer = createReducer(
  initialState,
);

export const getWord = (state: State) => state.word;
export const getFoundLetters = (state: State) => state.foundLetters;
export const getHealth = (state: State) => state.health;


const _reducer = createReducer(
  initialState,
  on(tryLetter, 
    (state, { letter }) => (
      
      { word: state.word + letter, 
        foundLetters: state.foundLetters,
        health: state.health -1
      })
    )
);

export function reducer(state: State, action: Action) {
  return _reducer(state, action);
}

/*
export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case HangmanActions.tryLetter.type:
      return {
        word: 'yayaya' + 'a',
        foundLetters: ['b']
      };
    default:
      return hangmanReducer(state, action);
  }

}
*/