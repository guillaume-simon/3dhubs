import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { tryLetter, resetGame } from '../../actions/hangman.actions';

@Component({
    selector: 'keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['../../../assets/letter.scss']
  })
export class KeyboardComponent implements OnInit {

    availableLetters: string[] = [];
    submittedLetters: Observable<string[]> = this.store.pipe(
        select(state => state.hangman.submittedLetters),
    );
    word: Observable<string> = this.store.pipe(
        select(state => state.hangman.word),
    );
    health: Observable<number> = this.store.pipe(
        select(state => state.hangman.player.health),
    );
    isGameOn: Observable<boolean> = this.store.pipe(
        select(state => state.hangman.isGameOn),
    );

    constructor(private store: Store<State>) {}

    ngOnInit() {
        var i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);
        for (; i <= j; ++i) {
          this.availableLetters.push(String.fromCharCode(i));
        }
    }

    submitLetter(letter: string): void {
        this.store.dispatch(tryLetter({ letter: letter }));
    }

    resetGame() {
        this.store.dispatch(resetGame());
    }
    

}