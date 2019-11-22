
import { Player } from './player.model';

export interface Game {
    word: string;
    hiddenWord: string[];
    player: Player;
    letters: string[];
    multiplier: number;
}