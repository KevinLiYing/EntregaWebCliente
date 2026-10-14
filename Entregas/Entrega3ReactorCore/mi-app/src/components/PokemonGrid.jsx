import { PokemonCard } from './PokemonCard'

export function PokemonGrid({ pokemon, query }) {
  if (pokemon.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        No hay señales para <strong>{query}</strong>. Prueba con otro nombre.
      </section>
    )
  }

  return (
    <section className="pokemon-grid" aria-label="Pokémon encontrados">
      {pokemon.map((item) => <PokemonCard key={item.id} pokemon={item} />)}
    </section>
  )
}