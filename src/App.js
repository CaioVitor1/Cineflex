import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./InitialPage"
import Header from "./Header";

export default function App(){
    
    return(
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<InitialPage />} />
            </Routes>

       </BrowserRouter>
       
        )
}