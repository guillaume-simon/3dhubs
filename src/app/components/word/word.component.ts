import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
    selector: 'word',
    templateUrl: './word.component.html',
    styleUrls: ['../../../styles/letter.scss']
  })
export class WordComponent implements OnInit {

    word: Observable<string> = this.store.pipe(
        select(state => state.hangman.game.word),
    );
    submittedLetters: Observable<string[]> = this.store.pipe(
        select(state => state.hangman.game.submittedLetters),
    );

    constructor(private store: Store<State>) {}

    ngOnInit() {

    }
}