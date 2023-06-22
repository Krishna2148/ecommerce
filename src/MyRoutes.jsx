import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import ShippingAddress from './Pages/ShippingAddress'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>} />
                    <Route path="/product/:id" element={<ProductDetails/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="shippingAddress" element={<ShippingAddress/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes