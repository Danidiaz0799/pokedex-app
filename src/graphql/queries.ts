import { gql } from '@apollo/client';

/**
 * Query para obtener la lista de Pokémon
 * Obtiene los primeros 151 Pokémon (Generación 1) con sus datos básicos
 */
export const GET_POKEMONS = gql`
  query GetPokemons($limit: Int = 151, $offset: Int = 0) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, order_by: { id: asc }) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

/**
 * Query para obtener los detalles completos de un Pokémon específico
 */
export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          limit: 1
        ) {
          flavor_text
        }
      }
    }
  }
`;

/**
 * Query para buscar Pokémon por nombre
 */
export const SEARCH_POKEMON = gql`
  query SearchPokemon($name: String!) {
    pokemon_v2_pokemon(
      where: { name: { _ilike: $name } }
      order_by: { id: asc }
      limit: 20
    ) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

/**
 * Query para obtener todos los tipos de Pokémon
 */
export const GET_POKEMON_TYPES = gql`
  query GetPokemonTypes {
    pokemon_v2_type(order_by: { name: asc }) {
      id
      name
    }
  }
`;
