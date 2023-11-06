import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';
import CheckOut from '../Pages/CheckOut';
import LogIn from '../Pages/LogIn';
import ProductDetails from '../Pages/ProductDetails';
import Shop from '../Pages/Shop';
import SingUp from '../Pages/SingUp';
import PageError from '../Pages/error'






function Routers() {
  return (
    <>
        <Routes>
            <Route path='/'  element={<Navigate  to='home'/>}/>
            <Route path='home' exact element={<Home/>}/>
            <Route path='cart' exact element={<Cart/>}/>
            <Route path='checkout' exact element={<CheckOut/>}/>
            <Route path='login' exact element={<LogIn/>}/>
            <Route path='productdetils:id' exact element={<ProductDetails/>}/>
            <Route path='shop' exact element={<Shop/>}/>
            <Route path='signup' exact element={<SingUp/>}/>
            <Route path="*" element={<PageError/>}/>
          
           


        </Routes>

    </>
  )
}

export default Routers