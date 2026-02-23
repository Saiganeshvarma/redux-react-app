import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Slices/ProductsSlice";
import CartReducer from "./Slices/CartSlice";
import WishListReducer from "./Slices/WishListSlice";


var Store = configureStore({
    reducer : {
        products : ProductsReducer,
        cart : CartReducer,
        wishlist : WishListReducer
    }
})

export default Store 