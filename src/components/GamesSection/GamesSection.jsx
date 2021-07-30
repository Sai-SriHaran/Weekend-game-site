import React, { useEffect, useState } from 'react';
import './gamesSection.scss';

import { GameCard, PlayerCard } from '../GamesCard/GameCard';
import games from '../../service/gameList';
import GameLogoBackground from '../GameLogoBackground/GameLogoBackground';

const GamesSection = () => {
    const [focusedGame, setFocusedGame] = useState(games[0]);
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("https://employee-portal-leaderboard.herokuapp.com/leaderboard/")
        .then((res) => res.json())
        .then((res) => {
        //   console.log(res);
          setLeaderboardData(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, []);

    return (
        <div className='GamesSection farkonium py-4'>
            <h2>List Of Games</h2>
            <div className='d-flex content justify-content-around'>
                {
                    games.map((e)=>{
                        return <GameCard key={e.id} focused={e.id===focusedGame.id} onClick={setFocusedGame} data={e} topPlayer={leaderboardData.filter((data)=>data.game === e.name)[0]} />
                    })
                }
            </div>
            <div className='d-flex justify-content-around flex-wrap-reverse m-3'>
                <div className='mx-auto'>
                    <p className='h3'>Top Players</p>
                    {
                        leaderboardData.filter((data)=>data.game === focusedGame.name)[0] ? (loading ? <h4>Loading</h4>:
                        leaderboardData.filter((data)=>{
                            return data.game === focusedGame.name
                        }).slice(0,3).map(e=>{
                            return <PlayerCard key={e.id} data={e} />
                        })): <span className='h4'>No Records</span>
                    }
                </div>
                <div className='mx-auto my-2'>
                    <GameLogoBackground game={focusedGame} />
                </div>
                {
                    console.log(leaderboardData.filter((data)=>data.game === focusedGame.name))
                }
            </div>
        </div>
    )
}

export default GamesSection
