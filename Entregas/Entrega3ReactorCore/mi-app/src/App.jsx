import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { StatusMessage } from './components/StatusMessage'
import { PokemonGrid } from './components/PokemonGrid'
import { DataSummary } from './components/DataSummary'
import { getPokemonCollection } from './services/pokeApi'
import { filterPokemon, transformPokemonData } from './utils/pokemon'
import './App.css'

export function App() {
  const [pokemon, setPokemon] = useState([])
  const [query, setQuery] = useState('')
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

  return (
    <main className="app-shell">
      <Header
        eyebrow="M2 / Async Odyssey"
        title="Radar"
        highlight="Kanto"
        mark="PK"
      />
      <section className="control-panel" aria-label="Controles de la Pokédex">
        <SearchBar query={query} onQueryChange={setQuery} />
        <DataSummary pokemon={pokemon} visiblePokemon={visiblePokemon} />
      </section>
      {loading && <StatusMessage type="loading" />}
      {error && <StatusMessage type="error" message={error} />}
      {!loading && !error && <PokemonGrid pokemon={visiblePokemon} query={query} />}
    </main>
  )
}

export default App
