import { combineReducers } from 'redux'
import { productReducer, selectedProductsReducer } from './productReducer'


export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer


})