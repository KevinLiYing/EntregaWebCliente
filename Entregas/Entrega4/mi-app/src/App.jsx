import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { StatusMessage } from './components/StatusMessage'
import { PokemonGrid } from './components/PokemonGrid'
import { DataSummary } from './components/DataSummary'
import { getPokemonCollection } from './services/pokeApi'
import { filterPokemon, sortPokemon, transformPokemonData } from './utils/pokemon'
import './App.css'

export function App() {
  const [pokemon, setPokemon] = useState([])
  const [query, setQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('original')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadPokemon() {
      setLoading(true)
      setError('')

      try {
        const result = await getPokemonCollection()

        if (isMounted) {
          setPokemon(transformPokemonData(result))
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message || 'No se pudo conectar con la Pokédex.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadPokemon()

    return () => {
      isMounted = false
    }
  }, [])

  const visiblePokemon = filterPokemon(pokemon, query)
  const sortedPokemon = sortPokemon(visiblePokemon, sortOrder)

  return (
    <main className="app-shell">
      <Header
        eyebrow="M2 / Async Odyssey"
        title="Radar"
        highlight="Kanto"
        mark="PK"
      />
      <section className="control-panel" aria-label="Controles de la Pokédex">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          label="Buscar Pokémon por nombre"
          placeholder="Busca por nombre..."
        />
        <label className="sort-control">
          <span>Ordenar por</span>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
            <option value="original">Orden de Kanto</option>
            <option value="stats-desc">Más estadísticas</option>
            <option value="stats-asc">Menos estadísticas</option>
          </select>
        </label>
        <DataSummary pokemon={pokemon} visiblePokemon={visiblePokemon} />
      </section>
      {loading && (
        <StatusMessage
          type="loading"
          loadingTitle="Escaneando la región..."
          loadingMessage="El event loop está consultando PokeAPI."
        />
      )}
      {error && (
        <StatusMessage
          type="error"
          message={error}
          errorTitle="Señal perdida"
        />
      )}
      {!loading && !error && (
        <PokemonGrid
          pokemon={sortedPokemon}
          query={query}
          numberLabel="N.º"
          statLabel="BP"
        />
      )}
    </main>
  )
}

export default App
