import {CATEGORY} from "./actionTypes";
import axios from "../../axiosInstance";

export const getCategories = () => {
    return dispatch => {
        axios.get("/category")
            .then(response => response.data)
            .then(categories => dispatch({
                type: CATEGORY.GET_CATEGORIES,
                categories
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    };
};

export const addCategory = newCategory => {
    return dispatch => {
        axios.post("/category", newCategory)
            .then(response => response.data)
            .then(newCategory => dispatch({
                type: CATEGORY.ADD_CATEGORY,
                newCategory
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    };
};

export const updateCategory = (categoryId, categoryData) => {
    return dispatch => {
        axios.patch(`/category/${categoryId}`, categoryData)
            .then(response => response.data)
            .then(editedCategory => dispatch({
                type: CATEGORY.UPDATE_CATEGORY,
                editedCategory
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    };
};

export const deleteCategory = categoryId => {
    return dispatch => {
        axios.delete(`/category/${categoryId}`)
            .then(response => response.data)
            .then(message => dispatch({
                type: CATEGORY.DELETE_CATEGORY,
                categoryId
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    };
};