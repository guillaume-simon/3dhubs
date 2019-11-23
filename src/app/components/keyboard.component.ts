import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { tryLetter } from '../actions/hangman.actions';

@Component({
    selector: 'keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss', '../../assets/letter.scss']
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

    constructor(private store: Store<State>) {}

    ngOnInit() {
        var i = 'a'.charCodeAt(0), j = 'z'.charCodeAt(0);
        for (; i <= j; ++i) {
          this.availableLetters.push(String.fromCharCode(i));
        }
    }

    submitLetter(letter: string): void {
        this.store.dispatch(tryLetter({ letter: letter }));
/*
        let state: State;
        getWord;

        if (this.hangmanService.testLetter(state.hangman.word, letter)) {
            this.store.dispatch(submitGoodLetter({ letter: letter }));
        } else {
            this.store.dispatch(submitBadLetter({ letter: letter }));
        }
      */  
    }
    

}