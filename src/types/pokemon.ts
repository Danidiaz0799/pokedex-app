/**
 * Tipos y interfaces para los datos de Pokémon
 */

// Tipo individual de un Pokémon (ej: fire, water, grass)
export interface PokemonType {
  type: {
    name: string;
  };
}

// Sprites/imágenes del Pokémon
export interface PokemonSprites {
  front_default: string;
  other?: {
    'official-artwork'?: {
      front_default: string;
    };
    dream_world?: {
      front_default: string;
    };
  };
}

// Estadísticas base del Pokémon
export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

// Habilidades del Pokémon
export interface PokemonAbility {
  ability: {
    name: string;
  };
}

// Estructura completa de un Pokémon
export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
  height?: number;
  weight?: number;
  stats?: PokemonStat[];
  abilities?: PokemonAbility[];
  species?: {
    flavor_text_entries?: Array<{
      flavor_text: string;
      language: {
        name: string;
      };
    }>;
  };
}

// Respuesta de la API GraphQL para lista de Pokémon
export interface PokemonListResponse {
  pokemon_v2_pokemon: Pokemon[];
}

// Props para componentes que usan Pokémon
export interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: () => void;
}

// Estado de ordenamiento
export type SortOrder = 'number' | 'name';

// Filtros de búsqueda
export interface PokemonFilters {
  searchTerm?: string;
  sortBy?: SortOrder;
  type?: string;
}
