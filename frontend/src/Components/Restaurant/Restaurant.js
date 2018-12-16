import React from "react";
import {connect} from "react-redux";
import ProductsList from "../../Components/ProductsList/ProductsList";
import "./Restaurant.css";

const Restaurant = props => {
   const {restaurants} = props;

   return (
      <div className="Restaurant">
            <h1>
               Restaurants
            </h1>
            <ProductsList rootPath="restaurants" products={restaurants} />
      </div>
   );
}

const mapStateToProps = state => ({
   restaurants: state.restaurant.list
});

export default connect(mapStateToProps)(Restaurant);