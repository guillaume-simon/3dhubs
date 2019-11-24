import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { resetGame } from '../../actions/hangman.actions';

@Component({
    selector: 'lose-message',
    templateUrl: './lose-message.component.html',
    styleUrls: ['../../../assets/message.scss']
  })
export class LoseMessageComponent implements OnInit {

    constructor(private store: Store<State>) {}

    ngOnInit() {
    }

    resetGame() {
        this.store.dispatch(resetGame());
    }
    
}