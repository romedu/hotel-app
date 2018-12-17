import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import axios from "../../axiosInstance";
import HomeScreen from "../HomeScreen/HomeScreen";
import Profile from "../Profile/Profile";
import Category from "../Category/Category";
import Authentication from "../Authentication/Authentication";
import NoMatch from "../../Components/Error/NoMatch";
import Restaurant from "../../Components/Restaurant/Restaurant";

class Hotel extends Component {
   state = {
      dailyQuote: null,
      isLoading: true
   }

   componentDidMount(){
      axios.get("/dailyQuote")
         .then(response => response.data)
         .then(dailyQuote => {
            if(dailyQuote.status && dailyQuote.status !== 200) throw new Error();
            return this.setState({dailyQuote})
         })
         .catch(error => {
            const noQuote = {
               quote: "There's no quote to display",
               author: ""
            };
            return this.setState({dailyQuote: noQuote})
         })
   }

   componentDidUpdate(prevProps, prevState){
      if(prevState.dailyQuote !== this.state.dailyQuote) this.setState({isLoading: false});
   }

   render(){
      const {dailyQuote, isLoading} = this.state,
            {currentUser, reservation} = this.props.user,
            content = isLoading ? null
                     : (
                        <Switch>
                           {currentUser ? <Redirect from="/login" to="/my-profile"/> : <Redirect from="/my-profile" to="/authentication"/>}
                           {currentUser ? <Redirect from="/register" to="/my-profile"/> : <Redirect from="/register" to="/authentication"/>}
                           {currentUser ? <Redirect from="/authentication" to="/my-profile"/> : <Redirect from="/login" to="/authentication"/>}
                           <Route exact path="/" render={() => <HomeScreen dailyQuote={dailyQuote} />} />
                           <Route path="/my-profile" render={() => <Profile currentUser={currentUser} userReservation={reservation} />} />
                           <Route path="/activities/:categoryName" component={Category} />
                           <Route path="/restaurants" component={Restaurant} />
                           <Route path="/authentication" component={Authentication} />
                           <Route component={NoMatch} />
                        </Switch>
                     );

      return (
         <div>
            {content}
         </div>
      );
   }
}

export default Hotel;