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
    const [movie, setMovie] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
  
    
    

    return(
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/sessoes/:idFilme" element={<MovieTime setMovie={setMovie}/>} />
                <Route path="/assentos/:idSessao"  element={<MoviePlace setTime={setTime} setDate={setDate} movie={movie} cpf={cpf} setCpf={setCpf}  nomeComprador={nomeComprador} setNomeComprador={setNomeComprador} idPlace={idPlace} setIdPlace={setIdPlace} />} />
                <Route path="/sucesso" element={<Sucess time={time} movie={movie} setDate={setDate} date={date} nomeComprador={nomeComprador} cpf={cpf} idPlace={idPlace} />} />
            </Routes>

       </BrowserRouter>
       
        )
}