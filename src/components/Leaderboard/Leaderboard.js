import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import spinnerSvg from "../../assets/spinner.svg";

import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = useSelector(state => state?.userdata);
  useEffect(() => {
    fetch("https://employee-portal-leaderboard.herokuapp.com/leaderboard/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLeaderboardData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <><div className="leaderboard-content table-responsive my-4 mx-auto">
            <table className="table text-center table-bordered table-dark h5 text-uppercase">
              <tr>
                <th colspan="5" className='leaderboard-title'>Leaderboard Top 25</th>
              </tr>
              <tr className='text-danger'>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">Department</th>
                <th scope="col">Game</th>
              </tr>
              {
                leaderboardData.slice(0,25).map((data,index)=>{
                  return (
                  <tr className='text-warning'>
                    <th scope="row">{index+1}</th>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                    <td>{data.department}</td>
                    <td>{data.game}</td>
                  </tr>
                  )
                })
              }
            </table>
            </div>
            </>
        )}
      </div>
      <div  className="leaderboard-container">
      {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <div className="leaderboard-content table-responsive my-4 mx-auto">
            <table className="table text-center table-bordered table-dark h5 text-uppercase">
              <tr>
                <th colspan="5" className='leaderboard-title'>Leaderboard Of your Department</th>
              </tr>
              <tr className='text-danger'>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">Department</th>
                <th scope="col">Game</th>
              </tr>
              {
                leaderboardData.filter((data)=>data.department === userData?.designation ).slice(0,10).map((data,index)=>{
                  return (
                  <tr className='text-warning'>
                    <th scope="row">{index+1}</th>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                    <td>{data.department}</td>
                    <td>{data.game}</td>
                  </tr>
                  )
                })
              }
            </table>
            </div>
            </>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
