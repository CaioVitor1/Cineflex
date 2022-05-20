import InitialPage from "./InitialPage";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function MovieSchedules({weekday, date, index, showtimes1, showtimes2, id1, id2}) {
    return (
        <div className="movie-schedules" >
                <p> {weekday} - {date} </p>
                <div className="options">
                    <Link to={`/assentos/${id1}`} >
                        <button>{showtimes1}</button>
                    </Link>
                    <Link to={`/assentos/${id2}`} >
                        <button>{showtimes2}</button>
                    </Link>
                </div>
            </div>
    )
}

function Footer({title, image}) {
    return (
        <footer>
            <div className="imagem-rodape">
                <img src={image} />
            </div>
            <h4> {title}</h4>
        </footer>

    )
}

export default function MovieTime() {
    const { idFilme } = useParams();
    const [horarios, setHorarios] = useState([]);
    const [opcoes, setOpcoes] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then((response) => {
          setHorarios(response.data);
          setOpcoes(response.data.days)
        });
       
      }, []);

   
    console.log(horarios)
    console.log(opcoes)
    console.log(opcoes.showtimes)
      
    
    return (
        <div className="initialPage">
            <h3> Selecione o horário</h3>

        {opcoes.map((options, index) => <MovieSchedules id1={options.showtimes[0].id} showtimes1={options.showtimes[0].name} id2={options.showtimes[1].id} showtimes2={options.showtimes[1].name} index={index} weekday={options.weekday} date={options.date} />)}

            <div className="movie-schedules" >
                <p> Sexta-Feira - 25/06/2022</p>
                <div className="options">
                   <button>15:00</button>
                   <button>16:00</button>
                </div>
            </div>
            <Footer title={horarios.title} image={horarios.posterURL} />
           
        </div>
    )
}