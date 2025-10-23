import { useQuery } from '@apollo/client/react';
import { useMemo } from 'react';
import { GET_POKEMONS } from '../graphql/queries';
import type { Pokemon, SortOrder } from '../types/pokemon';
import type { GetPokemonsResponse } from '../types/graphql';
import { transformPokemonData, sortPokemonByName, sortPokemonByNumber, filterPokemons } from '../utils/pokemonHelpers';

/**
 * Interface para los parámetros del hook
 */
interface UsePokemonsParams {
  limit?: number;
  offset?: number;
  sortBy?: SortOrder;
  searchTerm?: string;
}

/**
 * Interface para el valor de retorno del hook
 */
interface UsePokemonsReturn {
  pokemons: Pokemon[];
  loading: boolean;
  error: Error | undefined;
  refetch: () => void;
}

/**
 * Hook personalizado para obtener y gestionar la lista de Pokémon
 * 
 * @param params - Parámetros de configuración (limit, offset, sortBy, searchTerm)
 * @returns Objeto con pokemons, loading, error y refetch
 * 
 * @example
 * ```tsx
 * const { pokemons, loading, error } = usePokemons({ 
 *   sortBy: 'name',
 *   searchTerm: 'pika' 
 * });
 * ```
 */
export const usePokemons = ({
  limit = 151,
  offset = 0,
  sortBy = 'number',
  searchTerm = '',
}: UsePokemonsParams = {}): UsePokemonsReturn => {
  // Ejecutar la query de GraphQL
  const { data, loading, error, refetch } = useQuery<GetPokemonsResponse>(GET_POKEMONS, {
    variables: { limit, offset },
    fetchPolicy: 'cache-first', // Usar caché cuando esté disponible
  });

  // Transformar, filtrar y ordenar los datos
  const pokemons = useMemo(() => {
    if (!data?.pokemon_v2_pokemon) {
      return [];
    }

    // Transformar los datos crudos de la API
    let transformedPokemons = data.pokemon_v2_pokemon.map(transformPokemonData);

    // Aplicar filtro de búsqueda si existe
    if (searchTerm) {
      transformedPokemons = filterPokemons(transformedPokemons, searchTerm);
    }

    // Aplicar ordenamiento
    if (sortBy === 'name') {
      return sortPokemonByName(transformedPokemons);
    } else {
      return sortPokemonByNumber(transformedPokemons);
    }
  }, [data, sortBy, searchTerm]);

  return {
    pokemons,
    loading,
    error: error as Error | undefined,
    refetch: () => {
      refetch();
    },
  };
};

/**
 * Hook para obtener Pokémon ordenados alfabéticamente por defecto
 * 
 * @example
 * ```tsx
 * const { pokemons, loading, error } = usePokemonsAlphabetically();
 * ```
 */
export const usePokemonsAlphabetically = () => {
  return usePokemons({ sortBy: 'name' });
};

/**
 * Hook para obtener Pokémon ordenados por número (ID) por defecto
 * 
 * @example
 * ```tsx
 * const { pokemons, loading, error } = usePokemonsByNumber();
 * ```
 */
export const usePokemonsByNumber = () => {
  return usePokemons({ sortBy: 'number' });
};
