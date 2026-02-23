import React from 'react'
import ProductsUi from './Ui/productsUi'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import CartUi from './Ui/CartUi'
import WishlistUi from './Ui/WishlistUi'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<ProductsUi/>}/>
            <Route path='/cart' element = {<CartUi/>}/>
            <Route path='/wishlist' element = {<WishlistUi/>}/>

        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App