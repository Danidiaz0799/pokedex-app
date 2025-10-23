import type { Pokemon, PokemonType, PokemonSprites } from '../types/pokemon';
import type { RawPokemonData } from '../types/graphql';

/**
 * Transforma los datos crudos de la API GraphQL al formato de nuestro modelo Pokemon
 */
export const transformPokemonData = (rawData: RawPokemonData): Pokemon => {
  // Extraer sprites del JSON - puede venir como string o como objeto
  let spritesData = null;
  
  if (rawData.pokemon_v2_pokemonsprites?.[0]?.sprites) {
    const spritesRaw = rawData.pokemon_v2_pokemonsprites[0].sprites;
    
    // Si es string, parsearlo; si ya es objeto, usarlo directamente
    if (typeof spritesRaw === 'string') {
      try {
        spritesData = JSON.parse(spritesRaw);
      } catch (e) {
        console.error('Error parsing sprites:', e);
        spritesData = null;
      }
    } else {
      spritesData = spritesRaw;
    }
  }

  const sprites: PokemonSprites = {
    front_default: spritesData?.front_default || 
                   spritesData?.other?.['official-artwork']?.front_default ||
                   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
    other: spritesData?.other,
  };

  // Transformar tipos
  const types: PokemonType[] = rawData.pokemon_v2_pokemontypes?.map((t) => ({
    type: {
      name: t.pokemon_v2_type.name,
    },
  })) || [];

  // Transformar stats si existen
  const stats = rawData.pokemon_v2_pokemonstats?.map((s) => ({
    base_stat: s.base_stat,
    stat: {
      name: s.pokemon_v2_stat.name,
    },
  })) || undefined;

  return {
    id: rawData.id,
    name: rawData.name,
    sprites,
    types,
    height: rawData.height,
    weight: rawData.weight,
    stats,
  };
};

/**
 * Formatea el número del Pokémon con ceros a la izquierda
 * Ejemplo: 1 -> #001, 25 -> #025
 */
export const formatPokemonNumber = (id: number): string => {
  return `#${id.toString().padStart(3, '0')}`;
};

/**
 * Capitaliza la primera letra de un string
 * Ejemplo: "pikachu" -> "Pikachu"
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Ordena una lista de Pokémon alfabéticamente por nombre
 */
export const sortPokemonByName = (pokemons: Pokemon[]): Pokemon[] => {
  return [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Ordena una lista de Pokémon por número (ID)
 */
export const sortPokemonByNumber = (pokemons: Pokemon[]): Pokemon[] => {
  return [...pokemons].sort((a, b) => a.id - b.id);
};

/**
 * Filtra Pokémon por término de búsqueda (nombre o número)
 */
export const filterPokemons = (pokemons: Pokemon[], searchTerm: string): Pokemon[] => {
  if (!searchTerm) return pokemons;

  const term = searchTerm.toLowerCase().replace('#', '').trim();
  
  return pokemons.filter((pokemon) => {
    // Buscar por nombre
    if (pokemon.name.toLowerCase().includes(term)) {
      return true;
    }
    
    // Buscar por número exacto (1, 25, 150)
    if (pokemon.id.toString() === term) {
      return true;
    }
    
    // Buscar por número formateado con ceros (001, 025, 150)
    const formattedNumber = pokemon.id.toString().padStart(3, '0');
    if (formattedNumber === term || formattedNumber.includes(term)) {
      return true;
    }
    
    return false;
  });
};

/**
 * Obtiene el color asociado a un tipo de Pokémon
 */
export const getTypeColor = (typeName: string): string => {
  const typeColors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };

  return typeColors[typeName.toLowerCase()] || '#A8A878';
};

/**
 * Obtiene la URL de la imagen de alta calidad del Pokémon
 */
export const getPokemonImageUrl = (pokemon: Pokemon): string => {
  // Prioridad: Official Artwork > Dream World > Front Default
  return (
    pokemon.sprites.other?.['official-artwork']?.front_default ||
    pokemon.sprites.other?.dream_world?.front_default ||
    pokemon.sprites.front_default ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  );
};

/**
 * Interfaz para el resultado de validación
 */
export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

/**
 * Valida la entrada de búsqueda
 * Reglas:
 * - Solo letras y números (sin caracteres especiales)
 * - Permite cadena vacía (para limpiar búsqueda)
 */
export const validateSearchInput = (input: string): ValidationResult => {
  // Permitir cadena vacía para limpiar búsqueda
  if (input.trim() === '') {
    return { isValid: true };
  }

  // Validar que solo contenga letras y números (sin caracteres especiales)
  const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
  if (!alphanumericRegex.test(input)) {
    return {
      isValid: false,
      errorMessage: 'Search can only contain letters and numbers',
    };
  }

  return { isValid: true };
};
