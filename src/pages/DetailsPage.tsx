import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { usePokemonDetails } from '../hooks';
import { useFavorites } from '../context/FavoritesContext';
import { capitalize, getTypeColor, getPokemonImageUrl } from '../utils';
import { TypeBadge, PokemonNumber, FavoriteButton, StatBar, PokeballIcon } from '../components/atoms';
import './DetailsPage.css';

/**
 * Page: DetailsPage
 * Página de detalles de un Pokémon específico
 */
const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pokemonId = parseInt(id || '0', 10);
  
  const { pokemon, loading, error } = usePokemonDetails({ id: pokemonId });
  const { isFavorite, toggleFavorite } = useFavorites();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Obtener el color principal basado en el primer tipo
  const primaryType = pokemon?.types[0]?.type.name || 'normal';
  const backgroundColor = getTypeColor(primaryType);

  // Aplicar color del scrollbar dinámicamente
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper && !loading && !error) {
      const style = document.createElement('style');
      style.textContent = `
        .details-page__wrapper::-webkit-scrollbar-thumb {
          background: ${backgroundColor} !important;
        }
        .details-page__wrapper::-webkit-scrollbar-thumb:hover {
          background: ${backgroundColor}dd !important;
        }
      `;
      wrapper.appendChild(style);
      
      return () => {
        if (wrapper && style.parentNode) {
          wrapper.removeChild(style);
        }
      };
    }
  }, [backgroundColor, loading, error]);

  // Loading state
  if (loading) {
    return (
      <div className="details-page details-page--loading">
        <div className="details-loader">
          <div className="pokeball-loader">
            <PokeballIcon size={80} color="#DC0A2D" />
          </div>
          <p>Loading Pokémon details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !pokemon) {
    return (
      <div className="details-page details-page--error">
        <div className="details-error">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <h2>Pokémon not found</h2>
          <p>{error?.message || 'This Pokémon does not exist'}</p>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    );
  }

  // Mapeo de nombres de stats a etiquetas
  const statLabels: Record<string, string> = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD',
  };

  return (
    <div className="details-page" style={{ 
      '--type-color': backgroundColor 
    } as React.CSSProperties}>
      <div className="details-page__wrapper" ref={wrapperRef} style={{ 
        '--type-color': backgroundColor 
      } as React.CSSProperties}>
        {/* Header con botón de volver */}
        <header className="details-header">
          <div className="details-header__left">
            <button className="back-button" onClick={() => navigate(-1)}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h1 className="details-header__name">{capitalize(pokemon.name)}</h1>
          </div>

          <div className="details-header__right">
            <div className="details-header__number">
              <PokemonNumber id={pokemon.id} />
            </div>
            <FavoriteButton
              isFavorite={isFavorite(pokemon.id)}
              onClick={() => toggleFavorite(pokemon.id)}
            />
          </div>
        </header>

        {/* Botones de navegación entre Pokémon */}
        <button 
          className="pokemon-nav-btn pokemon-nav-btn--prev"
          onClick={() => navigate(`/pokemon/${Math.max(1, pokemon.id - 1)}`)}
          disabled={pokemon.id <= 1}
          aria-label="Previous Pokémon"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button 
          className="pokemon-nav-btn pokemon-nav-btn--next"
          onClick={() => navigate(`/pokemon/${Math.min(151, pokemon.id + 1)}`)}
          disabled={pokemon.id >= 151}
          aria-label="Next Pokémon"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Imagen del Pokémon */}
        <div className="details-image-container">
          <div className="details-image-watermark">
            <PokeballIcon size={200} color="rgba(255, 255, 255, 0.15)" />
          </div>
          <img 
            src={getPokemonImageUrl(pokemon)} 
            alt={pokemon.name}
            className="details-image"
          />
        </div>

      {/* Contenido principal */}
      <div className="details-content">
        {/* Tipos */}
        <div className="details-types">
          {pokemon.types.map((type, index) => (
            <TypeBadge key={index} typeName={type.type.name} />
          ))}
        </div>

        {/* Sección unificada About + Stats */}
        <section className="details-section">
          <h2 className="details-section__title">About</h2>
          
          {/* Info Grid (Weight, Height & Moves) */}
          <div className="details-info-grid">
            <div className="details-info-item">
              <div className="details-info-item__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="6" r="2"/>
                  <path d="M12 8v3m0 0a4 4 0 0 1-4 4H6a2 2 0 0 1-2-2v-1m8-1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-1"/>
                </svg>
              </div>
              <div className="details-info-item__value">{(pokemon.weight || 0) / 10} kg</div>
              <div className="details-info-item__label">Weight</div>
            </div>

            <div className="details-info-item">
              <div className="details-info-item__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="M7 16l4-8 4 8"/>
                  <line x1="8" y1="13" x2="14" y2="13"/>
                </svg>
              </div>
              <div className="details-info-item__value">{(pokemon.height || 0) / 10} m</div>
              <div className="details-info-item__label">Height</div>
            </div>

            <div className="details-info-item">
              <div className="details-info-item__value">
                {pokemon.abilities && pokemon.abilities.length > 0 
                  ? capitalize(pokemon.abilities[0].ability.name.replace(/-/g, ' '))
                  : 'Unknown'}
              </div>
              <div className="details-info-item__label">Moves</div>
            </div>
          </div>
          
          {/* Description */}
          <p className="details-description">
            A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.
          </p>

          {/* Base Stats dentro de la misma sección */}
          {pokemon.stats && pokemon.stats.length > 0 && (
            <>
              <h3 className="details-stats__title">Base Stats</h3>
              <div className="details-stats">
                {pokemon.stats.map((stat, index) => (
                  <StatBar
                    key={index}
                    label={statLabels[stat.stat.name] || stat.stat.name}
                    value={stat.base_stat}
                    color={backgroundColor}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
      </div>
    </div>
  );
};

export default DetailsPage;
