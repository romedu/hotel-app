import React from "react";
import {Link} from "react-router-dom";
import Main from "../../Components/HomeScreen/Main/Main";
import News from "../../Components/HomeScreen/News/News";
import AdBlock from "../../Components/HomeScreen/AdBlock/AdBlock";
import "./HomeScreen.css";
import gymIcon from "../../assets/images/gym.png";
import zumbaIcon from "../../assets/images/zumba.png";
import scubaIcon from "../../assets/images/scuba-diving.png";
import theaterIcon from "../../assets/images/theater.png";
import cinemaIcon from "../../assets/images/cinema.png";
import toursIcon from "../../assets/images/tours.png";
import spaIcon from "../../assets/images/spa.png";

const HomeScreen = props => {
    let  adActivities = [
        {name: "Gym", icon: gymIcon}, 
        {name:"Zumba", icon: zumbaIcon},
        {name:"Scuba-Diving", icon: scubaIcon}, 
        {name:"Theater", icon: theaterIcon},
        {name:"Cinema", icon: cinemaIcon},
        {name:"Tours", icon: toursIcon}, 
        {name:"Spa", icon: spaIcon}
    ];
    let randomActivity = adActivities[Math.floor(Math.random() * adActivities.length)];
    let path = randomActivity.name.toLowerCase().split(" ").join("-");
    
    return (<div className="Home">
                <Main currentUser={props.currentUser}/>
                <div className="Info">
                    <Link to={`activities/${path}`} style={{textDecoration: "none", color: "black"}}>
                        <AdBlock activity={randomActivity}/>
                    </Link>
                    <News currentUser={props.currentUser}/>
                </div>
            </div>);
};

export default HomeScreen;