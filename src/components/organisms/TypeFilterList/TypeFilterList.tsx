import { useTypes } from '../../../hooks';
import { TypeBadge } from '../../atoms';
import './TypeFilterList.css';

interface TypeFilterListProps {
  selectedType: string | null;
  onSelectType: (type: string | null) => void;
}

/**
 * Organism: TypeFilterList
 * Muestra todos los tipos de Pokémon como opciones seleccionables
 * Permite filtrar la lista de Pokémon por tipo
 */
const TypeFilterList = ({ selectedType, onSelectType }: TypeFilterListProps) => {
  const { types, loading, error } = useTypes();

  if (loading) {
    return (
      <div className="type-filter-list">
        <p className="type-filter-loading">Loading types...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="type-filter-list">
        <p className="type-filter-error">Error loading types</p>
      </div>
    );
  }

  return (
    <div className="type-filter-list">
      <h3 className="type-filter-title">Filter by Type</h3>
      <div className="type-filter-buttons">
        {/* Botón "All" para limpiar filtro */}
        <button
          className={`type-filter-button ${selectedType === null ? 'active' : ''}`}
          onClick={() => onSelectType(null)}
        >
          All
        </button>

        {/* Botones de tipos */}
        {types.map((type) => (
          <button
            key={type.id}
            className={`type-filter-button ${selectedType === type.name ? 'active' : ''}`}
            onClick={() => onSelectType(type.name)}
          >
            <TypeBadge typeName={type.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeFilterList;
