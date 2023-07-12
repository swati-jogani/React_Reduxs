import { ActionTypes } from "../constants/action-type";

const initialState = {
    // products: [
    //     {
    //         id: 1,
    //         title: "Dipesh",
    //         category: "programmer"
    //     }
    // ]
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODDUCT:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODDUCT:
                return { }
        default:
            return state
    }

}
