import { Injectable } from '@angular/core';
import { Game } from './data/game'
import { Player } from './data/player'

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  words: string[] = [
    'marvin',
    'print',
    'filament',
    'order',
    'layer'
  ]

  currentGame: Game = {
    word: null,
    hiddenWord: null,
    player: null,
    letters: [],
    multiplier: 1
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
    this.currentGame.letters.push(letter)
    if (this.currentGame.word.includes(letter)) {
      this.currentGame.player.score += 100 * this.currentGame.multiplier
      this.currentGame.multiplier += 1
      this.updateHiddenWord()
      return true
    }
    this.currentGame.multiplier = 1
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

  newGame() {
    this.currentGame.word = this.words[Math.floor(Math.random() * Math.floor(this.words.length))];
    this.currentGame.player.health = 5
    this.currentGame.player.score = 0
    this.currentGame.letters = []
    this.updateHiddenWord();
  }

}
