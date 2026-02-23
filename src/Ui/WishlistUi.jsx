import React from 'react'

import {useSelector,useDispatch} from "react-redux"

const WishlistUi = () => {
    var wishlist =  useSelector((state)=>state.wishlist.wishlist)
    console.log(wishlist);
  return (
    <div>
        {
            wishlist.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default WishlistUi