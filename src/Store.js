import {configureStore} from "@reduxjs/toolkit"
import ProductsReducer from "./Slices/ProductsSlice"




var Store = configureStore({
    reducer : {
        products : ProductsReducer

    }
})

export default Store