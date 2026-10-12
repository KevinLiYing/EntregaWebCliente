import { getPokemonStats } from '../utils/pokemon'

export function DataSummary({ pokemon, visiblePokemon }) {
  const stats = getPokemonStats(visiblePokemon)

  return (
    <div className="data-summary">
      <div>
        <span className="data-summary__value">{stats.total}/{pokemon.length}</span>
        <span className="data-summary__label">señales activas</span>
      </div>
    </div>
  )
}