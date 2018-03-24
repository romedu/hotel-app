import React from "react";
import Class from "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const NavItems = props => (
   <ul className={Class.NavItems}>
      <NavItem url={"#"} active> My Profile </NavItem>
      <NavItem url={"#"}> Activities </NavItem>
      <NavItem url={"#"} active> Menu </NavItem>
      <NavItem url={"#"}> Services </NavItem>
   </ul>
)

export default NavItems;