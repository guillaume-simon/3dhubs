import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { tryLetter, resetGame } from '../../actions/hangman.actions';

@Component({
    selector: 'keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['../../../styles/letter.scss']
  })
export class KeyboardComponent implements OnInit {

    availableLetters: string[] = [];
    submittedLetters: Observable<string[]> = this.store.pipe(
        select(state => state.hangman.game.submittedLetters),
    );
    word: Observable<string> = this.store.pipe(
        select(state => state.hangman.game.word),
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
    
}