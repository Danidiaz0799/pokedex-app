import { useState, useRef, useEffect } from 'react';
import { useTypes } from '../../../hooks';
import { TypeBadge } from '../../atoms';
import './TypeFilterList.css';

interface TypeFilterListProps {
  selectedType: string | null;
  onSelectType: (type: string | null) => void;
}

/**
 * Organism: TypeFilterList
 * Dropdown para filtrar Pokémon por tipo
 */
const TypeFilterList = ({ selectedType, onSelectType }: TypeFilterListProps) => {
  const { types, loading, error } = useTypes();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="type-filter-list">
        <button className="type-filter-trigger" disabled>Loading...</button>
      </div>
    );
  }

  if (error) {
    return (
      <div className="type-filter-list">
        <button className="type-filter-trigger" disabled>Error</button>
      </div>
    );
  }

  const handleSelectType = (type: string | null) => {
    onSelectType(type);
    setIsOpen(false);
  };

  const displayText = selectedType 
    ? selectedType.charAt(0).toUpperCase() + selectedType.slice(1)
    : 'All Types';

  return (
    <div className="type-filter-list" ref={dropdownRef}>
      <button
        className="type-filter-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Filter by type"
      >
        {selectedType ? (
          <TypeBadge typeName={selectedType} />
        ) : (
          <span className="type-filter-all">{displayText}</span>
        )}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className={`type-filter-arrow ${isOpen ? 'open' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="type-filter-menu">
          <button
            className={`type-filter-option ${selectedType === null ? 'active' : ''}`}
            onClick={() => handleSelectType(null)}
          >
            <span className="type-filter-option-label">All Types</span>
          </button>

          {types.map((type) => (
            <button
              key={type.id}
              className={`type-filter-option ${selectedType === type.name ? 'active' : ''}`}
              onClick={() => handleSelectType(type.name)}
            >
              <TypeBadge typeName={type.name} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeFilterList;
