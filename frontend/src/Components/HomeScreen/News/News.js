import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import New from "./New/New";
import styles from "./News.module.css";

const News = props => {
   let reservationNew;
   const {currentUser, reservation, dailyQuote, weather} = props,
         currentDate = new Date(),
         weatherData = !weather ? <div> Weather is not available </div>
                               : (
                                  <Fragment>
                                     <div>
                                       {weather.description}
                                    </div>
                                    <img src={weather.image} alt="" />
                                    <div>
                                       {weather.temp_f}
                                       <br />
                                       {weather.temp_c}
                                    </div>
                                  </Fragment>
                               );

   if(!currentUser){
      reservationNew = (
         <Link to="/authentication/login">
            <New label="Login to see your reservations">
               →
            </New>
         </Link>
      )
   }
   else if(!reservation){
      reservationNew = (
         <Link to="/restaurants">
            <New label="Tonight's Reservation">
               Click here to make a reservation
               <br />
               →
            </New>
         </Link>
      )
   }
   else {
      reservationNew = (
         <Link to={`/restaurants/${reservation._id}/menu`}>
            <New label="Tonight's Reservation">
               <div>
                  {reservation.name}
               </div>
               <div>
                  Check the menu
                  <br />
                  →
               </div>
            </New>
         </Link>
      )
   }

   return (
      <div style={styles}>
         <New label="Today's Weather"> 
            {weatherData}
         </New>
         <New label="Today's Date"> 
            <div>
               {currentDate.getDay()}
            </div>
            <h5>
               {currentDate.getDate()}
            </h5>
            <div>
               {`${currentDate.getMonth()}, ${currentDate.getFullYear()}`}
            </div>
         </New>
         <New label="Daily Quote">
            <div>
               {dailyQuote.quote}
            </div> 
            <h6>
               {dailyQuote.author}
            </h6>
         </New>
         {reservationNew}
      </div>
   );
};

export default News;