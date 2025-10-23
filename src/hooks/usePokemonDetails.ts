import { useQuery } from '@apollo/client/react';
import { GET_POKEMON_DETAILS } from '../graphql/queries';
import type { GetPokemonDetailsResponse } from '../types/graphql';
import type { Pokemon } from '../types/pokemon';
import { transformPokemonData } from '../utils/pokemonHelpers';

interface UsePokemonDetailsParams {
  id: number;
}

interface UsePokemonDetailsReturn {
  pokemon: Pokemon | null;
  loading: boolean;
  error: Error | undefined;
}

/**
 * Hook para obtener los detalles completos de un Pokémon específico
 * 
 * @param id - ID del Pokémon
 * @returns Objeto con pokemon, loading y error
 */
export const usePokemonDetails = ({ id }: UsePokemonDetailsParams): UsePokemonDetailsReturn => {
  const { data, loading, error } = useQuery<GetPokemonDetailsResponse>(GET_POKEMON_DETAILS, {
    variables: { id },
    skip: !id || id <= 0,
    fetchPolicy: 'cache-first',
  });

  const pokemon = data?.pokemon_v2_pokemon?.[0] 
    ? transformPokemonData(data.pokemon_v2_pokemon[0]) 
    : null;

  return {
    pokemon,
    loading,
    error: error as Error | undefined,
  };
};
