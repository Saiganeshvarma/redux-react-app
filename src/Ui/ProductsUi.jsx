import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { addToCart, fetchProducts } from '../Slices/ProductsSlice'
import { useNavigate } from 'react-router'

import {Toaster,toast} from "react-hot-toast"
const ProductsUi = () => {
    var {products,loading,error,cart} = useSelector((state)=>state.products)
    console.log(cart);
    var dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    var navigate = useNavigate()

    function handleCart(product){
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart`)
    }

  return (
    <div>
        <Toaster/>
        <button onClick={()=>{navigate("/cart")}}>Cart {cart.length}</button>

        {
            products.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <button onClick={()=>handleCart(item)}>AddToCart</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductsUi