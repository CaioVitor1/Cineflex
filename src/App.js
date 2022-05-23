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
    const [seatName, setSeatName] = useState([])
  
    
    

    return(
       <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/sessoes/:idFilme" element={<MovieTime movie={movie} setMovie={setMovie}/>} />
                <Route path="/assentos/:idSessao"  element={<MoviePlace seatName={seatName} setSeatName={setSeatName}  setTime={setTime} setDate={setDate} movie={movie} cpf={cpf} setCpf={setCpf}  nomeComprador={nomeComprador} setNomeComprador={setNomeComprador} idPlace={idPlace} setIdPlace={setIdPlace} />} />
                <Route path="/sucesso" element={<Sucess setSeatName={setSeatName} seatName={seatName} setTime={setTime} time={time} setMovie={setMovie} movie={movie} setDate={setDate} date={date} setNomeComprador={setNomeComprador} nomeComprador={nomeComprador} setCpf={setCpf} cpf={cpf} setIdPlace={setIdPlace} idPlace={idPlace} />} />
            </Routes>

       </BrowserRouter>
       
        )
}