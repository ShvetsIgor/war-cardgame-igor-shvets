import {useCallback, useState} from "react";
import Start from "./components/Start";
import Game from "./components/Game";
import Finish from "./components/Finish";
import {Route, Routes, useNavigate} from "react-router-dom";


const App = () => {
    // const [screen, setScreen] = useState<"start" | "game" | "finish">("start");

    const navigate = useNavigate();

    const [playerName, setPlayerName] = useState("");
    const [totalWins, setTotalWins] = useState(0);
    const [totalLosses, setTotalLosses] = useState(0);
    const [totalDraws, setTotalDraws] = useState(0);
    const [lastWinner, setLastWinner] = useState<"Computer" | "Player" | "Draw" | null>(null);

    const startGame = () => navigate("/game");

    const handleGameEnd = useCallback((winner: "Computer" | "Player" | "Draw") => {
        setLastWinner(winner);

        if (winner === "Player") setTotalWins(w => w + 1);
        else if (winner === "Computer") setTotalLosses(l => l + 1);
        else setTotalDraws(d => d + 1);

        navigate("/finish");
    }, [navigate]);

    const restartGame = () => navigate("/game");
    const backToStart = () => navigate("/start");

    return (
        <div className={"app-container"}>
            {/*{screen === "start" && (*/}
            {/*    <Start*/}
            {/*        saveName={setPlayerName}*/}
            {/*        startGame={startGame}*/}
            {/*    />*/}
            {/*)}*/}

            {/*{screen === "game" && (*/}
            {/*    <Game*/}
            {/*        playerName={playerName}*/}
            {/*        onGameEnd={handleGameEnd}*/}
            {/*    />*/}
            {/*)}*/}

            {/*{screen === "finish" && (*/}
            {/*    <Finish*/}
            {/*        playerName={playerName}*/}
            {/*        lastWinner={lastWinner}*/}
            {/*        totalWins={totalWins}*/}
            {/*        totalLosses={totalLosses}*/}
            {/*        totalDraws={totalDraws}*/}
            {/*        restartGame={restartGame}*/}
            {/*        backToStart={backToStart}*/}
            {/*    />*/}
            {/*)}*/}

            <Routes>
                <Route path="/" element={<Start saveName={setPlayerName} startGame={startGame}/>}/>
                <Route path={"/start"} element={<Start saveName={setPlayerName} startGame={startGame}/>}/>
                <Route path={"/game"} element={<Game playerName={playerName} onGameEnd={handleGameEnd}/>}/>
                <Route path={"/finish"} element={<Finish
                    playerName={playerName}
                    lastWinner={lastWinner}
                    totalWins={totalWins}
                    totalLosses={totalLosses}
                    totalDraws={totalDraws}
                    restartGame={restartGame}
                    backToStart={backToStart}/>}/>
            </Routes>
        </div>
    );
};

export default App;
