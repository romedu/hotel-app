import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import {connect} from "react-redux";
import Navigation from "./Containers/Navigation/Navigation";
import Hotel from "./Containers/Hotel/Hotel";
import * as actions from "./store/actions/user";
import * as actionTypes from "./store/actions/actionTypes";
import './App.css';

class App extends Component {
  state = {
    showSideDrawer: false
  }

  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token) return this.props.onTokenVerify(token);
  }

  showSideDrawerHandler = () => this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}));
  hideSideDrawerHandler = () => this.setState(prevState => ({showSideDrawer: false}));
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Hotel currentUser={this.props.currentUser} authenticate={this.props.onLoginHandler} />
          <div className="Computer"> 
            <h1> Work under contruction </h1>
            <h2> Please use a mobile device in portrait mode </h2>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoginHandler: (authType, body) => dispatch(actions.loginUser(authType, body)),
  onLogoutHandler: () => dispatch({type: actionTypes.LOGOUT}),
  onTokenVerify: token => dispatch(actions.verifyToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);