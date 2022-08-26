import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams,useHistory} from 'react-router-dom';
import React from 'react';

function PlacesChoices({name, seatName , setSeatName , isAvailable, id, setIdPlace, idPlace, index}){
    function add() {
        setSelected(true)
        setIdPlace([...idPlace,id]);
        setSeatName([...seatName, name])  
    }
    function filtrando(value) {
        return value !== id
    }
    function filtrando2(value) {
        return value !== name
    }
    function removePlace() {
        setSelected(false)
        setIdPlace(idPlace.filter(filtrando));
        setSeatName(seatName.filter(filtrando2))
      }

    
    const [selected, setSelected] = useState(false);
    const [available, setOccupied] = useState(isAvailable);
    
    return (                    
        <div>
           {(available === false) && (selected === false) && (<div onClick={() => alert("Esse assento não está disponível")}><h4 className='place-occupied'>{name}</h4></div>)} 
           {(available === true) && (selected === false) && (<div onClick={() => add()}><h4 className='place-free'>{name}</h4></div>)}
           {(selected === true) && (<div onClick={() => removePlace() }><h4 className='place-selected'>{name}</h4></div>)}
        </div>
    )
}
function Footer({horario, title, image,newDate}) {
   
    return (
        <footer>
            <div className="imagem-rodape">
               <img src={image} />
            </div>
            <div className='infos'>
                <h4>{title} </h4>
                <h4> {horario} - {newDate}</h4>
            </div>
        </footer>
    )
}
export default function MoviePlace({ seatName , setSeatName , setDate, date, setTime, cpf, setCpf, setIdPlace, idPlace, nomeComprador, setNomeComprador}) {
    const { idSessao } = useParams();
    const [section, setSection] = useState([])
    const [places,setPlaces] = useState([]);
    const [infos, setInfos] = useState([]);
    const [newDate, setNewDate] = useState("");
    function register2() {
        alert("Preencha todos os Campos")
    }

    function register(event) {
        if(idPlace.length == 0 || nomeComprador.length === 0 || cpf.length === 0){
            alert("Preencha todos os campos!")
        } else {
            const body = {
                ids: idPlace,
                name: nomeComprador,
                cpf: cpf
            }
    
            const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)
            requisicao
                .then(res => {
                    
                   
                })
                .catch(err => {
                    
                })
      
           
        }
        <Link to={`/sucesso`} ></Link>    
    }
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            setSection(response.data)
            setPlaces(response.data.seats);
            setInfos(response.data.movie)
            setNewDate(response.data.day)
        });
       
      }, []);      
    setDate(newDate.date)
   setTime(section.name)
    return (
        <div className="initialPage">
            <h3> Selecione os assentos</h3>
            <div className='places-choices'>
              {places.map((assento, index) => <PlacesChoices seatName={seatName} setSeatName={setSeatName} index={index} idPlace={idPlace} setIdPlace={setIdPlace} id={assento.id} name={assento.name} isAvailable={assento.isAvailable}/>)}  
                
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
        
                <div className='info'>
                    <h3>Nome do comprador:</h3>
                    <input placeholder='Digite seu nome..' value={nomeComprador} onChange={(e) => setNomeComprador(e.target.value)} required/>
                    <h3>CPF do comprador:</h3>
                    <input placeholder='Digite seu nome..' value={cpf} onChange={(e) => setCpf(e.target.value)} required/>  
                   {(idPlace.length == 0 || nomeComprador.length === 0 || cpf.length === 0) ?
                    (<button onClick={register2} type='submit'> Reservar assentos </button>) : 
                    <Link to={`/sucesso`} style={{ textDecoration: 'none' }} > <button onClick={register} type='submit'> Reservar assentos </button>
                        </Link> }
                </div>     

            <Footer newDate={newDate.weekday} title={infos.title} horario={section.name} image={infos.posterURL}/>
            
        </div>
    )
}