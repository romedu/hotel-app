import React from "react";
import {Link} from "react-router-dom";

const Main = props => {
  let styles = {
      width: "100%",
      height: "45vh",
      paddingTop: "10vh",
      backgroundColor: "#f2f4f7",
      textAlign: "center"
  };
  
  let timeLeftStyle = {
        width: "21vw",
        height: "12vh",
        margin: "auto",
        marginBottom: "2em",
        border: "3vw solid lightgray",
        borderRadius: "50%",
        borderTopColor: "lightgray",
        borderLeftColor: "lightgray",
        borderRightColor: "lightgray",
        borderBottomColor: "lightgray"
  };
  
  let timeLeftSides = ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"];

  let timeLeft = Math.round(Math.random() * timeLeftSides.length);
  
  for(let i = 0; i < timeLeft; i++){
    timeLeftStyle[timeLeftSides[i]] = "rgb(0, 255, 105)";
  }
  
  let info = (
    <Link to="/authentication" style={{textDecoration: "none", color: "black"}}>
      <h1> Login <br/> or <br/> Register <br/> → </h1>
    </Link> 
  );
  
  if(props.currentUser){
    let {username} = props.currentUser;
    info = (<div>
      <h2> Hello, {username} </h2>
      <div style={timeLeftStyle} className="Circle">
      </div>
      <div style={{fontSize: "1.1em", fontWeight: "bold"}}> You have {4-timeLeft} {timeLeft === 3 ? "day" : "days"} left </div>
      {timeLeft === 4 || timeLeft === 3 ? <div> Dont forget the checkout is at 3pm </div> :null}
    </div>);
  }
    
    return (
        <div style={styles}>
            {info}
        </div>
    );
};

export default Main;