
import Header from "./Header.jsx";
import Board from "./Board.jsx";
import Status from "./Status.jsx";
import Restart from "./Restart.jsx";

import './Game.css'
import { useState } from "react";

const Game = (props) => {

    const [status, setStatus] = useState("Next");
    const [turn, setTurn] = useState(Math.random() < 0.5 ? "X" : "O");
    const [isWinnerFound, setWinner] = useState(false);
    const [restart, setRestart] = useState(false);

    return (
        <div className="game">
            <Header gameName={props.name} />
            <Board turn={turn} setTurn={setTurn}  setStatus={setStatus} isWinnerFound={isWinnerFound} setWinner={setWinner} restart={restart} setRestart={setRestart}/>
            <Status status={status} turn={turn} />
            <Restart  setRestart={setRestart}/>
        </div>
    );
};

export default Game;