import React from "react";
import Button from "../../Components/UI/Button/Button";
import {Link} from "react-router-dom";
import "./Profile.css";

const Profile = props => {
    let {username, profileImage} = props.currentUser;
    
    return (
    <div className="Profile">
       <h1> My Profile </h1>
       <img src={profileImage} alt={username}/>
       <h2> {username} </h2>
       <Button width="65vw"><Link to="/services/my-reservations" style={{textDecoration: "none", color: "white"}}> Your Reservations </Link></Button>
       <Button width="65vw"><Link to="/services/balance" style={{textDecoration: "none", color: "white"}}> Your Balance </Link></Button>
    </div>
    );
};

export default Profile;