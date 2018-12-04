import axios from "../../axiosInstance";
import {PRODUCT} from "./actionTypes";

export const getProducts = categoryId => {
    return dispatch => {
        axios.get(`/category/${categoryId}/products`)
            .then(response => response.data)
            .then(products => ({
                type: PRODUCT.GET_PRODUCTS,
                products
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const addProduct = (categoryId, newProduct) => {
    return dispatch => {
        axios.post(`/category/${categoryId}/product`, newProduct)
            .then(response => response.data)
            .then(newProduct => dispatch({
                type: PRODUCT.ADD_PRODUCT,
                newProduct
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const updateProduct = (categoryId, productId, productData) => {
    return dispatch => {
        axios.patch(`category/${categoryId}/product/${productId}`, productData)
            .then(response => response.data)
            .then(editedProduct => dispatch({
                type: PRODUCT.UPDATE_PRODUCT,
                editedProduct,
                productId
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const deleteProduct = (categoryId, productId) => {
    return dispatch => {
        axios.delete(`category/${categoryId}/product/${productId}`)
            .then(response => response.data)
            .then(message => dispatch({
                type: PRODUCT.DELETE_PRODUCT,
                productId
            }))
            .catch(error => {
                //HANDLE ERROR
            });
    }
};

export const setCurrentProduct = productId => {
    return dispatch => dispatch({
        type: PRODUCT.SET_CURRENT,
        productId
    });
};

export const clearCurrentProduct = {
    type: PRODUCT.CLEAR_CURRENT
};