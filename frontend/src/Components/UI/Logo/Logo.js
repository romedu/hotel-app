import React from "react";
import "./Logo.css";

const Logo = props => (
   <div className={"Logo"} style={props.styles}>
      <img src={props.hotelLogo} alt="Hello World"/>
   </div>
)

export default Logo;