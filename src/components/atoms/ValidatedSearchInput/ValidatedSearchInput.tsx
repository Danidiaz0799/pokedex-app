import { useState } from 'react';
import { validateSearchInput } from '../../../utils/pokemonHelpers';
import type { ValidationResult } from '../../../utils/pokemonHelpers';
import './ValidatedSearchInput.css';

interface ValidatedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * Atom: ValidatedSearchInput
 * Input de búsqueda con validación de entrada
 * - Solo letras (sin números ni caracteres especiales)
 */
const ValidatedSearchInput = ({ 
  value, 
  onChange, 
  placeholder = 'Search Pokémon...' 
}: ValidatedSearchInputProps) => {
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (newValue: string) => {
    // Actualizar el valor visual del input siempre
    setInputValue(newValue);
    
    const validation: ValidationResult = validateSearchInput(newValue);
    
    if (validation.isValid) {
      // Entrada válida: actualizar búsqueda
      setError(null);
      onChange(newValue);
    } else {
      // Caracteres especiales o números
      setError(validation.errorMessage || 'Invalid input');
    }
  };

  const handleClear = () => {
    setError(null);
    setInputValue('');
    onChange('');
  };

  return (
    <div className="validated-search-container">
      <div className={`validated-search-input-wrapper ${error ? 'has-error' : ''}`}>
        <svg 
          className="search-icon" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          className="validated-search-input"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={error !== null}
          aria-describedby={error ? 'search-error' : undefined}
        />
        {inputValue && (
          <button 
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
            type="button"
          >
            ×
          </button>
        )}
      </div>
      
      {error && (
        <div 
          id="search-error" 
          className="validation-error"
          role="alert"
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            className="error-icon"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
};

export default ValidatedSearchInput;
