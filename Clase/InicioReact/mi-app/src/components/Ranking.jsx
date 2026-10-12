export function Ranking({ puntuacion }) {
    return (
        <section className="ranking-panel">
            <span className="ranking__tag">Tabla de pilotos</span>
            <h2>Ranking</h2>
            <ol className="ranking">
                {puntuacion.map((jugador) => (
                    <li key={jugador.id}>
                        <span className="ranking__posicion">{jugador.id}</span>
                        <span className="ranking__nombre">{jugador.nombre}</span>
                        <span className="ranking__puntos">{jugador.puntos} pts</span>
                    </li>
                ))}
            </ol>
        </section>
    )
}