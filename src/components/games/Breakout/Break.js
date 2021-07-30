import React from 'react';
import { useSelector } from 'react-redux';
import Board from './Board';

export default function Break(){
    const username = useSelector(state => state.userdata?.username)
    return (
        <div className='farkonium'>
            <Board user={username} />  
        </div>
    )
}

