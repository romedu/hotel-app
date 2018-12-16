import React from "react";
import {Link} from "react-router-dom";

const ProductThumbnail = props => {
    let styles = {
        backgroundImage: (props.background ? `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${props.background})` : null),
        backgroundSize: "cover",
        color: "white",
        fontSize: "2em",
        fontWeight: "bold",
        paddingTop: "28vh",
        paddingBottom: "2vh",
        width: "100vw",
        marginBottom: "1vh",
        textAlign: "center",
        boxShadow: "3px 3px 8px #888888"
    };
    
    return (
      <Link to={props.path}>
         <div style={styles}>
            {props.children}
        </div>
      </Link> 
    );
};

export default ProductThumbnail;