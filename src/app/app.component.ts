import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers';
import { tryLetter, loseHealth } from './actions/hangman.actions';
import { HangmanService } from './hangman.service';
import { Player } from './data/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Hangman Assignment';
  result: string = 'false';
  player: Player;
  word: string = '';
  health: Observable<number> = this.store.pipe(
    select(state => state.hangman.health),
  );

  constructor(private store: Store<State>, private hangmanService: HangmanService) {}

  getPlayer(): void {
    this.player = this.hangmanService.getCurrentPlayer();
  }

  getWord(): void {
    this.word = this.hangmanService.getWord();
  }

  ngOnInit() {
    this.store.dispatch({ type: 'test' });
    this.getPlayer();
    this.getWord();
  }

  tryLetter(letter: string) {
    if (this.hangmanService.testLetter(letter)) { 
      this.result = "YES"
    } else {
      this.store.dispatch(loseHealth());
      this.result = "NO"
    }
      
    //this.store.dispatch(tryLetter({ letter: 'a' }));
  }
}
