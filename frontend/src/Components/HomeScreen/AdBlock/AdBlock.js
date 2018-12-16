import React from "react";
import {Link} from "react-router-dom";
import {capitalizeString} from "../../../helpers";
import "./AdBlock.css";

const AdBlock = ({activity}) => (
   <Link to={`activities/${activity._id}`} style={{textDecoration: "none", color: "black"}}>
      <div className="Ad">
        <img src={activity.icon} alt={activity.name}/> 
        <h3> Today you should try "{capitalizeString(activity.name)}"! </h3>
      </div>
   </Link>
);

export default AdBlock;