const API_URL = 'https://pokeapi.co/api/v2/pokemon'
const KANTO_POKEMON_COUNT = 151
const DETAIL_BATCH_SIZE = 25

export async function getPokemonCollection(limit = KANTO_POKEMON_COUNT) {
  let response

  try {
    response = await fetch(`${API_URL}?limit=${limit}&offset=0`)
  } catch {
    throw new Error('No se pudo conectar con PokeAPI. Comprueba tu conexión e inténtalo de nuevo.')
  }

  if (!response.ok) {
    throw new Error(`PokeAPI respondió con el estado ${response.status}.`)
  }

  const listing = await response.json()
  const entries = Array.isArray(listing.results)
    ? listing.results.filter((entry) => entry?.url)
    : []

  const pokemon = []

  for (let index = 0; index < entries.length; index += DETAIL_BATCH_SIZE) {
    const batch = entries.slice(index, index + DETAIL_BATCH_SIZE)
    const batchPokemon = await Promise.all(
      batch.map(async (entry) => {
        let detailResponse

        try {
          detailResponse = await fetch(entry.url)
        } catch {
          throw new Error(`No se pudo conectar para cargar ${entry.name || 'un Pokémon'}.`)
        }

        if (!detailResponse.ok) {
          throw new Error(`No se pudo cargar ${entry.name || 'un Pokémon'}.`)
        }

        return detailResponse.json()
      }),
    )

    pokemon.push(...batchPokemon)
  }

  if (pokemon.length === 0) {
    throw new Error('La PokeAPI no devolvió Pokémon para mostrar.')
  }

  return pokemon
}
