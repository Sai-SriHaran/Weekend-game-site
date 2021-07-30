import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import anim from "../../assets//images/anim.gif";

function Homepg() {
  let history = useHistory();
  const name = useSelector(state => state.userdata?.username);
  return (
    <div className="my-container " id="homepage">
      <img className="startImg banner-blur" src={anim} width="100%" alt='backGit' />
      <div className="head1 col-sm-12 col-md-12 col-lg-12 col-xl-12 pt-2">
        {
          name && <>
            <h2 className='text-light font-weight-bold'>Welcome back {name}</h2>
          </>
        }
        <h3 className="hd1 pt-2 ">PLAY ONLINE GAMES,WIN REWARDS</h3>
        <div className='hd1 btn btn-outline-light' onClick={()=>history.push('/games')}>Play Now</div>
      </div>
    </div>
  );
}

export default Homepg;
