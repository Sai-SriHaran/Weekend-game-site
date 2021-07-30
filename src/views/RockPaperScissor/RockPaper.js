import React, { useState } from "react";
// import Header from "./components/Header";
// import Play from "./components/Play";
// import Game from "./components/Game";
// import Footer from "./components/Footer";
// import { Switch, Route } from "react-router-dom";

function Rockpaper() {
  // const [myChoice, setMyChoice] = useState("");
  // const [score, setScore] = useState(0);

  return (
    <>
      {/* <div className="container">
        <Header score={score} />
        <Switch>
          <Route exact path="/rockpaper">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/rockpaper/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
      <Footer /> */}
    <div className='w-100 h-100' >
      <iframe src="https://rock-paper-mg.netlify.app/" width="100%"  title="description">
      </iframe>
    </div>
    </>
  );
}

export default Rockpaper;
