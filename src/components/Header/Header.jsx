import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import mg from "../../assets/images/mg-logo.jpg";
function Header() {
  let history = useHistory();
  const user = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(user);
  // useEffect(() => {
  //   return () => {
  //     setUsername(JSON.parse(localStorage.getItem('auth'))?.username);
  //   }
  // });
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#000000" }}
      >
        <Link className="navbar-brand" title='Minature Games Portal' to='/'>
          <div className="top-logo">
              <img
                className="mainlogo "
                alt=""
                width="50"
                height="40"
                src={mg}
              />
          </div>
        </Link>
        <button
          className="navbar-toggler btn-info btn bg-danger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav text-uppercase mx-auto farkonium mr-auto navb-font">
            <li className="nav-item  mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                className="nav-link text-center navb-font"
                to='/'
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                className="nav-link text-center navb-font"
                to="/games"
              >
                Games
              </Link>
            </li>
            <li className="nav-item  mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                className="nav-link text-center navb-font"
                to='/leaderboard'
              >
                Leaderboard
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                className="nav-link text-center navb-font"
                to="/contactus"
              >
                Contactus
              </Link>
            </li>
                {
                  user.userdata?.username?
                  <div>
                    <li className="nav-item  mr-5">
                      <span
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        className="nav-link pointer text-center navb-font"
                        // to='/login'
                        onClick={()=>{
                          localStorage.clear();
                          dispatch({ type: 'increment' });
                          history.push('/login');
                        }}
                      >
                        Log-out
                      </span>
                    </li>
                  </div>:
                  <>
                    <li className="nav-item mr-5">
                      <Link
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        className="nav-link text-center navb-font"
                        to='/login'
                      >
                        login
                      </Link>
                    </li>
                    <li className="nav-item  mr-5">
                      <Link
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        className="nav-link text-center navb-font"
                        to='/register'
                      >
                        Register
                      </Link>
                    </li>
                  </>
                }

            {/* <li className="nav-item mr-5">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                className="nav-link text-center navb-font"
                to='/login'
                onClick={()=>{localStorage.removeItem('auth')}}
              >
                Log-out
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
