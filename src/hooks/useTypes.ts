import { useQuery } from '@apollo/client/react';
import { GET_POKEMON_TYPES } from '../graphql/queries';
import type { GetPokemonTypesResponse, PokemonTypeData } from '../types/graphql';

// Para evitar error de TypeScript con verbatimModuleSyntax

/**
 * Hook personalizado para obtener todos los tipos de Pokémon
 * Utiliza la query GET_POKEMON_TYPES
 */
export const useTypes = () => {
  const { data, loading, error } = useQuery<GetPokemonTypesResponse>(
    GET_POKEMON_TYPES,
    {
      fetchPolicy: 'cache-first', // Los tipos no cambian, usar caché
    }
  );

  const types: PokemonTypeData[] = data?.pokemon_v2_type || [];

  return {
    types,
    loading,
    error,
  };
};
