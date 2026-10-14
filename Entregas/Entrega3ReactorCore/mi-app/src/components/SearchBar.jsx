export function SearchBar({
  query,
  onQueryChange,
  label = 'Buscar Pokémon',
  placeholder = 'Busca por nombre...',
}) {
  return (
    <label className="search-box">
      <span className="search-box__icon" aria-hidden="true">⌕</span>
      <span className="visually-hidden">{label}</span>
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
      />
    </label>
  )
}