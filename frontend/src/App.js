import React, {Component, Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Navigation from "./Containers/Navigation/Navigation";
import Hotel from "./Containers/Hotel/Hotel";
import {verifyToken} from "./store/actions/user";
import {getCategories} from "./store/actions/category";
import {getRestaurants} from "./store/actions/restaurant";
import './App.css';

class App extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      const token = localStorage.getItem("token"),
            {onCategoriesGet, onRestaurantsGet} = this.props;

      if(token) this.props.onTokenVerify(token);
      onCategoriesGet();
      onRestaurantsGet();
   }

   componentDidUpdate(){
      const {restaurants, categories} = this.props;
      if(restaurants && categories) this.setState({isLoading: false});
   }
  
   render() {
      const {isLoading} = this.state,
            content = !isLoading ? (
                                    <Fragment>
                                       <Navigation />
                                       <Hotel currentUser={this.props.user} />
                                       <div className="Computer"> 
                                       <h1> Work under contruction </h1>
                                       <h2> Please use a mobile device in portrait mode </h2>
                                       </div>
                                    </Fragment>
                                 ) : null;

      return (
      <BrowserRouter>
         <div className="App">
            {content}
         </div>
      </BrowserRouter>
      );
   }
}

const mapStateToProps = state => ({
  user: state.user,
  categories: state.category.list,
  restaurants: state.restaurant.list
});

const mapDispatchToProps = dispatch => ({
  onTokenVerify: token => dispatch(verifyToken(token)),
  onCategoriesGet: () => dispatch(getCategories),
  onRestaurantsGet: () => dispatch(getRestaurants),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);