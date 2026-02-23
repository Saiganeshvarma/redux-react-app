import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchProducts } from '../Slices/ProductsSlice'
import { useNavigate } from 'react-router'
import { addToCart } from '../Slices/CartSlice'
import { CiHeart } from "react-icons/ci";

import {Toaster,toast} from "react-hot-toast"
import { addToWishList } from '../Slices/WishListSlice'

const ProductsUi = () => {
    var {products,loading,error,} = useSelector((state)=>state.products)
    var cart = useSelector((state)=>state.cart.cart)
    var dispatch = useDispatch()
    var navigate = useNavigate()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    function handleCart(product){
       
        dispatch(addToCart(product))
        toast.success(`${product.title} added to cart`)
        

    }

    function handlewishList(listItem){
        dispatch(addToWishList(listItem))
        toast.success(`${listItem.title} added to wishlist`)
    }
  return (
    <div>
        <Toaster/>
        <button onClick={()=>navigate("/cart")}>Cart {cart.length}</button>
        <button onClick={()=>navigate("/wishlist")}>wishlist</button>
        {
            products.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <button onClick={()=>handleCart(item)}>AddToCart</button>
                        <button onClick={()=>handlewishList(item)}><CiHeart /></button>
                    </div>
                )
            })
        }

    </div>
  )
}

export default ProductsUi