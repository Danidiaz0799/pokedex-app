import { useState, useRef, useEffect } from 'react';
import type { SortOrder } from '../../../types/pokemon';
import './SortDropdown.css';

interface SortDropdownProps {
  sortBy: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

/**
 * Molecule: SortDropdown
 * Dropdown flotante para seleccionar orden de Pokémon
 */
const SortDropdown = ({ sortBy, onSortChange }: SortDropdownProps) => {
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

  const handleSortChange = (sort: SortOrder) => {
    onSortChange(sort);
    setIsOpen(false);
  };

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <button
        className="sort-dropdown__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Sort options"
      >
        {sortBy === 'number' ? (
          // Símbolo # para ordenar por número
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="9" x2="20" y2="9"/>
            <line x1="4" y1="15" x2="20" y2="15"/>
            <line x1="10" y1="3" x2="8" y2="21"/>
            <line x1="16" y1="3" x2="14" y2="21"/>
          </svg>
        ) : (
          // Letra A con subrayado para ordenar por nombre
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <text x="12" y="16" fontSize="20" fontWeight="bold" textAnchor="middle" fill="currentColor">A</text>
            <line x1="6" y1="19" x2="18" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="sort-dropdown__menu">
          <div className="sort-dropdown__header">
            <span className="sort-dropdown__title">Sort by:</span>
          </div>
          
          <label className="sort-dropdown__option">
            <input
              type="radio"
              name="sort"
              value="number"
              checked={sortBy === 'number'}
              onChange={() => handleSortChange('number')}
              className="sort-dropdown__radio"
            />
            <span className="sort-dropdown__radio-custom"></span>
            <span className="sort-dropdown__label">Number</span>
          </label>

          <label className="sort-dropdown__option">
            <input
              type="radio"
              name="sort"
              value="name"
              checked={sortBy === 'name'}
              onChange={() => handleSortChange('name')}
              className="sort-dropdown__radio"
            />
            <span className="sort-dropdown__radio-custom"></span>
            <span className="sort-dropdown__label">Name</span>
          </label>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
