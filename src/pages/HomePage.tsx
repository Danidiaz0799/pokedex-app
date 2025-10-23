import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SortOrder, Pokemon } from '../types/pokemon';
import { usePokemons } from '../hooks';
import { useFavorites } from '../context/FavoritesContext';
import { Header } from '../components/molecules';
import { PokemonGrid } from '../components/organisms';
import { MainLayout } from '../components/templates';

/**
 * Page: HomePage
 * Página principal que muestra el listado de Pokémon con:
 * - Búsqueda validada (mínimo 3 caracteres, solo letras)
 * - Filtrado por tipo
 * - Ordenamiento por nombre/número
 */
const HomePage = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const [sortBy, setSortBy] = useState<SortOrder>('number');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  const { pokemons, loading, error } = usePokemons({ 
    sortBy, 
    searchTerm 
  });

  // Filtrar Pokémon por tipo y favoritos
  const filteredPokemons = useMemo(() => {
    let filtered = pokemons;
    
    // Filtrar por tipo
    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === selectedType)
      );
    }
    
    // Filtrar por favoritos
    if (showFavoritesOnly) {
      filtered = filtered.filter((pokemon) => favorites.includes(pokemon.id));
    }
    
    return filtered;
  }, [pokemons, selectedType, showFavoritesOnly, favorites]);

  const handlePokemonClick = (pokemon: Pokemon) => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleTypeSelect = (type: string | null) => {
    setSelectedType(type);
  };

  // Manejo de errores
  if (error) {
    return (
      <MainLayout
        header={
          <Header
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
            favoritesCount={favorites.length}
            selectedType={selectedType}
            onTypeSelect={handleTypeSelect}
          />
        }
      >
        <div className="error-container">
          <div className="error-message">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2"/>
              <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h2>Oops! Something went wrong</h2>
            <p>{error.message}</p>
            <button onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      header={
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showFavoritesOnly={showFavoritesOnly}
          onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
          favoritesCount={favorites.length}
          selectedType={selectedType}
          onTypeSelect={handleTypeSelect}
        />
      }
    >
      {/* Lista de Pokémon */}
      <PokemonGrid
        pokemons={filteredPokemons}
        onPokemonClick={handlePokemonClick}
        isLoading={loading}
        isEmpty={filteredPokemons.length === 0}
        searchTerm={searchTerm}
      />
    </MainLayout>
  );
};

export default HomePage;
