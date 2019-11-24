import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { HangmanService } from '../../hangman.service';

@Component({
    selector: 'word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss', '../../../assets/letter.scss']
  })
export class WordComponent implements OnInit {

    word: Observable<string> = this.store.pipe(
        select(state => state.hangman.word),
    );
    submittedLetters: Observable<string[]> = this.store.pipe(
        select(state => state.hangman.submittedLetters),
    );

    constructor(private store: Store<State>, private hangmanService: HangmanService) {}

    ngOnInit() {

    }
}