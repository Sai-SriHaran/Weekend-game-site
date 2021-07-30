import React from "react";
import { useHistory } from "react-router-dom";


import "../css/gameOver.css";

function GameOver(props) {
    let history = useHistory();
    return (
        <div id="gameOver">
            <div>Game Over!</div>
            <button onClick={()=>history.push('/leaderboard')} >Go to leaderboard</button>
        </div>
    );
}

export default GameOver;