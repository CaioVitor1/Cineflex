import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams,useHistory} from 'react-router-dom';
import imagem from "./assets/image9.png"
import React from 'react';


function PlacesChoices({name, isAvailable, id, setIdPlace, idPlace}){
    function add() {
        setSelected(true)
        setIdPlace([...idPlace,id])
    }


    const [selected, setSelected] = useState(false);
    const [available, setOccupied] = useState(isAvailable);
    
    // agora preciso passar o setIdPlaces pra cá e alterar ele lá no onClick
    return (                    
        <div>
           {(available === false) && (selected === false) && (<div onClick={() => alert("Esse assento não está disponível")}><h4 className='place-occupied'>{name}</h4></div>)} 
           {(available === true) && (selected === false) && (<div onClick={() => add()}><h4 className='place-free'>{name}</h4></div>)}
           {(selected === true) && (<div onClick={() => (setSelected(false)) }><h4 className='place-selected'>{name}</h4></div>)}
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
export default function MoviePlace({setUser, user, cpf, setCpf, setIdPlace, idPlace, nomeComprador, setNomeComprador}) {
    const { idSessao } = useParams();
    const [section, setSection] = useState([])
    const [places,setPlaces] = useState([]);
    
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
                    console.log(res.data)
                   
                })
                .catch(err => {
                    console.log(err)
                })
                
            console.log(body)
        }
        <Link to={`/sucesso`} ></Link>
        
    }


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            setSection(response.data)
          setPlaces(response.data.seats);
          
        });
       
      }, []);    
   
    console.log(places);
    console.log(nomeComprador)
    console.log(cpf)
    console.log(idPlace)
    console.log(user)
    return (
        <div className="initialPage">
            <h3> Selecione os assentos</h3>
            <div className='places-choices'>
              {places.map(assento => <PlacesChoices idPlace={idPlace} setIdPlace={setIdPlace} id={assento.id} name={assento.name} isAvailable={assento.isAvailable}/>)}  
                
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
      

            
        
        

            <Footer horario={section.name} />
            
        </div>
    )
}