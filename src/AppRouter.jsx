import React from "react";
import {  Route, Routes } from "react-router-dom";
import CartPage from "./Pages/Cart";
import Home from "./Pages/Home";
import ProductPage from "./Pages/Product";



const AppRouter = () => {
    return(
        <Routes>
            <Route element={<Home />} path='/' exact/>
            <Route element={<ProductPage />} path='/product/:id'/>
            <Route element={<CartPage />} path='/cart'/>
        </Routes>
    )
   
}

export default AppRouter