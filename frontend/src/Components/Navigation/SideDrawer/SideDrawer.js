import React, {Fragment} from "react";
import NavItems from "../NavItems/NavItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => (
   <Fragment>
      <Backdrop show={props.showing} hide={props.hide}/>
      <div className={`SideDrawer ${props.showing ? "Open" : "Close"}`}>
         <nav>
            <NavItems hide={props.hide} showing={props.showing} currentUser={props.currentUser}/>
         </nav>
      </div>   
   </Fragment>
);

export default SideDrawer;