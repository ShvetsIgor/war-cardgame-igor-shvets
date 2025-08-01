import type {Card, SplitDeckResult} from "./wg-types";

const suits = ["hearts", "diamonds", "clubs", "spades"] as const;
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"] as const;
const powers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function createDeck() {
    const deck: Card[] = [];
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const power = powers[i];
        for (const suit of suits) {
            deck.push({
                suit: suit,
                value: value,
                power: power,
                image: `/images/${value}_of_${suit}.png`
            });
        }
    }
    return deck;
}

export const myDeck: Card[] = createDeck();

export default function shuffleDeck(): Card[] {

    const copyDeck = [...myDeck];

    for (let i = copyDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copyDeck[i], copyDeck[j]] = [copyDeck[j], copyDeck[i]]
    }
    return copyDeck;
}

export const splitDeck = (deck: Card[]): SplitDeckResult => {
    const half = Math.floor(deck.length / 2);
    return {
        player1: deck.slice(0, half),
        player2: deck.slice(half)
    };
};
