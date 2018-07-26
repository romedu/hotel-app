import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import HomeScreen from "../../Components/HomeScreen/HomeScreen";
import Profile from "../Profile/Profile";
import Category from "../Category/Category";
import Authentication from "../Authentication/Authentication";
import NoMatch from "../../Components/Error/NoMatch";

const Hotel = props => (
    <div>
        <Switch>
            {props.currentUser ? <Redirect from="/login" to="/my-profile"/> : <Redirect from="/my-profile" to="/authentication"/>}
            {props.currentUser ? <Redirect from="/register" to="/my-profile"/> : <Redirect from="/register" to="/authentication"/>}
            {props.currentUser ? <Redirect from="/authentication" to="/my-profile"/> : <Redirect from="/login" to="/authentication"/>}
            <Route exact path="/" render={() => <HomeScreen currentUser={props.currentUser}/>} />
            <Route path="/my-profile" render={() => <Profile currentUser={props.currentUser} />} />
            <Route path="/activities" render={() => <Category kingdom="activity" name="Activities" />} />
            <Route path="/menu" render={() => <Category kingdom="restaurant" name="Menu" />} />
            <Route path="/services" render={() => <Category kingdom="service" name="Services" />} />
            <Route path="/authentication" render={() => <Authentication authenticate={props.authenticate} />} />
            <Route component={NoMatch} />
        </Switch>
    </div>
);

export default Hotel;