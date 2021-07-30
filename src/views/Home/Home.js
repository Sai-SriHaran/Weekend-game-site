import React from 'react';
import Homepg from '../../components/LandingPage/home';
import Jackpot from '../../components/LandingPage/jackpo';
import Gamestoplay from '../../components/LandingPage/ongames';

const Home = () => {
    return (
        <div className='bd-bg'>
            <Homepg />
            <Jackpot />
            <Gamestoplay />
        </div>
    )
}

export default Home
