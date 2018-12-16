import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import {USER} from "../../store/actions/actionTypes";

class Navigation extends Component {
   state = {
      showSideDrawer: false
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
   onLogoutHandler: () => dispatch({type: USER.LOGOUT}),
});

export default connect(null, mapDispatchToProps)(Navigation);