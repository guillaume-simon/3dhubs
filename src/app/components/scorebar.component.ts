import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { resetGame } from '../actions/hangman.actions';
import { HangmanService } from '../hangman.service';

@Component({
    selector: 'scorebar',
    templateUrl: './scorebar.component.html',
    styleUrls: ['./scorebar.component.scss']
  })
export class ScorebarComponent implements OnInit {

    multiplier: Observable<number> = this.store.pipe(
        select(state => state.hangman.multiplier),
    );
    score: Observable<number> = this.store.pipe(
        select(state => state.hangman.score),
    );

    constructor(private store: Store<State>, private hangmanService: HangmanService) {}

    ngOnInit() {
    }

    resetGame() {
        this.store.dispatch(resetGame());
    }
}