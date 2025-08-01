export type Card = {
    suit: "hearts" | "diamonds" | "clubs" | "spades";
    value: string;   // "2"..."A"
    power: number;   // 2...14
    image: string;
};

export type StartProps = {
    saveName: (name: string) => void;
    startGame: () => void;
};

export type GameProps = {
    playerName: string;
    onGameEnd: (winner: "Computer" | "Player" | "Draw") => void;
};

export type FinishProps = {
    playerName: string;
    lastWinner: "Computer" | "Player" | "Draw" | null;
    totalWins: number;
    totalLosses: number;
    totalDraws: number;
    restartGame: () => void;
    backToStart: () => void;
};

export type SplitDeckResult = {
    player1: Card[];
    player2: Card[];
};
