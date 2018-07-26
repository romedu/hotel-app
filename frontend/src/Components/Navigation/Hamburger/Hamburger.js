import React from "react";
import "./Hamburger.css";

const Hamburger = props => (
   <div className={"Hamburger"} onClick={props.toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
   </div>
);

export default Hamburger;