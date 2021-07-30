import React from "react";

import "../css/score.css";

function Score(props) {
    return (<div id="score"><span className='h4 float-left text-dark'>Name : {props.user}</span>{props.score}</div>);
}

export default Score;