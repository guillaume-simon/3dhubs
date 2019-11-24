import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import { resetGame } from '../../actions/hangman.actions';

@Component({
    selector: 'win-message',
    templateUrl: './win-message.component.html',
    styleUrls: ['../../../styles/message.scss', './win-message.component.scss']
  })
export class WinMessageComponent implements OnInit {

    health: Observable<number> = this.store.pipe(
        select(state => state.hangman.player.health),
    );
    score: Observable<number> = this.store.pipe(
        select(state => state.hangman.player.score),
    );
    highscore: Observable<number> = this.store.pipe(
        select(state => state.hangman.highscore),
    );

    constructor(private store: Store<State>) {}

    ngOnInit() {
    }

    resetGame() {
        this.store.dispatch(resetGame());
    }
    
}