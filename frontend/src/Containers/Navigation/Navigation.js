import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import {getCategories} from "../../store/actions/category";
import {getRestaurants} from "../../store/actions/restaurant";
import {LOGOUT} from "./store/actions/actionTypes";

class Navigation extends Component {
   state = {
      showSideDrawer: false
    }

   componentDidMount(){
      const {onCategoriesGet, onRestaurantsGet} = this.props;
      onCategoriesGet();
      onRestaurantsGet();
   }

   toggleSideDrawerHandler = () => this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}));
   hideSideDrawerHandler = () => this.setState({showSideDrawer: false});

   render(){
      return (
         <Fragment>
            <Toolbar toggleMenu={this.toggleSideDrawerHandler} />
            <SideDrawer showing={this.state.showSideDrawer} hide={this.hideSideDrawerHandler} />
         </Fragment>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   onCategoriesGet: () => dispatch(getCategories),
   onRestaurantsGet: () => dispatch(getRestaurants),
   onLogoutHandler: () => dispatch({type: LOGOUT}),
});

export default connect(null, mapDispatchToProps)(Navigation);