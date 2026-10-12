export function Esclusa({ abierta, avisos }) {
    return (
        <article className={`esclusa ${abierta ? "esclusa--abierta" : "esclusa--cerrada"}`}>
            <span className="esclusa__tag">Esclusa</span>
            <h2>Estado: {abierta ? "Abierta" : "Cerrada"}</h2>
            <div className="esclusa__avisos">
                {avisos > 0 && <span className="esclusa__avisos-count">{avisos}</span>}
            </div>
        </article>
    )  
}