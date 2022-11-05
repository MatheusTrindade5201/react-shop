import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductPage from "./Pages/Product";



const AppRouter = () => {
    return(
        <Routes>
            <Route element={<Home />} path='/' exact/>
            <Route element={<ProductPage />} path='/product/:id'/>
        </Routes>
    )
   
}

export default AppRouter