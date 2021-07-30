import React from 'react';
import './gameCard.scss';

const GameCard = ({ data, focused,onClick, topPlayer }) => {
    return (
        <div className={`gameCard ${focused?'focused':''}`}>
            <div className='cards' onClick={()=>onClick(data)}>
                <img  draggable={false} src={data.logo} className='gameLogo' alt={data.name} />
                <div className='text-center'>
                    <p className='name'>{data.name}</p>
                    <p className='score'>Top player from : {topPlayer?.department || 'Null'}</p>
                </div>
            </div>
        </div>
    )
}

const PlayerCard = ({data})=>{
    return(
        <div className="playerCard bg-secondary">
            <div className='cards'>
                <img draggable={false} src="https://s3-ap-northeast-1.amazonaws.com/peatix-files/user/5562732/240administrator-male.png" className='gameLogo' alt={data.name} />
                <div className='text-center'>
                    <p className='name'>{data.name}</p>
                    <p className='score'>{data.score}</p>
                </div>
            </div>
        </div>
    )
}

export { GameCard, PlayerCard }
