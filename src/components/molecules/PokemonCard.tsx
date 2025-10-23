import type { Pokemon } from '../../types/pokemon';
import { capitalize, getPokemonImageUrl } from '../../utils/pokemonHelpers';
import { PokemonNumber } from '../atoms';
import './PokemonCard.css';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: () => void;
}

/**
 * Molecule: PokemonCard
 * Tarjeta que muestra la información básica de un Pokémon
 */
const PokemonCard = ({ pokemon, onClick }: PokemonCardProps) => {
  return (
    <article 
      className="pokemon-card" 
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <div className="pokemon-card__number">
        <PokemonNumber id={pokemon.id} />
      </div>
      
      <div className="pokemon-card__image-container">
        <img 
          src={getPokemonImageUrl(pokemon)} 
          alt={pokemon.name}
          className="pokemon-card__image"
          loading="lazy"
        />
      </div>
      
      <h3 className="pokemon-card__name">
        {capitalize(pokemon.name)}
      </h3>
    </article>
  );
};

export default PokemonCard;
