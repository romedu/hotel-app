import {USER} from "../actions/actionTypes";

const initialState = {
    currentUser: null,
    userReservation: null
};

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER.LOGIN: return {...prevState, currentUser: action.user, userReservation: action.reservation};
        case USER.LOGOUT: return initialState;
        case USER.ADD_RESERVATION: return {...prevState, userReservation: action.reservation};
        case USER.REMOVE_RESERVATION: return {...prevState, userReservation: null};
        default: break;
    }
    return prevState;
};

export default reducer;