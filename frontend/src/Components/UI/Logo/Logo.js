import React from "react";
import logoImage from "../../../assets/images/hotel-app-logo.png";
import "./Logo.css";

const Logo = props => (
   <div className={`Logo ${props.styles}Logo`}>
      <img src={logoImage} alt="Hello World"/>
   </div>
)

export default Logo;