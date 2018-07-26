import React from "react";
import {NavLink} from "react-router-dom";
import UserFacade from "../../UI/UserFacade/UserFacade";
import gym from "../../../assets/images/gym.png";
import zumba from "../../../assets/images/zumba.png";
import scubaDiving from "../../../assets/images/scuba-diving.png";
import theater from "../../../assets/images/theater.png";
import cinema from "../../../assets/images/cinema.png";
import tours from "../../../assets/images/tours.png";
import spa from "../../../assets/images/spa.png";
import japan from "../../../assets/images/japan.png";
import italy from "../../../assets/images/italy.png";
import mexico from "../../../assets/images/mexico.png";
import spain from "../../../assets/images/spain.png";
import greece from "../../../assets/images/greece.png";
import roomService from "../../../assets/images/room-service.png";
import location from "../../../assets/images/location.png";
import calendar from "../../../assets/images/calendar.png";
import payment from "../../../assets/images/payment.png";
import "./NavItems.css";

const NavItems = props => {
   let userLinks = (
      <NavLink to="/authentication/login" className="userless" activeClassName={""} onClick={props.hide}>
         <h3> Login </h3>
         <h3 style={{display: "block"}}> or </h3>
         <h3> Register </h3>
      </NavLink>
   );
   
   if(props.currentUser) userLinks = <UserFacade currentUser={props.currentUser} />;
   
   return (
   <ul className={`NavItems ${(!props.showing) ? "Hide" : null} ${(props.currentUser) ? "userful" : null}`}>
      {userLinks}
      <NavLink to="/my-profile" activeClassName={"active"} className="NavItem" onClick={props.hide}> My Profile </NavLink>
      <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}> Activities </NavLink>
         <ul className="subItems">
            <li>
               <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={gym} alt="•" />
                  Gym 
               </NavLink>
            </li>
            <li>
               <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={zumba} alt="•" />
                  Zumba 
               </NavLink>
            </li>
            <li>
               <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={scubaDiving} alt="•" />
                  Scuba-Diving 
               </NavLink>
            </li>
            <li>
               <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={theater} alt="•" />
                  Theater 
               </NavLink>
            </li>
            <li>
               <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={cinema} alt="•" />
                  Cinema 
               </NavLink>
            </li>
            <li>
               <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={tours} alt="•" />
                  Tour 
               </NavLink>
            </li>
            <li>
               <NavLink to="/activities" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={spa} alt="•" />
                  Spa 
               </NavLink>
            </li>
         </ul>
      <NavLink to="/menu" activeClassName={"active"} className="NavItem" onClick={props.hide}> Menu </NavLink>
         <ul className="subItems">
            <li>
               <NavLink to="/menu" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={japan} alt="•" />
                  Menya Hakata 
               </NavLink>
            </li>
            <li>
               <NavLink to="/menu" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={italy} alt="•" />
                  Dolce Italia 
               </NavLink>
            </li>
            <li>
               <NavLink to="/menu" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={mexico} alt="•" />
                  Corrido de Mexico 
               </NavLink>
            </li>
            <li>
               <NavLink to="/menu" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={spain} alt="•" />
                  Cantabrico 
               </NavLink>
            </li>
            <li>
               <NavLink to="/menu" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={greece} alt="•" />
                  Isla del Marisco 
               </NavLink>
            </li>
            <li>
               <NavLink to="/menu" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={roomService} alt="•" />
                  Room Service 
               </NavLink>
            </li>
         </ul>
      <NavLink to="/services" activeClassName={"active"} className="NavItem" onClick={props.hide}> Services </NavLink>
         <ul className="subItems">
            <li>
               <NavLink to="/services" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={location} alt="•" />
                  Where am I? 
               </NavLink>
            </li>
            <li>
               <NavLink to="/services" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={calendar} alt="•" />
                  My Reservations 
               </NavLink>
            </li>
            <li>
               <NavLink to="/services" activeClassName={"active"} className="NavItem" onClick={props.hide}>
                  <img src={payment} alt="•" />
                  Balance 
               </NavLink>
            </li>
         </ul>
   </ul>);
};

export default NavItems;