import {USER} from "../actions/actionTypes";

const initialState = {
    currentUser: null,
    reservation: null
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER.LOGIN: return {...prevState, currentUser: action.user, reservation: action.reservation};
        case USER.LOGOUT: return initialState;
        case USER.ADD_RESERVATION: return {...prevState, reservation: action.reservation};
        case USER.REMOVE_RESERVATION: return {...prevState, reservation: null};
        default: break;
    }
    return prevState;
};

export default reducer;