import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers';
import { tryLetter } from './actions/hangman.actions';
import { HangmanService } from './hangman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Hangman Assignment';
  
  word: Observable<string> = this.store.pipe(
    select(state => state.hangman.word),
  );
  health: Observable<number> = this.store.pipe(
    select(state => state.hangman.health),
  );

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch({ type: 'test' });
  }

  tryLetter() {
    this.store.dispatch(tryLetter({ letter: 'a' }));
  }
}
