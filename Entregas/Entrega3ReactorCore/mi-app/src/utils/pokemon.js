export function transformPokemonData(pokemonList) {
  return pokemonList
    .filter((pokemon) => pokemon?.id && pokemon?.name)
    .map((pokemon) => {
      const types = Array.isArray(pokemon.types)
        ? pokemon.types.filter((item) => item?.type?.name).map((item) => item.type.name)
        : []
      const statsTotal = Array.isArray(pokemon.stats)
        ? pokemon.stats.reduce((total, item) => total + (item.base_stat || 0), 0)
        : 0

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites?.other?.['official-artwork']?.front_default
          || pokemon.sprites?.front_default
          || '',
        types,
        statsTotal,
      }
    })
    .sort((first, second) => first.id - second.id)
}

export function filterPokemon(pokemonList, query) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return pokemonList
  }

  return pokemonList.filter((pokemon) => pokemon.name.includes(normalizedQuery))
}

export function sortPokemon(pokemonList, sortOrder) {
  if (sortOrder === 'stats-desc') {
    return [...pokemonList].sort(
      (first, second) => second.statsTotal - first.statsTotal || first.id - second.id,
    )
  }

  if (sortOrder === 'stats-asc') {
    return [...pokemonList].sort(
      (first, second) => first.statsTotal - second.statsTotal || first.id - second.id,
    )
  }

  return pokemonList
}

export function getPokemonStats(pokemonList) {
  return pokemonList.reduce(
    (stats, pokemon) => ({
      total: stats.total + 1,
      power: stats.power + pokemon.statsTotal,
    }),
    { total: 0, power: 0 },
  )
}
