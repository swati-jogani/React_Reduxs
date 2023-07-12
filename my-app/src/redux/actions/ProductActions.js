import { ActionTypes } from "../constants/action-type"

export const setPtoducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products

    }
}

export const selectedPtoducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODDUCT,
        payload: product

    }
}