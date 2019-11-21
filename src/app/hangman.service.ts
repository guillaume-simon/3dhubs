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
    this.updateHiddenWord()
  }

  getGame(): Game {
    return this.currentGame;
  }

  getWord(): string {
    return this.currentGame.word;
  }

  getHiddenWord(): string[] {
    return this.currentGame.hiddenWord;
  }

  getCurrentPlayer(): Player {
    return this.currentGame.player;
  }

  testLetter(letter: string): boolean {
    if (this.currentGame.word.includes(letter)) {
      this.currentGame.player.score += 10
      this.currentGame.letters.push(letter)
      this.updateHiddenWord()
      return true
    }
    this.currentGame.player.health -= 1
    return false
  }

  updateHiddenWord() {
    this.currentGame.hiddenWord = []
    for (var i = 0; i < this.currentGame.word.length; i++) {
      if (this.currentGame.letters.includes(this.currentGame.word[i])) {
        this.currentGame.hiddenWord.push(this.currentGame.word[i])
      } else {
        this.currentGame.hiddenWord.push("_")
      }
    }
  }

}
