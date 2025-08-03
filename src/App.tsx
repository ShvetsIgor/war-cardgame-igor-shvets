import {useState} from "react";
import Start from "./components/Start";
import Game from "./components/Game";
import Finish from "./components/Finish";


const App = () => {
    const [screen, setScreen] = useState<"start" | "game" | "finish">("start");

    const [playerName, setPlayerName] = useState("");
    const [totalWins, setTotalWins] = useState(0);
    const [totalLosses, setTotalLosses] = useState(0);
    const [totalDraws, setTotalDraws] = useState(0);
    const [lastWinner, setLastWinner] = useState<"Computer" | "Player" | "Draw" | null>(null);

    const startGame = () => setScreen("game");

    const handleGameEnd = (winner: "Computer" | "Player" | "Draw") => {
        setLastWinner(winner);

        if (winner === "Player") setTotalWins(w => w + 1);
        else if (winner === "Computer") setTotalLosses(l => l + 1);
        else setTotalDraws(d => d + 1);

        setScreen("finish");
    };

    const restartGame = () => setScreen("game");
    const backToStart = () => setScreen("start");

    return (
        <div className={"app-container"}>
            {screen === "start" && (
                <Start
                    saveName={setPlayerName}
                    startGame={startGame}
                />
            )}

            {screen === "game" && (
                <Game
                    playerName={playerName}
                    onGameEnd={handleGameEnd}
                />
            )}

            {screen === "finish" && (
                <Finish
                    playerName={playerName}
                    lastWinner={lastWinner}
                    totalWins={totalWins}
                    totalLosses={totalLosses}
                    totalDraws={totalDraws}
                    restartGame={restartGame}
                    backToStart={backToStart}
                />
            )}
        </div>
    );
};

export default App;
