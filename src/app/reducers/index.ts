import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromHangman from './hangman.reducer';

export interface State {

  [fromHangman.hangmanFeatureKey]: fromHangman.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromHangman.hangmanFeatureKey]: fromHangman.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getHangmanState = createFeatureSelector<fromHangman.State>('hangman');

export const getWord = createSelector(
  getHangmanState,
  fromHangman.getWord,
);

export const getFoundLetters = createSelector(
  getHangmanState,
  fromHangman.getFoundLetters,
);

export const getHealth = createSelector(
  getHangmanState,
  fromHangman.getHealth,
);