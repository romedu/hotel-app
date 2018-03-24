import React from "react";
import Class from "./NavItem.css";

const NavItem = props => (
   <li className={Class.NavItem}>
      <a href={props.url} className={props.active ? Class.active : null}> {props.children} </a>
   </li>
);

export default NavItem;
