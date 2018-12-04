import {PRODUCT} from "../actions/actionTypes";
import * as helpers from "../../helpers";

const initialState = {
    list: [],
    current: null
};

const reducer = (prevState = initialState, action) => {
    switch(action.type){
        case PRODUCT.GET_PRODUCTS: return {list: action.products};
        case PRODUCT.ADD_PRODUCT: return {list: prevState.list.concat(action.newProduct)};
        case PRODUCT.UPDATE_PRODUCT: return {list: helpers.updateItem(action.productId, action.editedProduct, prevState.list)};
        case PRODUCT.DELETE_PRODUCT: return {list: helpers.deleteItem(action.productId, prevState.list)};
        case PRODUCT.SET_CURRENT: return {current: helpers.findById(action.product, prevState.list)};
        case PRODUCT.CLEAR_CURRENT: return {current: null};
        default: return prevState;
    }
};

export default reducer;