import {useState} from "react";
import type {StartProps} from "./utils/wg-types";
import "./styles/Start.css"


const Start = ({saveName, startGame}: StartProps) => {

    const [name, setName] = useState("");
    localStorage.setItem("name", name);

    return (
        <div className={"startGame"}>
            <h1>Ready for WAR GAME?</h1>
            <img className={"cardImg"}
                 src={"/images/red_joker.png"}/>
            <input className={"startInput"}
                   type="text"
                   name={"name"}
                   placeholder={"Enter your name"}
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            /><br/>
            <button className={"startBtn"}
                    name={"startBtn"}
                    onClick={() => {
                        saveName(name)
                        startGame()
                    }}
            >START
            </button>
        </div>
    );
};

export default Start;