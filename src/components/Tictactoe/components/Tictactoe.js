import React, {useState} from "react";
import {calculateWinner } from "../helper";
import Board from "./Board";
import '../ticTacToe.scss';
import { useSelector } from "react-redux";

const Tictactoe = () => {
    const user = useSelector(state => state.userdata?.username)
    const[history, setHistory] =useState([Array(9).fill(null)]);
    const[stepNumber, setStepNumber] = useState(0);
    const[xIsNext, setXisNext] = useState(true);
    const winner =  calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1 );
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if(winner || squares[i]) return;
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };
    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    }

    // const renderMoves = () =>
    // history.map((_step, move)=>{
    //     const destination = move ? `${move}` : "Go to Start";
    //     return (
    //             <button onClick={() => jumpTo(move)}>{destination}</button>
    //     );
    // });

    return(
        <div className='ticTacToe'>
            <div className='ticTacToeBody text-uppercase'>
                <h3>Tic Tac Toe</h3>
                <div className='displayFlex my-3 mx-5'>
                    <p className='h3'>Name : {user}</p>
                    <p className='h3'>
                        {winner ? " Winner :" + winner : " Current Player : " + xO}
                    </p>
                </div>
                    <Board squares={history[stepNumber]} onClick={handleClick} />
                <div>
                    {
                        winner&&`hurrah ! ! ! ' ${winner} ' won . . . Please reset and continue game`
                    }
                    <br />
                    <button 
                        className='btn btn-success text-uppercase'
                        onClick={()=>{
                            jumpTo(0)
                        }}
                    >
                        Reset
                    </button>
                </div> 
            </div>
        </div>
    );
};

export default Tictactoe;