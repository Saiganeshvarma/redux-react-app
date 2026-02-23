import { createSlice } from "@reduxjs/toolkit";


var cartSlice = createSlice({
    name : "cartSlice",
    initialState : {
        cart : []
    },
    reducers : {
        addToCart : (state,action)=>{
            var existItem = state.cart.find(item=>item.id == action.payload.id)
            if(existItem){
                existItem.quantity += 1
            }else{
                state.cart.push({...action.payload,quantity : 1})
            }



        }
    }

})


export var {addToCart} = cartSlice.actions

export default cartSlice.reducer