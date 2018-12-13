import React from "react";
import {Link} from "react-router-dom";
import "./Toolbar.css";
import Logo from "../../UI/Logo/Logo";
import logoImage from "../../../assets/images/hotel-app-clean-logo.png";
import settingsImage from "../../../assets/images/settings.png";
import NavItems from "../NavItems/NavItems";
import Hamburger from "../Hamburger/Hamburger";

const Toolbar = props => (
   <header className="Toolbar">
      <Hamburger toggleMenu={props.toggleMenu}/>
      <Link to="/" style={{height: "80%"}}>
         <Logo styles={{height: "100%"}} hotelLogo={logoImage}/>
      </Link>
      <img src={settingsImage} alt="SE" className="Settings" />
      <nav className="DesktopOnly">
         <NavItems />
      </nav>
   </header>
);

export default Toolbar;