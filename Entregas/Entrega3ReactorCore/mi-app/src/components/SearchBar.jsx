export function SearchBar({ query, onQueryChange }) {
  return (
    <label className="search-box">
      <span className="search-box__icon" aria-hidden="true">⌕</span>
      <span className="visually-hidden">Buscar Pokémon</span>
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Busca por nombre..."
      />
    </label>
  )
}