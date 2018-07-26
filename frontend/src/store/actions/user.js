import axios from "axios";
import * as actionTypes from "./actionTypes";

export const loginUser = (authType, body) => {
    return dispatch => {
        axios.post(`/api/auth/${authType}`, body)
            .then(response => {
                let {id, profileImage, username, token} = response.data;
                localStorage.setItem("token", token);
                return dispatch(setUser({id, profileImage, username}));
            })
            .catch(error => console.log(error.message));
    };
};

export const verifyToken = token => {
    return dispatch => {
        axios.get(`/api/auth/token/${token}`)
            .then(response => {
                let {id, profileImage, username} = response.data;
                return dispatch(setUser({id, profileImage, username}));
            })
            .catch(error => console.log(error.message));
    };
};

const setUser = user => ({
    type: actionTypes.LOGIN,
    user
});