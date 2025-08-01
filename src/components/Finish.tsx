import type {FinishProps} from "./utils/wg-types";
import "./styles/Finish.css"

const Finish = ({
                    playerName,
                    lastWinner,
                    totalWins,
                    totalLosses,
                    totalDraws,
                    restartGame,
                    backToStart
                }: FinishProps) => {
    const renderResultMessage = () => {
        if (lastWinner === "Player") return "YOU WIN!!";
        if (lastWinner === "Computer") return "YOU LOSE!";
        return "Draw!";
    };

    return (
        <div className="finish-container">
            <h1 className="finish-title">Game Over!</h1>
            <h2 className="finish-result-message">{renderResultMessage()}</h2>
            <h3 className="finish-player-name">Player: {playerName}</h3>
            <div className="finish-score-board">
                <p className="finish-score-item"> Total Wins: {totalWins}</p>
                <p className="finish-score-item"> Total Losses: {totalLosses}</p>
                <p className="finish-score-item"> Total Draws: {totalDraws}</p>
            </div>
            <div className="finish-button-group">
                <button
                    className="finish-button finish-button-primary"
                    onClick={restartGame}
                >One More Game
                </button>
                <button
                    className="finish-button finish-button-secondary"
                    onClick={backToStart}
                >Back to Start
                </button>
            </div>
        </div>
    );
};

export default Finish;