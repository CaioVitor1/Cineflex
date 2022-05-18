import InitialPage from "./InitialPage";

function MovieSchedules() {
    return (
        <div className="movie-schedules" >
                <p> Quinta-Feira - 24/06/2021</p>
                <div className="options">
                   <button>15:00</button>
                   <button>16:00</button>
                </div>
            </div>
    )
}

export default function MovieTime() {
    return (
        <div className="initialPage">
            <h3> Selecione o horário</h3>

            <MovieSchedules />

            <div className="movie-schedules" >
                <p> Sexta-Feira - 25/06/2021</p>
                <div className="options">
                   <button>15:00</button>
                   <button>16:00</button>
                </div>
            </div>

        </div>
    )
}