import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"


export var fetchProducts = createAsyncThunk(
    "fetch/fetchproducts",
    async ()=>{
        var response = await fetch("https://fakestoreapi.com/products")
        var data = await response.json()
        return data 
    }
)



var productsSlice = createSlice({
    name : "products",
    initialState : {
        products : [],
        loading : false ,
        error : null ,
        cart : []
    },
    reducers : {
        addToCart : (state,action)=>{
            var existItem = state.cart.find(item=>item.id == action.payload.id)
            if(existItem){
                existItem.quantity += 1
            }else{
                state.cart.push({...action.payload,quantity: 1})
            }
            

        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.error = "error",
            state.loading = false
        })

    }

})


export var {addToCart} = productsSlice.actions

export default productsSlice.reducer


