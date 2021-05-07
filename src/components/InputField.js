import React from "react";

const InputField = ({getInput, value}) => {
    return(
        <input type="date" id="InputField" onChange={getInput} value={value}/>
    );
}

export default InputField;