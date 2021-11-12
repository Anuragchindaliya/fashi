import { combineReducers } from "redux";
import categoriesReducer from './categories.reducer';
import productsReducer from './products.reducer';
import singleProductReducer from './singleProduct.reducer';
import cartReducer from './cart.reducer';

export default combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer
});