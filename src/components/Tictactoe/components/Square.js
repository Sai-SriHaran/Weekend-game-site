import React from "react";

const Square = ({value, onClick}) => {
    const style = value ? `squares ${value}` : `squares`;
    return(
        <div  className={style} onClick={onClick}>
            {value}
        </div>
    )
}
export default Square;