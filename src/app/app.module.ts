import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HangmanEffects } from './effects/hangman.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HealthbarComponent } from './components/healthbar.component'
import { KeyboardComponent } from './components/keyboard.component'
import { ScorebarComponent } from './components/scorebar.component'
import { WordComponent } from './components/word.component'
import { StringToLetterPipe } from './string-to-letter.pipe'
import { NumberToBoolArrayPipe } from './number-to-bool-array.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HealthbarComponent,
    KeyboardComponent,
    ScorebarComponent,
    WordComponent,
    StringToLetterPipe,
    NumberToBoolArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([HangmanEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
