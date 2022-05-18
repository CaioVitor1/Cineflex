import imagem2 from "./assets/image3.png"
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";

function Movies({imagem}) {

    return (
                <div className="movie">
                    <img src={imagem} />
                </div>
    )
}

export default function InitialPage() {
    const [everyMovie, setEveryMovie] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
          setEveryMovie([...response.data]);
        });
      }, []);
console.log(everyMovie)
    return (
        <div className="initialPage">
            <h3> Selecione o filme</h3>
            <div className="movies">
                 {everyMovie.map(image => <Movies imagem={image.posterURL} /> )}
            </div> 

        </div>
        
    )
}