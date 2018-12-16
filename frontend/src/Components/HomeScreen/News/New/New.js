import React from "react";
import "./New.css";

const New = props => (
   <div className="New">
      <h3>
         {props.label}
      </h3>
      <div>
         {props.children}
      </div>
   </div>
);


export default New;