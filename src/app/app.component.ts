import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers';
import { tryLetter, loseHealth } from './actions/hangman.actions';
import { HangmanService } from './hangman.service';
import { Player } from './data/player';
import { Game } from './data/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Hangman Assignment';
  result: string = 'false';
  game: Game;
  player: Player;
  word: string = '';
  hiddenWord: string[] = [];
  health: Observable<number> = this.store.pipe(
    select(state => state.hangman.health),
  );
  healthCounter: boolean[] = [];
  letter: string = '';
  availableLetters: string[] = [];

  constructor(private store: Store<State>, private hangmanService: HangmanService) {}

  getGame(): void {
    this.game = this.hangmanService.getGame();
  }

  getPlayer(): void {
    this.player = this.hangmanService.getCurrentPlayer();
  }

  getWord(): void {
    this.word = this.hangmanService.getWord();
  }

  getHiddenWord(): void {
    this.hiddenWord = this.hangmanService.getHiddenWord();
  }

  ngOnInit() {
    this.store.dispatch({ type: 'test' });
    this.getGame();
    this.getPlayer();
    this.getWord();
    this.getHiddenWord();
    this.healthCounter = Array(this.player.health).fill(true);
    var i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);
    for (; i <= j; ++i) {
      this.availableLetters.push(String.fromCharCode(i));
    }
  }

  tryLetter(letter: string) {
    console.log('tryLetter')
    if (this.hangmanService.testLetter(letter)) { 
      this.result = "YES"
      this.getHiddenWord()
    } else {
      this.store.dispatch(loseHealth());
      this.getPlayer()
      this.healthCounter.push(false);
      this.healthCounter.shift();
      this.result = "NO"
    }
      
    //this.store.dispatch(tryLetter({ letter: 'a' }));
  }
  submitLetter(): void {
    console.log('submitLetter')
    this.tryLetter(this.letter);
  }
}
