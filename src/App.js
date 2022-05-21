import React from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./InitialPage"
import Header from "./Header";
import MovieTime from "./MovieTime";
import MoviePlace from "./MoviePlace"
import Sucess from "./Sucess";


export default function App(){
    const[nomeComprador, setNomeComprador] = useState("");
    const [cpf, setCpf] = useState("");
    const [idPlace, setIdPlace] = useState([]);
    const [user, setUser] = useState({
        ids: idPlace,
        name: nomeComprador,
        cpf: cpf
    })
    

    return(
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/sessoes/:idFilme" element={<MovieTime />} />
                <Route path="/assentos/:idSessao" setUser={setUser} user={user} element={<MoviePlace cpf={cpf} setCpf={setCpf}  nomeComprador={nomeComprador} setNomeComprador={setNomeComprador} idPlace={idPlace} setIdPlace={setIdPlace} />} />
                <Route path="/sucesso" element={<Sucess />} />
            </Routes>

       </BrowserRouter>
       
        )
}