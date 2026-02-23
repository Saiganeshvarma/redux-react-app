import {createSlice} from "@reduxjs/toolkit"


var wishlistSlice = createSlice({
    name : "slice",
    initialState : {
        wishlist : []

    },
    reducers : {
        addToWishList : (state,action)=>{
            var existItem = state.wishlist.find(item=>item.id == action.payload.id)
            if(!existItem){
                state.wishlist.push(action.payload)
                

                
            }
        }
    }
})

export var {addToWishList} = wishlistSlice.actions

export default wishlistSlice.reducer