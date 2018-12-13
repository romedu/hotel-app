import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {getCategories} from "../../store/actions/category";
import {getRestaurants} from "../../store/actions/restaurant";

class Navigation extends Component {
   componentDidMount(){
      const {onCategoriesGet, onRestaurantsGet} = this.props;
      onCategoriesGet();
      onRestaurantsGet();
   }

   render(){
      return (
         <Fragment>
            <Toolbar toggleMenu={this.showSideDrawerHandler} currentUser={this.props.currentUser} logout={this.props.onLogoutHandler}/>
            <SideDrawer showing={this.state.showSideDrawer} toggle={this.showSideDrawerHandler} hide={this.hideSideDrawerHandler} currentUser={this.props.currentUser}/>
         </Fragment>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   onCategoriesGet: () => dispatch(getCategories),
   onRestaurantsGet: () => dispatch(getRestaurants)
});

export default connect(null, mapDispatchToProps)(Navigation);