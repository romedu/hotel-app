import axios from "../../axiosInstance";
import {RESTAURANT, USER} from "./actionTypes";


export const getRestaurants = () => {
    return dispatch => {
        axios.get("/restaurant")
            .then(response => response.data)
            .then(restaurants => {
                return dispatch({
                    type: RESTAURANT.GET_RESTAURANTS,
                    restaurants
                });
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const addRestaurant = restaurantData => {
    return dispatch => {
        axios.post("/restaurant", restaurantData)
            .then(response => response.data)
            .then(newRestaurant => {
                return dispatch({
                    type: RESTAURANT.ADD_RESTAURANT,
                    newRestaurant
                });
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const updateRestaurant = (restaurantId, restaurantData) => {
    return dispatch => {
        axios.patch(`/restaurant/${restaurantId}`)
            .then(response => response.data)
            .then(editedRestaurant => {
                return dispatch({
                    type: RESTAURANT.UPDATE_RESTAURANT,
                    restaurantId,
                    editedRestaurant
                });
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const deleteRestaurant = restaurantId => {
    return dispatch => {
        axios.delete(`/restaurant/${restaurantId}`)
            .then(response => response.data)
            .then(message => {
                return dispatch({
                    type: RESTAURANT.DELETE_RESTAURANT,
                    restaurantId
                });
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const setRestaurant = restaurantId => {
    return dispatch => {
        axios.get(`/restaurant/${restaurantId}`)
            .then(response => response.data)
            .then(restaurant => {
                return dispatch({
                    type: RESTAURANT.SET_CURRENT,
                    restaurant
                });
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const clearRestaurant = {
    type: RESTAURANT.CLEAR_CURRENT
};

export const addReservation = restaurant => {
    return dispatch => {
        axios.post(`/restaurant/${restaurant._id}/addReservation`)
            .then(response => response.data)
            .then(message => {
                return dispatch({
                    type: USER.ADD_RESERVATION,
                    reservation: restaurant
                });
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const removeReservation = restaurantId => {
    return dispatch => {
        axios.post(`/restaurant/${restaurantId}/removeReservation`)
            .then(response => response.data)
            .then(message => {
                return dispatch({
                    type: USER.REMOVE_RESERVATION
                });
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};