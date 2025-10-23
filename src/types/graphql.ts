/**
 * Tipos para las respuestas de las queries GraphQL
 */

/**
 * Datos crudos de Pokémon desde la API GraphQL
 */
export interface RawPokemonData {
  id: number;
  name: string;
  height?: number;
  weight?: number;
  pokemon_v2_pokemonsprites?: Array<{
    sprites: string | Record<string, unknown>; // Puede ser string JSON o objeto
  }>;  pokemon_v2_pokemontypes?: Array<{
    pokemon_v2_type: {
      name: string;
    };
  }>;
  pokemon_v2_pokemonstats?: Array<{
    base_stat: number;
    pokemon_v2_stat: {
      name: string;
    };
  }>;
  pokemon_v2_pokemonabilities?: Array<{
    pokemon_v2_ability: {
      name: string;
    };
  }>;
  pokemon_v2_pokemonspecy?: {
    pokemon_v2_pokemonspeciesflavortexts?: Array<{
      flavor_text: string;
    }>;
  };
}

/**
 * Respuesta de la query GET_POKEMONS
 */
export interface GetPokemonsResponse {
  pokemon_v2_pokemon: RawPokemonData[];
}

/**
 * Respuesta de la query GET_POKEMON_DETAILS
 */
export interface GetPokemonDetailsResponse {
  pokemon_v2_pokemon: RawPokemonData[];
}

/**
 * Respuesta de la query SEARCH_POKEMON
 */
export interface SearchPokemonResponse {
  pokemon_v2_pokemon: RawPokemonData[];
}

/**
 * Tipo de Pokémon (fire, water, etc.)
 */
export interface PokemonTypeData {
  id: number;
  name: string;
}

/**
 * Respuesta de la query GET_POKEMON_TYPES
 */
export interface GetPokemonTypesResponse {
  pokemon_v2_type: PokemonTypeData[];
}
