import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import {connect} from "react-redux";
import Navigation from "./Containers/Navigation/Navigation";
import Hotel from "./Containers/Hotel/Hotel";
import * as actions from "./store/actions/user";
import './App.css';

class App extends Component {
  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token) return this.props.onTokenVerify(token);
  }
  
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
  onTokenVerify: token => dispatch(actions.verifyToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);