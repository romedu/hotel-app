import React from "react";
import {connect} from "react-redux";
import ProductsList from "../../Components/ProductsList/ProductsList";
import {capitalizeString, findByName} from "../../helpers";
import "./Category.css";

const Category = props => {
   const {match, categories} = props,
         {categoryName} = match.params,
         {products} = findByName(categoryName, categories, true);

   return (
      <div className="Category">
            <h1>
               {capitalizeString(categoryName, true)}
            </h1>
            <ProductsList rootPath={`/activities/${categoryName}`} products={products} />
      </div>
   );
}

const mapStateToProps = state => ({
   categories: state.category.list
});

export default connect(mapStateToProps)(Category);