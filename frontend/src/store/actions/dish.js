import axios from "../../axiosInstance";

export const createDish = dishData => {
    return dispatch => {
        axios.post("/dish", dishData)
            .then(response => response.data)
            .then(newDish => {
                //CREATE A MESSAGE
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const updateDish = (dishId, dishData) => {
    return dispatch => {
        axios.patch(`/dish/${dishId}`, dishData)
            .then(response => response.data)
            .then(editedDish => {
                //CREATE A MESSAGE
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const deleteDish = dishId => {
    return dispatch => {
        axios.delete(`/dish/${dishId}`)
            .then(response => response.data)
            .then(exDish => {
                //CREATE ERROR
            })
            .catch(error => {
                //HANDLE ERROR
            });
    }
};