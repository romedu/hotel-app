import React, {Component} from "react";
import {NavLink, Switch, Route, Redirect, withRouter} from "react-router-dom";
import AuthForm from "../../Components/AuthForm/AuthForm";
import Logo from "../../Components/UI/Logo/Logo";
import logoImage from "../../assets/images/hotel-app-logo.png";
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
        }, () => this.props.authenticate(authType, this.state[authType]));
    }
    
    render(){
        let logoStyles = {
            height: "30vh",
            width: "50vw",
            margin: "0 auto 4vh"
        };
        
        return (
            <div className="Authentication">
                <Logo styles={logoStyles} hotelLogo={logoImage}/>
                <NavLink to={`${this.props.match.url}/login`} className="Link" activeStyle={{transform: "scale(1.5em)", fontWeight: "bold"}}> Login </NavLink>
                <NavLink to={`${this.props.match.url}/register`} className="Link" activeStyle={{transform: "scale(1.5em)", fontWeight: "bold"}}> Register </NavLink>
                <Switch>
                    <Route exact path={`${this.props.match.url}/:type`} 
                        render={() => (
                            <AuthForm changeHandler={this.changeHandler} authenticate={this.props.authenticate} submitHandler={this.submitHandler} {...this.state}/>
                        )}
                    />
                    <Redirect from="/" to={`/authentication/login`} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Authentication);