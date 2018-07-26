import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import {connect} from "react-redux";
import './App.css';
import Toolbar from "./Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./Components/Navigation/SideDrawer/SideDrawer";
import Hotel from "./Containers/Hotel/Hotel";
import * as actions from "./store/actions/user";
import * as actionTypes from "./store/actions/actionTypes";

class App extends Component {
  state = {
    showSideDrawer: false
  }

  componentDidMount(){
    let token = localStorage.getItem("token");
    if(token) return this.props.onTokenVerify(token);
  }

  showSideDrawerHandler = () => this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}));
  hideSideDrawerHandler = () => this.setState(prevState => ({showSideDrawer: false}));
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar toggleMenu={this.showSideDrawerHandler} currentUser={this.props.currentUser} logout={this.props.onLogoutHandler}/>
          <SideDrawer showing={this.state.showSideDrawer} toggle={this.showSideDrawerHandler} hide={this.hideSideDrawerHandler} currentUser={this.props.currentUser}/>
          <Hotel currentUser={this.props.currentUser} authenticate={this.props.onLoginHandler} logout={this.props.onLogoutHandler}/>
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