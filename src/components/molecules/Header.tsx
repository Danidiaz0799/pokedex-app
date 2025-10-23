import type { SortOrder } from '../../types/pokemon';
import { ValidatedSearchInput } from '../atoms';
import SortDropdown from './SortDropdown/SortDropdown';
import { TypeFilterList } from '../organisms';
import './Header.css';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOrder;
  onSortChange: (sort: SortOrder) => void;
  showFavoritesOnly?: boolean;
  onToggleFavorites?: () => void;
  favoritesCount?: number;
  selectedType?: string | null;
  onTypeSelect?: (type: string | null) => void;
}

/**
 * Molecule: Header
 * Barra superior con logo, búsqueda validada y dropdown de ordenamiento
 */
const Header = ({ 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  showFavoritesOnly = false,
  onToggleFavorites,
  favoritesCount = 0,
  selectedType,
  onTypeSelect
}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo y título */}
        <div className="header__brand">
          <div className="header__logo">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
              {/* Círculo completo blanco de fondo */}
              <circle cx="50" cy="50" r="45" fill="white"/>
              {/* Línea horizontal roja */}
              <line x1="5" y1="50" x2="95" y2="50" stroke="#DC0A2D" strokeWidth="8"/>
              {/* Círculo central externo */}
              <circle cx="50" cy="50" r="15" fill="white" stroke="#DC0A2D" strokeWidth="8"/>
              {/* Círculo central interno */}
              <circle cx="50" cy="50" r="8" fill="white" stroke="#DC0A2D" strokeWidth="3"/>
            </svg>
          </div>
          <h1 className="header__title">Pokédex</h1>
        </div>

        {/* Búsqueda y ordenamiento */}
        <div className="header__controls">
          <ValidatedSearchInput
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search"
          />
          
          {onTypeSelect && (
            <TypeFilterList
              selectedType={selectedType || null}
              onSelectType={onTypeSelect}
            />
          )}
          
          {onToggleFavorites && (
            <button
              className={`header__favorites-btn ${showFavoritesOnly ? 'active' : ''}`}
              onClick={onToggleFavorites}
              aria-label="Toggle favorites"
              title={showFavoritesOnly ? 'Show all Pokémon' : 'Show favorites only'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill={showFavoritesOnly ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {favoritesCount > 0 && (
                <span className="header__favorites-count">{favoritesCount}</span>
              )}
            </button>
          )}
          
          <SortDropdown
            sortBy={sortBy}
            onSortChange={onSortChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
