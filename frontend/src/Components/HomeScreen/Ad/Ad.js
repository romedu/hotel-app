import React from "react";
import "./Ad.css";

const Ad = props => (
    <div className="Ad">
        <img src={props.activity.icon} alt={props.activity.name}/> 
        <h3> Today you should try "{props.activity.name}"! </h3>
    </div>
);

export default Ad;