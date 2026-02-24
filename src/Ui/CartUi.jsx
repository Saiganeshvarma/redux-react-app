import React from 'react'
import { useSelector } from 'react-redux'

const CartUi = () => {
    var cart = useSelector((state)=>state.cart.cart)

  return (
    <div>

            {
              cart.map((item)=>{
                return(
                  <div>
                    <h1>{item.title}</h1>
                    <h2>{item.quantity}</h2>
                  </div>
                )
              })
            }
    </div>
  )
}

export default CartUi