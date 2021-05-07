import React from "react";

const InputField = ({getInput}) => {
    return(
        <input type="date" id="InputField" onChange={getInput}/>
    );
}

export default InputField;