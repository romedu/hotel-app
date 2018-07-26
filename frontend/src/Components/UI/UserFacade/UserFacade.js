import React from "react";
import "./UserFacade.css";
import altUser from "../../../assets/images/user.png";

const UserFacade = props => {
    let user = props.currentUser;
    return (
        <div className="Facade">
            <div className="Image">
                <img src={user.profileImage} alt={altUser}/>
            </div>
            <h3> {user.username} </h3>
        </div>
    );
};

export default UserFacade;