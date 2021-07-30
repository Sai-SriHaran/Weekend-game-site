import React from 'react'
import { useHistory } from 'react-router-dom';
// import robot from '../../asset/pngaaa.com-938998.png';
import './style.scss';

const NotFound = () => {
    const history = useHistory();
    return (
        <div className='nopage'>
            <div>
            <img className='404Img' src='https://www.clipartkey.com/mpngs/m/210-2106327_robot-error-404-png.png' alt="404 error"/>
            </div>
            <div>
                <h1>404 <br />
                <h2>
                    Oops! page not found
                </h2>
                <button
                  variant="contained" 
                  color="secondary"
                  onClick={()=>{
                      history.push('/')
                  }}
                  >Go back to Home
                  </button>
                </h1>
            </div>
            
        </div>
    )
}

export default NotFound
