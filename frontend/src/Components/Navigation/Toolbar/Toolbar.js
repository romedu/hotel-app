import React from "react";
import Class from "./Toolbar.css";
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Hamburger from "../Hamburger/Hamburger";

const Toolbar = props => (
   <header className={Class.Toolbar}>
      <div onClick={props.toggleMenu}> <Hamburger /> </div>
      <Logo styles={{height: "80%"}}/>
      <nav className={Class.DesktopOnly}>
         <NavItems />
      </nav>
   </header>
);

export default Toolbar;