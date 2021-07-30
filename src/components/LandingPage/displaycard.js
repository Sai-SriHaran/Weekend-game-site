import React from "react";
import { Link } from "react-router-dom";
function Displaycard(props) {
  return (
    <div className="col box-effect flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
            <img
              className="game-si"
              src={props.src}
              style={{ height: "250px", borderRadius: "10%" }}
              alt="gmaeImage"
            />
        </div>
        <div className="flip-card-back">
          <p>{props.description}</p>
          <Link to={props.location} className='btn btn-outline-danger'>PLay</Link>
        </div>
      </div>
    </div>
  );
}
export default Displaycard;
