import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Navigation from "./Containers/Navigation/Navigation";
import Hotel from "./Containers/Hotel/Hotel";
import {verifyToken} from "./store/actions/user";
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
          <Hotel currentUser={this.props.user} />
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
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onTokenVerify: token => dispatch(verifyToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);