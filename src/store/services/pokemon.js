import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getPokemons = async (pokemons) => {
  const urlPokemons = pokemons.map(async pokemon => {
    const response = await fetch(pokemon.url)

    return response.json()
  })

  return await Promise.all(urlPokemons)
}

export const pokemonApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getAllPokemons: builder.query({
      query: () => ({
        method: 'GET',
        url: 'pokemon/?offset=0&limit=100'
      }),
      transformResponse: async ({ results }) => {
        const pokemons  = getPokemons(results)

        return pokemons.then(res => res.map(({ name, types, sprites }) => ({
          name,
          types: types.map(({ type }) => type.name),
          sprite: sprites.other.dream_world.front_default
        })))
      }
    }),
    getPokemonByName: builder.query({
      query: name => `pokemon/${name}`
    })
  })
})

export const {
  useGetAllPokemonsQuery,
  useGetPokemonByNameQuery
} = pokemonApi
