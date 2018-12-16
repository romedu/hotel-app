import React, {Component} from "react";
import {connect} from "react-redux";
import {NavLink, Switch, Route, Redirect} from "react-router-dom";
import AuthForm from "../../Components/AuthForm/AuthForm";
import Logo from "../../Components/UI/Logo/Logo";
import {loginUser} from "../../store/actions/user";
import "./Authentication.css";

class Authentication extends Component {
    state = {
        register: {
            username: "",
            password: "",
            profileImage: ""
        },
        login: {
            username: "",
            password: ""
        }
    }
    
    changeHandler = (e, authType) => this.setState(prevState => {
        prevState[authType][e.name] = e.value;
        return {...prevState};
    });
    
    submitHandler = (e, authType) => {
        e.preventDefault();
        this.setState(prevState => {
            if(authType === "register" && !prevState[authType].profileImage.length) return {register: {...prevState.register, profileImage: undefined}};
            return null;
        }, () => this.props.onLoginHandler(authType, this.state[authType]));
    }
    
   render(){
      const {match} = this.props;

      return (
         <div className="Authentication">
            <Logo styles="Auth" />
            <NavLink to={`${match.url}/login`} className="Link" activeStyle={{transform: "scale(1.5em)", fontWeight: "bold"}}>
               Login
            </NavLink>
            <NavLink to={`${match.url}/register`} className="Link" activeStyle={{transform: "scale(1.5em)", fontWeight: "bold"}}>
               Register
            </NavLink>
            <Switch>
               <Route exact path={`${this.props.match.url}/:type`} render={() => <AuthForm changeHandler={this.changeHandler} submitHandler={this.submitHandler} {...this.state}/> } />
               <Redirect from="/" to={`/authentication/login`} />
            </Switch>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   onLoginHandler: (authType, body) => dispatch(loginUser(authType, body))
 });

export default connect(null, mapDispatchToProps)(Authentication);