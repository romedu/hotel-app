import React from "react";
import {Link} from "react-router-dom";
import New from "./New/New";

const News = props => {
    let styles = {
        width: "92vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    };
    
    let specialActivity = ["Foam Pool Party", "Karaoke", "Hoola Hoop Contest", "Spanish Classes", "Waterpolo", "Fireworks Show", "Paella By the Beach"],
        tonightBuffet = ["American Night", "Dominican Night", "Oriental Night", "International Night"],
        tonightShow = ["Magic Show", "Belly Dance", "Cirque Du Soleil", "Romeo & Juliet", "Comedy Show", "Merengue Night"];
    
    let reserveOptions = [
        {activity: "Menya Hataka", time: "Time: 8pm"},
        {activity: "Dolce Italia", time: "Time: 9pm"},
        {activity: "Corrido de Mexico", time: "Time: 8pm"},
        {activity: "Cantabrico", time: "Time: 9pm"},
        {activity: "Isla del Marisco", time: "Time: 8pm"},
        {activity: "Zumba", time: "Time: 9am"},
        {activity: "Scuba Diving", time: "Time: 11am"},
        {activity: "Spa", time: "Time: 3pm"}
    ];

    let myReseration = getRandomVal(reserveOptions);
     
    let reservations = (props.currentUser ? {path: "services/my-reservations", info: "Today Reservations", body: <span> {myReseration.activity} <div> {myReseration.time} </div></span>} 
                        : {path: "authentication/login", info: "Login to see your reservations", body:"→"});
                        
    function getRandomVal(options){
        return options[Math.floor(Math.random() * options.length)];
    }

    return (
        <div style={styles}>
            <Link to={reservations.path} style={{textDecoration: "none", color: "black"}}><New label={reservations.info}> {reservations.body} </New></Link>
            <New label="Today Special Activity"> {getRandomVal(specialActivity)} <div> Time: 10am </div> </New>
            <New label="Tonight's Buffet"> {getRandomVal(tonightBuffet)} </New>
            <New label="Tonight's Show"> {getRandomVal(tonightShow)} </New>
        </div>
    );
};

export default News;