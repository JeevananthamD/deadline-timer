import React from "react";

const Timer = () => {
    return(
        <div id="Timer">
            <div className="time"><p>156</p><p>Days</p></div>
            <div className="colon">:</div>
            <div className="time"><p>22</p><p>Hours</p></div>
            <div className="colon">:</div>
            <div className="time"><p>56</p><p>Minutes</p></div>
            <div className="colon">:</div>
            <div className="time"><p>23</p><p>Seconds</p></div>
        </div>
    );
}

export default Timer;