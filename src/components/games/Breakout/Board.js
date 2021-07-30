
import React,{ useEffect, useRef} from 'react';
import { BallMovement } from './BallMovement';
import data from "../../../Data";
import WallCollision from "./Util/WallCollision";
import Paddle from "./Paddle";
import Brick from './Brick';
import BrickCollision from './Util/BrickCollision';
import PaddleHit from './Util/PaddleHit';
import PlayerStats from './PlayerStats';
import AllBroken from "./Util/AllBroke";
import ResetBall from "./Util/ResetBall";
import { useSelector } from 'react-redux';
import axios from 'axios';
import Snake from '../../../views/Board/Snake';
import { useHistory } from 'react-router-dom';


export default function Board({user}) {
  const userData = useSelector(state => state?.userdata);
  let history = useHistory();
  const canvasRef = useRef(null);
  let bricks = [];
  
  let { ballObj, paddleProps, brickObj } = data;

  let player = {
    name: user,
    lives: 5,
    score: 0,
    level: 1,
  };
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      if(canvas){
      const ctx = canvas.getContext("2d");
      paddleProps.y = canvas.height - 30;

      // Assign Bricks
      let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      PlayerStats(ctx, player, canvas);

      // Display Bricks
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      // Handle Ball Movement
      BallMovement(ctx, ballObj);

      // Check all broken
      AllBroken(bricks, player, canvas, ballObj);

      if (player.lives === 0) {
        alert(`Game Over! Press ok to Reach Leaderboard`);

        uploadScore(player.score);

        player.lives = 5;
        player.level = 1;
        player.score = 0;
        ResetBall(ballObj, canvas, paddleProps);
        bricks.length = 0;
      }
      // Ball and Wall Collision
      WallCollision(ballObj, canvas, player, paddleProps);

      // Brick Collision
      let brickCollision;

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);

        if (brickCollision.hit && !bricks[i].broke) {
          // console.log(brickCollision);
          if (brickCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10;
        }
      }
      Paddle(ctx, canvas, paddleProps);

      // Paddle + Ball Collision
      PaddleHit(ballObj, paddleProps);

      requestAnimationFrame(render);
    };
  }
    render();
  }, []);

  const uploadScore = async(score)=>{
      await axios.post('https://employee-portal-leaderboard.herokuapp.com/leaderboard/',{
          'name': userData.username,
          'score': score,
          'department': userData.designation,
          'game': 'breakout',
        }).then((res)=>{
          console.log(res);
          history.push('/leaderboard');
        })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="gameHeader">Breakout Game</h1>
      <canvas className='break farkonium'
        id="canvas"
        ref={canvasRef}
        onMouseMove={(event) =>
          (paddleProps.x =
            event.clientX -
            (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
            paddleProps.width / 2 -
            10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }
      />
    </div>
  );
}