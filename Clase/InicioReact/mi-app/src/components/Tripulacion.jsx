export default function Boton({nombre, rol, especie}) {
    return (
        <article className="tripulacion-card">
            <span className="tripulacion-card__tag">Tripulacion</span>
            <h2>Nombre: {nombre}</h2>
            <div className="tripulacion-card__details">
                <p><strong>Rol</strong><span>{rol}</span></p>
                <p><strong>Especie</strong><span>{especie}</span></p>
            </div>
        </article>
    )
}