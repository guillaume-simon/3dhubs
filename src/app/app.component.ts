import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers';
import { HangmanService } from './hangman.service';
import { HangmanEffects } from './effects/hangman.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  constructor(private store: Store<State>, private hangmanService: HangmanService, private effects: HangmanEffects) {}

  ngOnInit() {
  }

}
