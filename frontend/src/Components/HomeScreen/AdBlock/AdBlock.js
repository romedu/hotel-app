import React from "react";
import {capitalizeString} from "../../../helpers";
import "./AdBlock.css";

const AdBlock = ({activity}) => (
    <div className="Ad">
        <img src={activity.icon} alt={activity.name}/> 
        <h3> Today you should try "{capitalizeString(activity.name)}"! </h3>
    </div>
);

export default AdBlock;