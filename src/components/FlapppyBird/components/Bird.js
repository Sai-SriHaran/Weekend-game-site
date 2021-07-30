import React from "react";

import "../css/bird.css";
// import bird from "../images/flappybird.gif";

function Bird() {
	let bird = 'https://thumbs.gfycat.com/CourteousMarvelousKusimanse-size_restricted.gif';
	return (
		<img src={bird} id='bird' alt='bird' />
		// <div id='bird'></div>
	);
}

export default Bird;