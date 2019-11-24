import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
    selector: 'scorebar',
    templateUrl: './scorebar.component.html',
    styleUrls: ['./scorebar.component.scss']
  })
export class ScorebarComponent implements OnInit {

    multiplier: Observable<number> = this.store.pipe(
        select(state => state.hangman.game.multiplier),
    );
    score: Observable<number> = this.store.pipe(
        select(state => state.hangman.player.score),
    );
    highscore: Observable<number> = this.store.pipe(
        select(state => state.hangman.highscore),
    );
    isGameOn: Observable<boolean> = this.store.pipe(
        select(state => state.hangman.isGameOn),
    );

    constructor(private store: Store<State>) {}

    ngOnInit() {
    }
}