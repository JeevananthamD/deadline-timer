import React from "react";

const Timer = ({days, hours,minutes,seconds}) => {
    return(
        <div id="Timer">
            <div><p className="time">{days}</p><p className="units">Days</p></div>
            <div className="colon">:</div>
            <div><p className="time">{hours}</p><p className="units">Hours</p></div>
            <div className="colon">:</div>
            <div><p className="time">{minutes}</p><p className="units">Minutes</p></div>
            <div className="colon">:</div>
            <div><p className="time">{seconds}</p><p className="units">Seconds</p></div>
        </div>
    );
}

export default Timer;