import React from "react";
import logoImage from "../../../assets/images/hotel-app-logo.png";
import cleanLogoImage from "../../../assets/images/hotel-app-clean-logo.png";
import "./Logo.css";

const Logo = ({styles}) => (
   <div className={`Logo ${styles}Logo`}>
      <img src={styles === "Auth" ? logoImage : cleanLogoImage} alt="Hello World"/>
   </div>
)

export default Logo;