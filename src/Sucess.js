export default function Sucess({movie, time, date, nomeComprador, cpf, idPlace}) {
    return (
        <div className="sucess">
            <h2> Pedido feito com sucesso</h2>
            <div className="finalizing-order">
                <h2>Filme e Sessão</h2>
                <h3>{movie}</h3>
                <h3>{date} - {time}</h3>

                <h2>Ingressos</h2>
                <h3>Assento 15</h3>
                <h3>Assento 16</h3>

                <h2> Comprador</h2>
                <h3>nome: {nomeComprador}</h3>
                <h3>CPF: {cpf}</h3>

            </div>
            <button> Voltar para home</button>
        </div>
    )
}