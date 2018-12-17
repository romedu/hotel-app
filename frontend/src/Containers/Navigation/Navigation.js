import React, {Component, Fragment} from "react";
import {withRouter} from "react-router-dom";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";

class Navigation extends Component {
   state = {
      showSideDrawer: false
    }

    componentDidUpdate(prevProps){
       const {showSideDrawer} = this.state,
             {location} = this.props;

      if((prevProps.location.pathname !== location.pathname) && showSideDrawer) this.hideSideDrawerHandler();
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

export default withRouter(Navigation);