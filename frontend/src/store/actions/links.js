import axios from "axios";
import * as actionTypes from "./actionTypes";

const updateItems = items => {
    return {
        data: items, 
        type: actionTypes.GET_ITEMS
    };
};

export const getItems = (kingdom) => {
    return dispatch => {
         axios.get(`/api/${kingdom !== "restaurant" ? "product/" : ""}${kingdom}`)
                    .then(results => dispatch(updateItems(results.data)))
                    .catch(error => console.log(error));
    };
};