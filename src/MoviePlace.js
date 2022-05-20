import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import imagem from "./assets/image9.png"


function PlacesChoices({id, available}){
    const [selected, setSelected] = useState(available)
    return (
        <div>
           {(selected === false) && (<div onClick={() => setSelected(true)}><h4 className='place-occupied'>{id}</h4></div>)} 
           {(selected === true) && (<div onClick={() => setSelected(false)}><h4 className='place-free'>{id}</h4></div>)}
           
        </div>
    )
}
function Footer({horario}) {
    console.log("chamei a API no FOOTER")
    return (
        <footer>
            <div className="imagem-rodape">
               <img src={imagem} />
            </div>
            <div className='infos'>
                <h4>Nome do filme </h4>
                <h4> {horario} - data</h4>
            </div>
        </footer>

    )
}
export default function MoviePlace() {
    const { idSessao } = useParams();
    const [section, setSection] = useState([])
    const [places,setPlaces] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            setSection(response.data)
          setPlaces(response.data.seats);
          
        });
       
      }, []);    
    console.log(section);
    console.log(places);
    return (
        <div className="initialPage">
            <h3> Selecione os assentos</h3>
            <div className='places-choices'>
              {places.map(assento => <PlacesChoices id={assento.name} available={assento.isAvailable}/>)}  
                
            </div>
            <div className='availability'>
                <div className='selected'>
                    <h4></h4>
                    <h5>Selecionado</h5> 
                </div>
                <div className='free'>
                    <h4></h4>
                    <h5>Disponível</h5> 
                </div>
                <div className='occupied'>
                    <h4></h4>
                    <h5>Ocupado</h5> 
                </div>
            </div>

            <Footer horario={section.name} />
            
        </div>
    )
}