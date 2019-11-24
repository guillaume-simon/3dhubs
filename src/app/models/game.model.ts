
export interface Game {
    word: string;
    nbFoundLetters: number;
    submittedLetters: string[];
    score: number;
    multiplier: number;
}