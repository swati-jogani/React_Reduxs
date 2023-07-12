import { ActionTypes } from "../constants/action-type"

export const setPtoducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products

    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODDUCT,
        payload: product

    }
}


export const removeSelectedProducts = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODDUCT, 
    }
}