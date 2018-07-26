import React from "react";
import "./TextInput.css";

const TextInput = props => {
    let placeholder = props.name.split("").reduce((accumulator, nextVal) => {
        if(nextVal === nextVal.toUpperCase()){
            accumulator.push(" ");
        } 
        accumulator.push(nextVal.toLowerCase());
        return accumulator;
    }, []).join("");
    
    return (
        <input type={props.name === "password" ? props.name : "text"} name={props.name} value={props.value} 
        placeholder={placeholder} autoComplete="off" 
        onChange={e => props.changeHandler(e.target, props.authType)} className={"TextInput"} />
    );
};

export default TextInput;