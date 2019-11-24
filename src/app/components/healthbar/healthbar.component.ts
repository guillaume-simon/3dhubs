import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
    selector: 'healthbar',
    templateUrl: './healthbar.component.html',
    styleUrls: ['./healthbar.component.scss']
  })
export class HealthbarComponent implements OnInit {

    health: Observable<number> = this.store.pipe(
        select(state => state.hangman.player.health),
    );

    constructor(private store: Store<State>) {}

    ngOnInit() {

    }

}
