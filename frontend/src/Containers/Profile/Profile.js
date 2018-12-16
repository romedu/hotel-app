import React, {Fragment} from "react";
import Button from "../../Components/UI/Button/Button";
import {Link} from "react-router-dom";
import "./Profile.css";

const Profile = props => {
   const {currentUser, userReservation} = props,
         {username, profileImage} = currentUser,
         yourReservation = userReservation ? (
                              <Fragment>
                                 <h4>
                                    {userReservation.name}
                                 </h4>
                                 <img src={userReservation.image} alt="" />
                                 <Button width="65vw">
                                    <Link to={`/restaurant/${userReservation._id}/menu`} style={{textDecoration: "none", color: "white"}}>
                                       Click here to check the menu
                                    </Link>
                                 </Button>
                              </Fragment>
                           ) : (
                              <Button width="65vw">
                                 <Link to={"/restaurant"} style={{textDecoration: "none", color: "white"}}>
                                    Click here to make a reservation
                                 </Link>
                              </Button>
                           )
    
   return (
      <div className="Profile">
         <h1>
            My Profile
         </h1>
         <img src={profileImage} alt={username}/>
         <h2>
            {username}
         </h2>
         <div>
            <h3>
               Your Reservation
            </h3>
            {yourReservation}
         </div>
      </div>
   );
};

export default Profile;