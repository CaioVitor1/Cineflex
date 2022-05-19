import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./InitialPage"
import Header from "./Header";
import MovieTime from "./MovieTime";
import MoviePlace from "./MoviePlace"
//<Route path="/assentos/:idSessao" element={<MoviePlace />} />
export default function App(){
    
    return(
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/sessoes/:idFilme" element={<MovieTime />} />
                <Route path="/assentos/:idSessao" element={<MoviePlace />} />
            </Routes>

       </BrowserRouter>
       
        )
}