import {CATEGORY} from "../actions/actionTypes";
import * as helpers from "../../helpers";

const initialState = {
    list: []
};

const reducer = (prevState = initialState, action) => {
    switch(action.type){
        case CATEGORY.GET_CATEGORIES: return {list: action.categories};
        case CATEGORY.ADD_CATEGORY: return {list: prevState.list.concat(action.newCategory)};
        case CATEGORY.UPDATE_CATEGORY: return {list: helpers.updateItem(action.categoryId, action.newCategory, prevState.list)};
        case CATEGORY.DELETE_CATEGORY: return {list: helpers.deleteItem(action.categoryId, prevState.list)};
        default: return prevState;
    }  
};

export default reducer;