import React from "react";
import {Link} from "react-router-dom";
import styles from "./Main.module.css";

const Main = ({currentUser}) => {
   const content = currentUser ? <Link to="/">
                                    <h2> 
                                       Login
                                    </h2>
                                       or   
                                    <h2>
                                       Register 
                                    </h2>
                                       →
                                 </Link>
                               : <Link to="/my-profile">
                                    You have {currentUser && currentUser.daysAsGuest} day(s) as a guest in the hotel
                                 </Link>; 
    
   return (
       <div className={styles.Main}>
           {content}
       </div>
   );
};

export default Main;