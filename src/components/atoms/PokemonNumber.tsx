import { formatPokemonNumber } from '../../utils/pokemonHelpers';
import './PokemonNumber.css';

interface PokemonNumberProps {
  id: number;
}

/**
 * Atom: PokemonNumber
 * Muestra el número del Pokémon formateado (ej: #001)
 */
const PokemonNumber = ({ id }: PokemonNumberProps) => {
  return (
    <span className="pokemon-number">
      {formatPokemonNumber(id)}
    </span>
  );
};

export default PokemonNumber;
