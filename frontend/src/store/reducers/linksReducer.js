import * as actionTypes from "../actions/actionTypes";

const initialState = {
    linkItems: null
};

const reducer = (prevState = initialState, action) => {
    if(action.type === actionTypes.GET_ITEMS) return {linkItems: action.data};
    return prevState;
};

export default reducer;