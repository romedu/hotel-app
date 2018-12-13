import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {UserFacade} from "../../UI/UserFacade/UserFacade";
import {capitalizeString, kebabCaseString} from "../../../helpers";
import "./NavItems.css";

const NavItems = props => {
   const authLink = (
      <NavLink to="/authentication/login" className="userless" activeClassName={""} onClick={props.hide}>
         <h3> Login </h3>
         <h3 style={{display: "block"}}> or </h3>
         <h3> Register </h3>
      </NavLink>
   );

   const restaurantsLinks = (
      <li>
         <h5>
            Restaurants
         </h5>
         <ul className="subItems">
            {restaurants.map(restaurant => (
               <li>
                  <NavLink to={`/restaurant/${restaurant._id}`} key={restaurant._id} activeClassName={"active"} className="NavItem" onClick={props.hide}>
                     <img src={restaurant.icon} alt="•" />
                     {capitalizeString(restaurant.name)} 
                  </NavLink>
               </li>
            ))}
         </ul>
      </li>
   );

   //this is used to create a link for all the products in each category
   const productsLinks = props.categories.map(category => (
      <li key={category._id}>
         <h5>
            {capitalizeString(category.name)}
         </h5>
         <ul className="subItems">
            {category.products.map(product => (
               <li>
                  <NavLink to={`/activities/${kebabCaseString(category.name)}/${product._id}`} key={product._id} activeClassName={"active"} className="NavItem" onClick={props.hide}>
                     <img src={product.icon} alt="•" />
                     {capitalizeString(product.name)} 
                  </NavLink>
               </li>
            ))}
         </ul>
      </li>
   ));

   return (
   <ul className={`NavItems ${(!props.showing) ? "Hide" : null} ${(props.currentUser) ? "userful" : null}`}>
      {props.currentUser ? <UserFacade currentUser={props.currentUser} /> : authLink}
      <NavLink to="/my-profile" activeClassName={"active"} className="NavItem" onClick={props.hide}> My Profile </NavLink>
      {restaurantsLinks}
      {productsLinks}
   </ul>);
}

const mapStateToProps = state => ({
   categories: state.category.list,
   restaurants: state.restaurant.list
});

export default connect(mapStateToProps)(NavItems);