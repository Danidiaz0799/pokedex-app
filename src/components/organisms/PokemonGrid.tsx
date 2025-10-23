import type { Pokemon } from '../../types/pokemon';
import { PokemonCard } from '../molecules';
import { PokeballIcon } from '../atoms';
import './PokemonGrid.css';

interface PokemonGridProps {
  pokemons: Pokemon[];
  onPokemonClick?: (pokemon: Pokemon) => void;
  isLoading?: boolean;
  isEmpty?: boolean;
  searchTerm?: string;
}

/**
 * Organism: PokemonGrid
 * Grid responsivo que renderiza múltiples PokemonCard
 */
const PokemonGrid = ({ 
  pokemons, 
  onPokemonClick, 
  isLoading = false,
  isEmpty = false,
  searchTerm = ''
}: PokemonGridProps) => {
  
  // Estado de carga
  if (isLoading) {
    return (
      <div className="pokemon-grid-state">
        <div className="pokemon-grid-loader">
          <div className="pokeball-loader">
            <PokeballIcon size={80} color="#DC0A2D" />
          </div>
          <p>Loading Pokémon...</p>
        </div>
      </div>
    );
  }
  
  // Sin resultados
  if (isEmpty) {
    return (
      <div className="pokemon-grid-state">
        <div className="pokemon-grid-empty">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            <path d="M15 9l-6 6M9 9l6 6" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h3>No Pokémon found</h3>
          {searchTerm && (
            <p>Try searching for something else...</p>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onPokemonClick?.(pokemon)}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;
