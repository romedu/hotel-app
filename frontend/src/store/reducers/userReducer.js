import * as actionTypes from "../actions/actionTypes";

const initialState = {
    currentUser: null
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return {currentUser: action.user};
        case actionTypes.LOGOUT: localStorage.removeItem("token"); return {currentUser: undefined};
        default: break;
    }
    return prevState;
};

export default reducer;