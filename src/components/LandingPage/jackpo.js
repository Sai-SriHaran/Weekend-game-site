import React from "react";
import jack from "../../assets/images/jack.jpg";
import live from "../../assets/images/live.png";
import bonus from "../../assets/images/bonus.png";

function Jackpot() {
  return (
    <div className="mx-3 mx-md-5 mx-lg-5 mx-xl-5  my-5">
      <div className="card mb-3 con-back py-5 px-0 px-md-5 px-lg-5 px-xl-5 jackpot-border2">
        <div className="row h-100 no-gutters ">
          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-4 ">
            <img src={jack} width="100%" alt='jackpot' />
          </div>
          <div className="col-md-8 ">
            <div className="card-body ">
              {/* first jumbotron */}
              <div className="jumbotron jackpot-border jumbo-test pb-0 pt-3 wow fadeIn ">
                <div className="text-center">
                  <img src={live} style={{ width: "10%" }} alt='live' className="float-left" />
                </div>
                <div className="row h-100 mx-auto jumbotron-font">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4 className="live">Live Online Game</h4>
                  </div>
                </div>
                <div className="row h-100 mx-auto jumbo-head">
                  <div className="col-sm-12 col-md-12 col-lg-11 col-xl-12">
                    <p className="livepara ">
                      The platform streams live games keeping the creator’s
                      efficiency and viewers interest in priority. It involves
                      lesser cost, attracts real-time active users and consumes
                      less production time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="jumbotron jackpot-border jumbo-test pb-0 pt-3 wow fadeIn">
                <div className="text-center">
                  <img
                    src={bonus}
                    style={{ width: "10%" }}
                    className="float-left"
                    alt='bonus'
                  />
                </div>
                <div className="row h-100 mx-auto jumbotron-font">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <h4 className="live">Instant Points</h4>
                  </div>
                </div>
                <div className="row h-100 mx-auto jumbo-head">
                  <div className="col-sm-12 col-md-12 col-lg-11 col-xl-12">
                    <p className="extenApp ">
                      Make your work-breaks fun and rewarding! Choose your
                      favourite game and start earning points for playing
                      games.Go on, have some fun!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jackpot;
