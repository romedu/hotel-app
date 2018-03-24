import React from "react";
import hotelLogo from "../../../assets/images/hotel-app-logo.png";
import Class from "./Logo.css";

const Logo = props => (
   <div className={Class.Logo} style={props.styles}>
      <img src={hotelLogo} alt="Hello World"/>
   </div>
)

export default Logo;