import React from "react";

const Timer = ({days, hours,minutes,seconds}) => {
    return(
        <div id="Timer">
            <div className="time"><p>{days}</p><p>Days</p></div>
            <div className="colon">:</div>
            <div className="time"><p>{hours}</p><p>Hours</p></div>
            <div className="colon">:</div>
            <div className="time"><p>{minutes}</p><p>Minutes</p></div>
            <div className="colon">:</div>
            <div className="time"><p>{seconds}</p><p>Seconds</p></div>
        </div>
    );
}

export default Timer;