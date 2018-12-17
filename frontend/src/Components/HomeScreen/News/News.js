import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import New from "./New/New";
import styles from "./News.module.css";

const News = props => {
   let reservationNew;
   const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         {currentUser, reservation, dailyQuote, weather} = props,
         currentDate = new Date(),
         weatherData = !weather ? <div> Weather is not available </div>
                               : (
                                  <Fragment>
                                     <div>
                                       {weather.description}
                                    </div>
                                    <img src={weather.image} alt="" />
                                    <div>
                                       {weather.temp_f}° F
                                       <br />
                                       {weather.temp_c}° C
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
      <div className={styles.News}>
         <New label="Today's Weather"> 
            {weatherData}
         </New>
         <New label="Today's Date"> 
            <div>
               {weekDays[currentDate.getDay()]}
            </div>
            <div>
               {currentDate.getDate()}
            </div>
            <div>
               {`${months[currentDate.getMonth()]}, ${currentDate.getFullYear()}`}
            </div>
         </New>
         <New label="Daily Quote">
            <div>
               {dailyQuote.quote}
            </div> 
            <div>
               {dailyQuote.author}
            </div>
         </New>
         {reservationNew}
      </div>
   );
};

export default News;