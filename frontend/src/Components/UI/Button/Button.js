import React from "react";

const Button = props => {
    let styles={
        backgroundColor: (props.bgColor || "black"),
        color: (props.color || "white"),
        padding: ("1vh 3vw"),
        margin: (props.margin || "1vh 0"),
        textAlign: "center",
        border: "none",
        borderRadius: (props.border || "4px"),
        width: props.width,
        fontSize: "1.2em"
    };
    
    return (
    <button style={styles}>
        {props.children}
    </button>);
};

export default Button;