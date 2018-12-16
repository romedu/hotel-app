import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import Main from "../../Components/HomeScreen/Main/Main";
import News from "../../Components/HomeScreen/News/News";
import AdBlock from "../../Components/HomeScreen/AdBlock/AdBlock";
import "./HomeScreen.css";

class HomeScreen extends Component {
   state = {
      isLoading: true,
      weatherData: null
   }

   componentDidMount(){
      //this is used to get the weather of the user's current location
      navigator.geolocation.getCurrentPosition(position => {
         const {latitude, longitude} = position.coords;
         if(latitude && longitude){
            axios.get(`http://api.weatherunlocked.com/api/current/${latitude.toFixed(2)},${longitude.toFixed(2)}?app_id=dea94c5d&app_key=4a1c9fb5388f624ceaeb42a9862778e8`)
               .then(response => response.data)
               .then(weatherData => {
                  const {wx_desc: description, wx_icon: image, temp_c, temp_f} = weatherData;
                  return this.setState({weatherData: {description, image, temp_c, temp_f}});
               })
               .catch(error => {
                  return this.setState({weatherData: false});
               })
         }
         else return this.setState({weatherData: false});
      })
   }

   componentDidUpdate(prevProps, prevState){
      if(prevState.weatherData !== this.state.weatherData) this.setState({isLoading: false});
   }

   render(){
      const {categories, user} = this.props,
            {currentUser, reservation: userReservation} = user;

      //this is used to get only the products from categories related to activities
      const activities = categories.filter(category => category.name.toLowerCase().includes("activit")).reduce((acc, nextCategory) => {
        return acc.concat(nextCategory.products);
      }, []);
  
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      
      return (<div className="Home">
                  <Main currentUser={currentUser}/>
                  <div className="Info">
                     <AdBlock activity={randomActivity}/>
                     <News currentUser={currentUser} reservation={userReservation} dailyQuote={this.props.dailyQuote} weather={this.state.weatherData} />
                  </div>
              </div>);
   }
}

const mapStateToProps = state => ({
   user: state.user,
   categories: state.category.list
})

export default connect(mapStateToProps)(HomeScreen);