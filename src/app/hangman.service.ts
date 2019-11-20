import { Injectable } from '@angular/core';
import { Game } from './data/game'
import { Player } from './data/player'

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  words: string[] = [
    'marvin',
    'testi',
    'flagada'
  ]

  currentGame: Game = {
    word: null,
    hiddenWord: null,
    player: null,
    letters: []
  }

  constructor() { 
    this.currentGame.player = { score: 0, health: 5 };
    this.currentGame.word = this.words[0]
  }

  getHiddenWord(): string {
    return this.currentGame.hiddenWord;
  }

  getCurrentPlayer(): Player {
    return this.currentGame.player;
  }

  testLetter(letter: string): boolean {
    var word = "Marvin";
    if (word.includes(letter)) {
      this.currentGame.player.score += 10
      return true
    }
    this.currentGame.player.health -= 1
    return false
  }

}
