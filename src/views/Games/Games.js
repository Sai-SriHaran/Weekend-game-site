import React from 'react';
import GamesSection from '../../components/GamesSection/GamesSection';
import './home.scss';

const Games = () => {
    return (
        <div className='gamePage'>
            <div className='main text-center'>
                    <GamesSection />
            </div>
        </div>
    )
}

export default Games
