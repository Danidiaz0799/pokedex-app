import { getTypeColor } from '../../utils/pokemonHelpers';
import './TypeBadge.css';

interface TypeBadgeProps {
  typeName: string;
}

/**
 * Atom: TypeBadge
 * Muestra el nombre de un tipo de Pokémon con su color específico
 */
const TypeBadge = ({ typeName }: TypeBadgeProps) => {
  const backgroundColor = getTypeColor(typeName);
  
  return (
    <span 
      className="type-badge" 
      style={{ backgroundColor }}
    >
      {typeName}
    </span>
  );
};

export default TypeBadge;
