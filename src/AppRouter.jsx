import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";



const AppRouter = () => {
    return(
        <Routes>
            <Route element={<Home />} path='/' exact/>
        </Routes>
    )
   
}

export default AppRouter