
import { Link} from 'react-router-dom';
function Seat({seat}) {
    return(
        <><h3> Assento {seat}</h3></>
    )
    
}

export default function Sucess({setMovie, setTime, setCpf, setDate, setIdPlace, setNomeComprador, setSeatName ,movie, time, date, nomeComprador, cpf, idPlace, seatName}) {
    function reset() {
        setMovie("");
        setTime("");
        setDate("");
        setNomeComprador("");
        setCpf("")
        setSeatName([]);
        setIdPlace([]);
    }
    return (
        <div className="sucess">
            <h2> Pedido feito com sucesso</h2>
            <div className="finalizing-order">
                <h2>Filme e Sessão</h2>
                <h3>{movie}</h3>
                <h3>{date} - {time}</h3>

                <h2>Ingressos</h2>
                {seatName.map(seat => <Seat seat={seat} />)}

                <h2> Comprador</h2>
                <h3>nome: {nomeComprador}</h3>
                <h3>CPF: {cpf}</h3>

            </div>
            <Link to={`/`} style={{ textDecoration: 'none' }} >
                <button onClick={reset}> Voltar para home</button>  </Link> 
        </div>
    )
}