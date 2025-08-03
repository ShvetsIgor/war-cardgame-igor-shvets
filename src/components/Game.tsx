import type {Card, GameProps} from "./utils/wg-types";
import shuffleDeck, {splitDeck} from "./utils/cards.ts";
import {useEffect, useState} from "react";
import "./styles/Game.css"


const Game = ({playerName, onGameEnd}: GameProps) => {
    // console.log("Game", playerName)
    // console.log("Cards", myDeck)
    // console.log("FisherYates", shuffleDeck())

    const [player1, setPlayer1] = useState<Card[]>([]);
    const [player2, setPlayer2] = useState<Card[]>([]);
    const [table, setTable] = useState<{ p1?: Card; p2?: Card }>({});
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [winner, setWinner] = useState<"Computer" | "Player" | "Draw" | null>(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const shuffled = shuffleDeck();
        const {player1, player2} = splitDeck(shuffled);
        setPlayer1(player1);
        setPlayer2(player2);
    }, []);

    useEffect(() => {
        if (gameOver && winner && onGameEnd) {
            onGameEnd(winner);
        }
    }, [gameOver, winner, onGameEnd]);

    const nextTurn = () => {
        if (player1.length === 0 || player2.length === 0)
            return Error("The end");

        const p1Card = player1[0];
        const p2Card = player2[0];

        setTable({p1: p1Card, p2: p2Card});

        setPlayer1(prev => prev.slice(1));
        setPlayer2(prev => prev.slice(1));

        if (p1Card.power > p2Card.power) {
            setScore1(s => s + 1);
        } else if (p2Card.power > p1Card.power) {
            setScore2(s => s + 1);
        }

        if (player1.length === 1 && player2.length === 1) {

            setTimeout(() => {
                setGameOver(true);

                if (score1 > score2) {
                    setWinner("Computer")
                } else if (score2 > score1) {
                    setWinner("Player")
                } else {
                    setWinner("Draw")
                }
            }, 1000)
        }
    }


    return (
        <div className={"gameContainer"}>
            <div>
                {table.p1 && (
                    <div>
                        <p>Computer</p>
                        <img className={"cardImg"}
                             src={table.p1.image}
                             alt={`${table.p1.value} of ${table.p1.suit}`}
                        />
                    </div>
                )}
                {table.p2 && (
                    <div>
                        <p>{playerName}</p>
                        <img className={"cardImg"}
                             src={table.p2.image}
                             alt={`${table.p2.value} of ${table.p2.suit}`}
                        />
                    </div>
                )}
            </div>

            <h4>Score: 0</h4>
            {(score1 === 0 && score2 === 0) &&
            <img className={"cardImg"}
                 src={"/images/back.png"}/>
            }
            <p>Computer: {score1}</p>
            <p>{playerName}: {score2}</p>
            {!gameOver && (
                <button onClick={nextTurn}>Next turn</button>
            )}
        </div>
    )
}

export default Game;