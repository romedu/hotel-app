import React from "react";
import {capitalizeWord} from "../../../helpers";
import "./AdBlock.css";

const AdBlock = ({activity}) => (
    <div className="Ad">
        <img src={activity.icon} alt={activity.name}/> 
        <h3> Today you should try "{capitalizeWord(activity.name)}"! </h3>
    </div>
);

export default AdBlock;