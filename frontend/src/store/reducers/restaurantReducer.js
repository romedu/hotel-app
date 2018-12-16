import {RESTAURANT} from "../actions/actionTypes";
import * as helpers from "../../helpers";

const initialState = {
    list: null,
    current: null
};

const reducer = (prevState = initialState, action) => {
    switch(action.type){
        case RESTAURANT.GET_RESTAURANTS: return {...prevState, list: action.restaurants};
        case RESTAURANT.ADD_RESTAURANT: return {...prevState, list: prevState.list.concat(action.newRestaurant)};
        case RESTAURANT.UPDATE_RESTAURANT: return {...prevState, list: helpers.updateItem(action.restaurantId, action.editedRestaurant, prevState.list)};
        case RESTAURANT.DELETE_RESTAURANT: return {...prevState, list: helpers.deleteItem(action.restaurantId, prevState.list)};
        case RESTAURANT.SET_CURRENT: return {...prevState, current: action.restaurant};
        case RESTAURANT.CLEAR_CURRENT: return {...prevState, current: null};
        default: return prevState;
    }
};

export default reducer;