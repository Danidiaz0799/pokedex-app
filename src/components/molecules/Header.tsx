import type { SortOrder } from '../../types/pokemon';
import { ValidatedSearchInput } from '../atoms';
import SortDropdown from './SortDropdown/SortDropdown';
import './Header.css';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortBy: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

/**
 * Molecule: Header
 * Barra superior con logo, búsqueda validada y dropdown de ordenamiento
 */
const Header = ({ 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange
}: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo y título */}
        <div className="header__brand">
          <div className="header__logo">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2.5"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              <line x1="12" y1="2" x2="12" y2="7" stroke="white" strokeWidth="2"/>
              <line x1="12" y1="17" x2="12" y2="22" stroke="white" strokeWidth="2"/>
              <line x1="2" y1="12" x2="7" y2="12" stroke="white" strokeWidth="2"/>
              <line x1="17" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2"/>
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
