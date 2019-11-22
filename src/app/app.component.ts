import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers';
import { tryLetter, submitBadLetter } from './actions/hangman.actions';
import { HangmanService } from './hangman.service';
import { Player } from './models/player.model';
import { Game } from './models/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  hiddenWord: string[] = [];
  health: Observable<number> = this.store.pipe(
    select(state => state.hangman.player.health),
  );
  healthCounter: boolean[] = [];
  letter: string = '';
  
  hhealth: Observable<number> = this.store.pipe(
    select(state => state.hangman.player.health),
  );

  constructor(private store: Store<State>, private hangmanService: HangmanService) {}

  ngOnInit() {
  }

  test(letter: string) {
    this.store.dispatch(tryLetter({ letter }));
  }
}
