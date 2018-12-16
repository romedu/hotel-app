import React from "react";
import ProductThumbnail from "../ProductThumbnail/ProductThumbnail";

const productList = ({products, rootPath}) => {
   const thumbnailList = products.map(product => (
      <ProductThumbnail path={`${rootPath}/${product._id}`} key={product._id} background={product.image}>
         {product.name}
      </ProductThumbnail>
   ));

   return (
      <ul style={{listStyle: "none"}}>
         {thumbnailList}
      </ul>
   )
};

export default productList;