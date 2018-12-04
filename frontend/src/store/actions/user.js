import axios from "../../axiosInstance";
import {USER} from "./actionTypes";

export const loginUser = (authType, body) => {
    return dispatch => {
        axios.post(`/auth/${authType}`, body)
            .then(response => response.data)
            .then(user => {
                const {token, reservation, ...userData} = user;
                localStorage.setItem("token", token);
                return dispatch(setUser(userData, reservation));
            })
            .catch(error => {
                //HANDLE ERROR
            });
    };
};

export const logout = {
    type: USER.LOGOUT
};

export const verifyToken = token => {
    return dispatch => {
        axios.get(`/auth/token`)
            .then(response => response.data)
            .then(user => {
                const {token, reservation, ...userData} = user;
                localStorage.setItem("token", token);
                return dispatch(setUser(userData, reservation));
            })
            .catch(error => {
                //HANDLE ERROR
            });
    };
};

const setUser = (user, reservation) => ({
    type: USER.LOGIN,
    user,
    reservation
});