import React from 'react'

import { useSelector } from "react-redux"

const CartUi = () => {
    var cart = useSelector((state)=>state.products.cart)
    console.log(cart);


  return (
    <div>
        {
            cart.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <h1>{item.quantity}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CartUi