import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HangmanEffects } from './effects/hangman.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HealthbarComponent } from './components/healthbar/healthbar.component'
import { KeyboardComponent } from './components/keyboard/keyboard.component'
import { ScorebarComponent } from './components/scorebar/scorebar.component'
import { WordComponent } from './components/word/word.component'
import { WinMessageComponent } from './components/WinMessage/win-message.component'
import { LoseMessageComponent } from './components/LoseMessage/lose-message.component'
import { StringToLetterPipe } from './pipes/string-to-letter.pipe'
import { NumberToBoolArrayPipe } from './pipes/number-to-bool-array.pipe'
import { FloatToFixedPipe } from './pipes/float-to-fixed.pipe'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        AppComponent,
        HealthbarComponent,
        KeyboardComponent,
        ScorebarComponent,
        WordComponent,
        WinMessageComponent,
        LoseMessageComponent,
        StringToLetterPipe,
        NumberToBoolArrayPipe,
        FloatToFixedPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'assignment-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('assignment-app');
  });
});
