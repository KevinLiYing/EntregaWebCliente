export function PokemonCard({
  pokemon,
  numberLabel = 'N.º',
  statLabel = 'BP',
}) {
  return (
    <article className="pokemon-card">
      <div className="pokemon-card__top">
        <span className="pokemon-card__number">
          {numberLabel} {String(pokemon.id).padStart(3, '0')}
        </span>
        <span className="pokemon-card__number">{pokemon.statsTotal} {statLabel}</span>
      </div>
      <div className="pokemon-card__image-wrap">
        {pokemon.image ? (
          <img className="pokemon-card__image" src={pokemon.image} alt={pokemon.name} />
        ) : (
          <span aria-label="Imagen no disponible">?</span>
        )}
      </div>
      <h2>{pokemon.name}</h2>
      <div className="pokemon-card__types">
        {pokemon.types.map((type) => <span className="pokemon-card__type" key={type}>{type}</span>)}
      </div>
    </article>
  )
}