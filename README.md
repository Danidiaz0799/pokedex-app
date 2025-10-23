# 🎮 Pokédex App# 🎮 Pokédex App# 🎮 Pokédex App# 🎮 Pokédex App# 🎮 Pokédex App# 🎮 Pokédex App# React + TypeScript + Vite



Modern web application built with **React 19**, **TypeScript**, and **Vite** that consumes the **PokeAPI GraphQL** to display detailed information of the first 151 Pokémon.



**🚀 Live Demo:** [https://precious-empanada-59452a.netlify.app](https://precious-empanada-59452a.netlify.app)Modern web application built with React 19, TypeScript, and Vite that consumes the PokeAPI GraphQL to display detailed information of the first 151 Pokémon.



![Pokédex App](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)

![Vite](https://img.shields.io/badge/Vite-7.1.11-646CFF?style=for-the-badge&logo=vite)**🚀 Live Demo:** [https://precious-empanada-59452a.netlify.app](https://precious-empanada-59452a.netlify.app)# 🎮 Pokédex App

![Tests](https://img.shields.io/badge/Tests-27%20passing-success?style=for-the-badge)



---

## 🎯 Features> Aplicación web moderna de Pokédex construida con **React 19**, **TypeScript** y **Vite**, que consume la **PokeAPI GraphQL** para mostrar información detallada de los 151 Pokémon de la primera generación.

## 🎯 Features



- 🔍 **Validated Search** - Search system with validation (minimum 3 characters, letters only)

- 🎨 **Type Filtering** - Filter Pokémon by any of the 18 available types- 🔍 **Validated Search** - Search system with validation (minimum 3 characters, letters only)## 🔗 Demo en Vivo

- 🔢 **Dynamic Sorting** - Sort by Pokédex number or alphabetically with visual indicator (# / A)

- 📄 **Details Page** - Complete information with stats, weight, height, and types- 🎨 **Type Filtering** - Filter Pokémon by any of the 18 available types

- ⭐ **Favorites System** - Save your favorite Pokémon with localStorage persistence

- 🧭 **SPA Navigation** - Routing with React Router DOM without page reloads- 🔢 **Dynamic Sorting** - Sort by Pokédex number or alphabetically with visual indicator (# / A)**🚀 [Ver Aplicación Desplegada](https://precious-empanada-59452a.netlify.app)**

- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile

- ⚡ **GraphQL Client** - Efficient data consumption with Apollo Client and cache- 📄 **Details Page** - Complete information with stats, weight, height, and types

- 🧪 **Unit Tests** - 27 tests passing with Vitest and Testing Library

- ⭐ **Favorites System** - Save your favorite Pokémon with localStorage persistence> 🔐 Password temporal: `My-Drop-Site` (se eliminará al crear cuenta gratuita en Netlify)

---

- 🧭 **SPA Navigation** - Routing with React Router DOM without page reloads

## 🏗️ Tech Stack

- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile---

| Technology | Version | Purpose |

|------------|---------|---------|- ⚡ **GraphQL Client** - Efficient data consumption with Apollo Client and cache

| **React** | 19.1.1 | UI library with modern hooks |

| **TypeScript** | 5.9.3 | Static typing and better DX |- 🧪 **Unit Tests** - 27 tests passing with Vitest and Testing Library

| **Vite** | 7.1.11 | Ultra-fast build tool |

| **Apollo Client** | 4.0.7 | GraphQL client with cache |

| **React Router DOM** | 7.9.4 | SPA routing |

| **Vitest** | 4.0.1 | Testing framework |## 🏗️ Tech Stack## 🔗 Demo en VivoAplicación web moderna de Pokédex construida con **React 19**, **TypeScript** y **Vite**, que consume la **PokeAPI GraphQL** para mostrar información detallada de los 151 Pokémon de la primera generación.

| **Testing Library** | Latest | React component testing |

| **Pure CSS** | - | Styles without frameworks |

| **PokeAPI GraphQL** | v1beta | Pokémon data API |

| Technology | Version | Purpose |

---

|------------|---------|---------|

## 📁 Project Structure (Atomic Design)

| **React** | 19.1.1 | UI library with modern hooks |**🚀 [Ver Aplicación Desplegada](#)** _(Actualizar después del deploy)_

```

pokedex-app/| **TypeScript** | 5.9.3 | Static typing and better DX |

├── src/

│   ├── components/| **Vite** | 7.1.11 | Ultra-fast build tool |

│   │   ├── atoms/              # Basic components

│   │   ├── molecules/          # Atom combinations| **Apollo Client** | 4.0.7 | GraphQL client with cache |

│   │   ├── organisms/          # Complex sections

│   │   └── templates/          # Layouts| **React Router DOM** | 7.9.4 | SPA routing |---## ✨ CaracterísticasAplicación web moderna de Pokédex construida con React, TypeScript y Vite, consumiendo la PokeAPI GraphQL.

│   ├── pages/                  # HomePage, DetailsPage

│   ├── hooks/                  # Custom Hooks| **Vitest** | 4.0.1 | Testing framework |

│   ├── graphql/                # GraphQL Queries

│   ├── context/                # React Context (Favorites)| **Testing Library** | Latest | React component testing |

│   ├── types/                  # TypeScript Definitions

│   ├── utils/                  # Utilities| **Pure CSS** | - | Styles without frameworks |

│   ├── config/                 # Apollo Client config

│   └── test/                   # Unit tests (27 tests)| **PokeAPI GraphQL** | v1beta | Pokémon data API |## ✨ Características

├── public/

│   └── _redirects              # Netlify SPA redirects

├── netlify.toml                # Netlify configuration

└── vitest.config.ts            # Vitest configuration## 📁 Project Structure (Atomic Design)

```



---

```- ✅ **Lista de Pokémon**: Visualización de los 151 Pokémon originales con imágenes official artwork- ✅ **Lista de Pokémon**: Visualización de los 151 Pokémon originales con imágenes official artwork

## 🚀 Quick Start

pokedex-app/

### Prerequisites

├── public/- ✅ **Búsqueda Validada**: Sistema de búsqueda con validación (mínimo 3 caracteres, solo letras)

- Node.js 18+ 

- npm or yarn│   └── _redirects              # Netlify redirects for SPA



### Installation│- ✅ **Filtrado por Tipo**: Filtra Pokémon por cualquiera de los 18 tipos disponibles- ✅ **Búsqueda Validada**: Sistema de búsqueda con validación (mínimo 3 caracteres, solo letras)



```bash├── src/

# Clone the repository

git clone https://github.com/Danidiaz0799/pokedex-app.git│   ├── components/             # Components organized by Atomic Design- ✅ **Ordenamiento Dinámico**: Ordena por número de Pokédex o alfabéticamente con indicador visual

cd pokedex-app

│   │   ├── atoms/              # Basic components

# Install dependencies

npm install│   │   │   ├── TypeBadge.tsx/css- ✅ **Página de Detalles**: Información completa con estadísticas, peso, altura y tipos- ✅ **Filtrado por Tipo**: Filtra Pokémon por cualquiera de los 18 tipos disponibles## 🚀 TecnologíasAplicación web moderna de Pokédex construida con React, TypeScript y Vite, consumiendo la PokeAPI GraphQL.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



# Start development server│   │   │   ├── PokemonNumber.tsx/css

npm run dev

```│   │   │   ├── ValidatedSearchInput/- ✅ **Sistema de Favoritos**: Guarda tus Pokémon favoritos con persistencia en localStorage



Application available at: **http://localhost:5173**│   │   │   ├── FavoriteButton.tsx/css



### Available Scripts│   │   │   └── StatBar.tsx/css- ✅ **Navegación SPA**: Routing con React Router DOM sin recargas de página- ✅ **Ordenamiento**: Ordena por número de Pokédex o alfabéticamente



```bash│   │   │

npm run dev              # Development server

npm run build            # Build for production│   │   ├── molecules/          # Atom combinations- ✅ **Diseño Responsive**: Optimizado para desktop, tablet y mobile

npm run preview          # Preview production build

npm run lint             # Run ESLint│   │   │   ├── PokemonCard.tsx/css

npm test                 # Tests in watch mode

npm run test:coverage    # Generate coverage report│   │   │   ├── Header.tsx/css- ✅ **GraphQL Client**: Consumo eficiente de datos con Apollo Client y cache- ✅ **Página de Detalles**: Información completa con estadísticas, peso, altura y tipos

```

│   │   │   └── SortDropdown/

---

│   │   │- ✅ **Tests Unitarios**: 27 tests pasando con Vitest y Testing Library

## 🧪 Testing

│   │   ├── organisms/          # Complex sections

The project includes **27 unit tests** with Vitest and Testing Library.

│   │   │   ├── PokemonGrid.tsx/css- ✅ **Sistema de Favoritos**: Guarda tus Pokémon favoritos con persistencia en localStorage

### Run Tests

│   │   │   └── TypeFilterList/

```bash

npm test                 # Watch mode│   │   │---

npm test -- --run        # Run once

npm run test:coverage    # With coverage│   │   └── templates/          # Layouts

```

│   │       └── MainLayout.tsx/css- ✅ **Navegación SPA**: Routing con React Router DOM sin recargas de página- **React 19** - Biblioteca de UI

### Test Coverage

│   │

✅ **Atom Components** - TypeBadge, PokemonNumber, FavoriteButton, ValidatedSearchInput  

✅ **Validation Function** - validateSearchInput with multiple cases  │   ├── pages/                  # Application pages## 🚀 Tecnologías

✅ **27/27 tests passing**

│   │   ├── HomePage.tsx

---

│   │   └── DetailsPage.tsx/css- ✅ **Diseño Responsive**: Optimizado para desktop, tablet y mobile

## 🎨 Key Features

│   │

### Real-Time Validated Search

- Minimum 3 characters required│   ├── hooks/                  # Custom Hooks| Tecnología | Versión | Propósito |

- Letters only allowed

- Instant visual feedback│   │   ├── usePokemonList.ts



### Sorting with Visual Indicators│   │   ├── usePokemonDetails.ts|------------|---------|-----------|- ✅ **GraphQL Client**: Consumo eficiente de datos con Apollo Client y cache- **TypeScript** - Tipado estático

- **#** (hash) icon for number sorting

- **A** (with underline) for alphabetical sorting│   │   └── useTypes.ts

- Icon changes dynamically

│   │| **React** | 19.1.1 | Biblioteca de UI con hooks modernos |

### Persistent Favorites System

- localStorage for persistence│   ├── graphql/                # GraphQL Queries

- Smooth animations

- Favorites filter│   │   └── queries.ts| **TypeScript** | 5.9.3 | Tipado estático y mejor DX |



### Responsive Design│   │

- **Desktop**: 4-5 columns grid

- **Tablet**: 2-3 columns grid│   ├── context/                # React Context| **Vite** | 7.1.11 | Build tool ultra-rápido |

- **Mobile**: 1-2 columns grid

│   │   └── FavoritesContext.tsx

---

│   │| **Apollo Client** | 4.0.7 | Cliente GraphQL con cache |## 🚀 Tecnologías- **Vite** - Build tool y dev server## 🚀 TecnologíasCurrently, two official plugins are available:

## 🌐 GraphQL API

│   ├── types/                  # TypeScript Definitions

**Endpoint:** `https://beta.pokeapi.co/graphql/v1beta`

│   │   ├── pokemon.ts| **React Router DOM** | 7.9.4 | Routing SPA |

### Main Queries

│   │   └── graphql.ts

- `GET_POKEMONS` - List of 151 Pokémon

- `GET_POKEMON_DETAILS` - Complete details│   │| **Vitest** | 4.0.1 | Testing framework |

- `SEARCH_POKEMON` - Search by name

- `GET_POKEMON_TYPES` - Available types│   ├── utils/                  # Utilities and helpers



---│   │   └── pokemonHelpers.ts| **Testing Library** | Latest | Testing de componentes React |



## 📦 Build and Deploy│   │



### Local Build│   ├── config/                 # Configurations| **CSS Puro** | - | Estilos sin frameworks || Tecnología | Versión | Propósito |- **Apollo Client** - Cliente GraphQL



```bash│   │   └── apolloClient.ts

npm run build

```│   │| **PokeAPI GraphQL** | v1beta | API de datos de Pokémon |



Generates optimized files in `dist/` folder (130KB gzipped).│   └── test/                   # Unit tests



### Deploy to Netlify│       ├── setup.ts|------------|---------|-----------|



The project is configured for automatic deployment:│       ├── TypeBadge.test.tsx



1. Connect repository on Netlify│       ├── PokemonNumber.test.tsx---

2. Build settings:

   - **Build command:** `npm run build`│       ├── FavoriteButton.test.tsx

   - **Publish directory:** `dist`

3. Deploy!│       ├── ValidatedSearchInput.test.tsx| **React** | 19.1.1 | Biblioteca de UI |- **CSS Puro** - Estilos sin frameworks CSS



**Manual Deploy:** Drag `dist` folder to https://app.netlify.com/drop│       └── validation.test.ts



---│## 📁 Estructura del Proyecto (Atomic Design)



## ✅ Technical Test Compliance - Tita Media├── vitest.config.ts            # Vitest configuration



| Requirement | Status |├── netlify.toml                # Netlify configuration| **TypeScript** | 5.9.3 | Tipado estático y mejor DX |

|-------------|--------|

| GraphQL with Apollo Client | ✅ |└── package.json

| List of 151 Pokémon | ✅ |

| Sorting (number/alphabetical) | ✅ |``````

| Validated Search | ✅ |

| Type Filtering | ✅ |

| Details Page | ✅ |

| Favorites System | ✅ |## 🚀 Quick Startpokedex-app/| **Vite** | 7.1.11 | Build tool ultra-rápido |

| Unit Tests | ✅ 27 tests |

| Documentation | ✅ Complete README |

| No CSS Framework | ✅ Pure CSS |

| Custom Hooks | ✅ |### Prerequisites├── public/

| Atomic Design | ✅ |

| TypeScript | ✅ |

| Deployed | ✅ Netlify |

- [Node.js 18+](https://nodejs.org/)│   └── _redirects          # Netlify redirects para SPA| **Apollo Client** | 3.12.10 | Cliente GraphQL con cache |

---

- npm or yarn

## 🐛 Troubleshooting

├── src/

### Development server won't start

- Verify port 5173 is available### Installation

- Clear cache: `rm -rf node_modules/.vite`

- Reinstall: `npm install`│   ├── components/         # Componentes organizados por Atomic Design| **React Router DOM** | 6.29.1 | Routing SPA |## 📁 Estructura del Proyecto (Atomic Design)- **React 19** - Biblioteca de UI- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh



### Build fails```bash

- Type check: `npx tsc --noEmit`

- Check ESLint: `npm run lint`# Clone the repository│   │   ├── atoms/          # Componentes básicos



### Tests failgit clone https://github.com/YOUR-USERNAME/pokedex-app.git

- Clear cache: `npx vitest --clearCache`

- Verify `src/test/setup.ts`cd pokedex-app│   │   ├── molecules/      # Combinación de átomos| **CSS Puro** | - | Estilos sin frameworks |



---



## 📝 Development Notes# Install dependencies│   │   ├── organisms/      # Secciones complejas



- **First generation only:** 151 original Pokémonnpm install

- **Local favorites:** Saved in localStorage

- **Beta API:** PokeAPI GraphQL may change│   │   └── templates/      # Layouts| **PokeAPI GraphQL** | v1beta | API de datos de Pokémon |

- **Cache:** Apollo Client caches for performance

# Start development server

### Possible Improvements

npm run dev│   ├── pages/              # HomePage, DetailsPage

- [ ] Infinite pagination

- [ ] Advanced animations```

- [ ] Dark mode

- [ ] Pokémon comparator│   ├── hooks/              # Custom Hooks

- [ ] PWA with offline support

The application will be available at: **http://localhost:5173**

---

│   ├── graphql/            # GraphQL Queries

## 👨‍💻 Author

### Available Scripts

**Steven Diaz**

│   ├── context/            # React Context (Favorites)## 📁 Estructura del Proyecto```- **TypeScript** - Tipado estático- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Pokédex application developed with React, TypeScript, and GraphQL for **Tita Media** technical test (October 2025).

```bash

---

npm run dev              # Development server│   ├── types/              # TypeScript Definitions

## 🙏 Acknowledgments

npm run build            # Build for production

- [PokeAPI](https://pokeapi.co/) for the public API

- [Figma Community](https://www.figma.com/) for design referencesnpm run preview          # Preview production build│   ├── utils/              # Utilidades y helpers

- Tita Media for the opportunity

npm run lint             # Run ESLint

---

npm test                 # Tests in watch mode│   ├── config/             # Apollo Client config

**📅 Submission Date:** October 24, 2025  

**🚀 Deployed on:** Netlify  npm run test:ui          # Open Vitest UI

**🔗 Repository:** https://github.com/Danidiaz0799/pokedex-app

npm run test:coverage    # Generate coverage report│   └── test/               # Tests unitariosEl proyecto sigue el patrón **Atomic Design** para organizar los componentes:src/

⭐ **If you like this project, give it a star on GitHub!**

```

├── vitest.config.ts

## 🧪 Tests

├── netlify.toml

The project includes **27 unit tests** with Vitest and Testing Library.

└── package.json

### Run Tests

``````├── components/- **Vite** - Build tool y dev server

```bash

# Watch mode

npm test

---pokedex-app/

# Run once

npm test -- --run



# With UI## 🚦 Inicio Rápido├── public/│   ├── atoms/          # Componentes básicos (botones, inputs, íconos)

npm run test:ui



# With coverage

npm run test:coverage### Instalación│   └── vite.svg

```



### Test Coverage

```bash├── src/│   ├── molecules/      # Combinación de átomos (tarjetas, formularios)- **Apollo Client** - Cliente GraphQL## React Compiler

- ✅ **Atom Components** - TypeBadge, PokemonNumber, FavoriteButton, ValidatedSearchInput

- ✅ **Validation Function** - validateSearchInput with multiple cases# Clonar el repositorio

- ✅ **27/27 tests passing**

git clone https://github.com/YOUR-USERNAME/pokedex-app.git│   ├── components/

Example test:

cd pokedex-app

```typescript

describe('TypeBadge', () => {│   │   ├── atoms/                    # Componentes básicos│   ├── organisms/      # Secciones complejas (header, grids)

  it('renders the badge with correct type', () => {

    render(<TypeBadge typeName="Fire" />);# Instalar dependencias

    expect(screen.getByText('Fire')).toBeInTheDocument();

  });npm install│   │   │   ├── TypeBadge.tsx/css      - Badge de tipo con color



  it('applies correct color based on type', () => {

    const { container } = render(<TypeBadge typeName="Water" />);

    const badge = container.querySelector('.type-badge');# Iniciar servidor de desarrollo│   │   │   ├── PokemonNumber.tsx/css  - Número formateado (#001)│   └── templates/      # Layouts de página- **CSS Modules** - Estilos sin frameworks CSS

    expect(badge).toHaveStyle({ backgroundColor: '#6890F0' });

  });npm run dev

});

``````│   │   │   ├── SearchInput.tsx/css    - Input básico de búsqueda



## 🎨 Key Features



### Real-Time Validated SearchLa aplicación estará disponible en `http://localhost:5173`│   │   │   ├── ValidatedSearchInput/  - Input con validación├── pages/              # Páginas de la aplicación

- Minimum 3 characters

- Letters only allowed

- Instant visual feedback

### Scripts Disponibles│   │   │   ├── SortButton.tsx/css     - Botón de ordenamiento

### Sorting with Visual Indicators

- **#** (hash) icon for number sorting

- **A** (with underline) for alphabetical sorting

- Icon changes dynamically based on selected sort```bash│   │   │   ├── FavoriteButton.tsx/css - Botón de favorito (corazón)├── hooks/              # Custom hooks (usePokemons, etc.)The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).



### Persistent Favorites Systemnpm run dev              # Servidor de desarrollo

- localStorage for persistence

- Smooth animationsnpm run build            # Build para producción│   │   │   ├── StatBar.tsx/css        - Barra de estadística

- Favorites filter

npm run preview          # Preview del build

### Responsive Design

- **Desktop**: 4-5 columns gridnpm run lint             # ESLint│   │   │   └── index.ts               - Exports centralizados├── graphql/            # Queries y mutations GraphQL

- **Tablet**: 2-3 columns grid

- **Mobile**: 1-2 columns gridnpm test                 # Tests en modo watch



## 🌐 GraphQL APInpm run test:coverage    # Reporte de cobertura│   │   ├── molecules/                # Combinación de átomos



``````

Endpoint: https://beta.pokeapi.co/graphql/v1beta

```│   │   │   ├── PokemonCard.tsx/css    - Tarjeta de Pokémon├── types/              # Definiciones de TypeScript## 📁 Estructura del Proyecto (Atomic Design)



### Main Queries---



**GET_POKEMONS** - List of 151 Pokémon│   │   │   ├── Header.tsx/css         - Header con búsqueda y filtros

```graphql

query GetPokemons($limit: Int = 151) {## 🧪 Testing

  pokemon_v2_pokemon(limit: $limit, order_by: { id: asc }) {

    id│   │   │   └── index.ts├── utils/              # Funciones auxiliares

    name

    pokemon_v2_pokemontypes {El proyecto incluye **27 tests unitarios** con Vitest y Testing Library.

      pokemon_v2_type {

        name│   │   ├── organisms/                # Componentes complejos

      }

    }### Ejecutar Tests

  }

}│   │   │   ├── PokemonGrid.tsx/css    - Grid de tarjetas├── config/             # Configuraciones (Apollo Client)## Expanding the ESLint configuration

```

```bash

**GET_POKEMON_DETAILS** - Complete details

```graphqlnpm test                 # Modo watch│   │   │   ├── TypeFilterList/        - Lista de filtros por tipo

query GetPokemonDetails($id: Int!) {

  pokemon_v2_pokemon_by_pk(id: $id) {npm test -- --run        # Ejecutar una vez

    id

    namenpm run test:coverage    # Con cobertura│   │   │   └── index.ts├── assets/             # Recursos estáticos

    height

    weight```

    pokemon_v2_pokemonstats {

      base_stat│   │   └── templates/                # Layouts

      pokemon_v2_stat {

        name### Cobertura

      }

    }│   │       ├── MainLayout.tsx/css     - Layout principal├── App.tsx             # Componente principal```

    pokemon_v2_pokemontypes {

      pokemon_v2_type {- ✅ Componentes Atoms (TypeBadge, PokemonNumber, FavoriteButton, ValidatedSearchInput)

        name

      }- ✅ Función de validación (validateSearchInput)│   │       └── index.ts

    }

  }- ✅ 27/27 tests pasando

}

```│   ├── pages/                        # Páginas de la aplicación└── main.tsx            # Punto de entrada



**SEARCH_POKEMON** - Search by name---

```graphql

query SearchPokemon($name: String!) {│   │   ├── HomePage.tsx              - Página principal con lista

  pokemon_v2_pokemon(where: { name: { _ilike: $name } }) {

    id## 🎨 Características Destacadas

    name

  }│   │   ├── DetailsPage.tsx/css       - Página de detalles```src/If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

}

```### Búsqueda con Validación Real-Time



**GET_POKEMON_TYPES** - Available types- Mínimo 3 caracteres│   │   └── index.ts

```graphql

query GetPokemonTypes {- Solo letras permitidas

  pokemon_v2_type(order_by: { name: asc }) {

    id- Feedback visual instantáneo│   ├── hooks/                        # Custom Hooks

    name

  }

}

```### Ordenamiento con Indicadores Visuales│   │   ├── usePokemons.ts            - Hook para lista de Pokémon



## 📦 Build and Deploy- **#** (numeral) para ordenamiento por número



### Local Build- **A** (con subrayado) para ordenamiento alfabético│   │   ├── usePokemonDetails.ts      - Hook para detalles## 🎯 Arquitectura├── components/



```bash

npm run build

```### Sistema de Favoritos Persistente│   │   ├── useTypes.ts               - Hook para tipos



Generates optimized files in the `dist/` folder.- localStorage para persistencia



### Deploy to Netlify- Animaciones fluidas│   │   └── index.ts



The project is configured for automatic deployment on Netlify:- Filtro de favoritos



1. **Connect repository** on Netlify│   ├── graphql/                      # GraphQL

2. **Build settings**:

   - Build command: `npm run build`---

   - Publish directory: `dist`

3. **Deploy**│   │   └── queries.ts                - Queries (GET_POKEMONS, etc.)### Atomic Design│   ├── atoms/          # Componentes básicos (botones, inputs, íconos)```js



The `netlify.toml` file includes the necessary configuration for SPA routing.## 🌐 API GraphQL



**Manual Deploy with Netlify Drop:**│   ├── context/                      # Context API

1. Build the project: `npm run build`

2. Go to: https://app.netlify.com/drop```

3. Drag the `dist` folder

4. Done! ✨Endpoint: https://beta.pokeapi.co/graphql/v1beta│   │   └── FavoritesContext.tsx      - Context de favoritos



## 🛠️ Useful Commands```



### Development│   ├── types/                        # TypeScript Types

```bash

# Clean node_modules and reinstall### Queries Principales

rm -rf node_modules package-lock.json

npm install│   │   ├── pokemon.ts                - Interfaces de PokémonEl proyecto sigue la metodología **Atomic Design** para organizar los componentes:│   ├── molecules/      # Combinación de átomos (tarjetas, formularios)export default defineConfig([



# Clear Vite cache- `GET_POKEMONS`: Lista de 151 Pokémon

rm -rf node_modules/.vite

- `GET_POKEMON_DETAILS`: Detalles completos│   │   └── graphql.ts                - Interfaces de GraphQL

# Type check without building

npx tsc --noEmit- `SEARCH_POKEMON`: Búsqueda por nombre

```

- `GET_POKEMON_TYPES`: Tipos disponibles│   ├── utils/                        # Utilidades

### Testing

```bash

# Run specific test file

npm test TypeBadge.test---│   │   └── pokemonHelpers.ts         - Funciones helper



# Run tests matching pattern

npm test -- --grep "TypeBadge"

## 📦 Build y Despliegue│   ├── config/                       # Configuración1. **Atoms (Átomos)**: Componentes más pequeños e indivisibles│   ├── organisms/      # Secciones complejas (header, grids)  globalIgnores(['dist']),

# Update snapshots

npm test -- -u

```

### Build Local│   │   └── apolloClient.ts           - Config de Apollo Client

## 📊 Main Dependencies



### Production

- `react` 19.1.1 - UI library```bash│   ├── App.tsx                       - Componente raíz con routes2. **Molecules (Moléculas)**: Grupos de átomos funcionando juntos

- `react-dom` 19.1.1 - React DOM renderer

- `react-router-dom` 7.9.4 - SPA routingnpm run build

- `@apollo/client` 4.0.7 - GraphQL client

- `graphql` 16.11.0 - GraphQL implementation```│   ├── main.tsx                      - Entry point



### Development

- `typescript` 5.9.3 - Static typing

- `vite` 7.1.11 - Build tool### Despliegue en Netlify│   └── index.css                     - Estilos globales3. **Organisms (Organismos)**: Grupos de moléculas formando secciones│   └── templates/      # Layouts de página  {

- `vitest` 4.0.1 - Testing framework

- `@testing-library/react` - React testing utilities

- `@testing-library/jest-dom` - Jest DOM matchers

- `eslint` - Code linting1. Conectar repositorio en Netlify├── index.html



## 🐛 Troubleshooting2. Build command: `npm run build`



### Development server won't start3. Publish directory: `dist`├── package.json4. **Templates**: Estructura de página con componentes

- Verify port 5173 is not in use

- Clear Vite cache: `rm -rf node_modules/.vite`4. Deploy!

- Reinstall dependencies: `npm install`

├── tsconfig.json

### Build fails

- Run type check: `npx tsc --noEmit`El archivo `netlify.toml` ya está configurado.

- Check ESLint errors: `npm run lint`

- Verify all dependencies are installed├── vite.config.ts5. **Pages**: Instancias específicas de templates con datos reales├── pages/              # Páginas de la aplicación    files: ['**/*.{ts,tsx}'],



### Tests fail---

- Clear test cache: `npx vitest --clearCache`

- Verify setup file: `src/test/setup.ts`└── README.md

- Check test environment in `vitest.config.ts`

## ✅ Cumplimiento de Requisitos - Prueba Técnica Tita Media

### GraphQL errors

- Verify API is accessible: https://beta.pokeapi.co/graphql/v1beta```

- Check browser console (F12)

- Verify Apollo Client configuration in `src/config/apolloClient.ts`| Requisito | Estado | Detalles |



## ✅ Technical Test Compliance - Tita Media|-----------|--------|----------|



| Requirement | Status | Details || **GraphQL** | ✅ | Apollo Client con queries optimizadas |

|-------------|--------|---------|

| **GraphQL** | ✅ | Apollo Client with optimized queries || **Validación** | ✅ | Sistema robusto de validación |## 🏗️ Arquitectura## 🔧 Configuración├── config/             # Configuraciones (Apollo Client)    extends: [

| **Validation** | ✅ | Robust validation system |

| **Pokémon List** | ✅ | 151 Pokémon with images || **Lista de Pokémon** | ✅ | 151 Pokémon con imágenes |

| **Sorting** | ✅ | By number or alphabetical |

| **Details** | ✅ | Complete page with stats, weight, height || **Ordenamiento** | ✅ | Por número o alfabético |

| **Favorites** | ✅ | With localStorage |

| **Type Filtering** | ✅ | 18 types available || **Detalles** | ✅ | Página completa con stats, peso, altura |

| **Testing** | ✅ | 27 unit tests |

| **Documentation** | ✅ | Complete README || **Favoritos** | ✅ | Con localStorage |### Atomic Design

| **No CSS Framework** | ✅ | Pure modular CSS |

| **Hooks** | ✅ | Reusable custom hooks || **Filtrado por tipo** | ✅ | 18 tipos disponibles |

| **Atomic Design** | ✅ | Complete structure |

| **TypeScript** | ✅ | Complete typing || **Testing** | ✅ | 27 tests unitarios |

| **Deployed** | ✅ | Netlify |

| **Documentación** | ✅ | README completo |

## 📝 Development Notes

| **Sin CSS Framework** | ✅ | CSS puro modular |El proyecto implementa **Atomic Design** para una arquitectura escalable:### Apollo Client├── assets/             # Recursos estáticos      // Other configs...

- **First generation only:** Shows 151 original Pokémon

- **Local favorites:** Saved in localStorage (not synced across devices)| **Hooks** | ✅ | Custom hooks reutilizables |

- **Beta API:** PokeAPI GraphQL is in beta and may change

- **Images:** From PokeAPI official artwork| **Atomic Design** | ✅ | Estructura completa |

- **Cache:** Apollo Client caches queries for better performance

- **Simulator:** Real-time search and filtering without API calls| **TypeScript** | ✅ | Tipado completo |

- **Pagination:** Implemented in the grid with automatic scrolling

| **Desplegado** | ✅ | Netlify |1. **Atoms** (Átomos): Componentes básicos indivisibles

### Possible Improvements



- [ ] Infinite pagination

- [ ] Advanced animations---   - `TypeBadge`, `PokemonNumber`, `SearchInput`, `ValidatedSearchInput`, `SortButton`, `FavoriteButton`, `StatBar`

- [ ] Dark mode

- [ ] Pokémon comparator

- [ ] Advanced search with combined filters

- [ ] Backend to sync favorites## 📝 NotasConfigurado para conectarse al endpoint GraphQL de PokeAPI:├── App.tsx             # Componente principal

- [ ] PWA with offline support

- [ ] Multi-language support (i18n)



## 👨‍💻 Author- Solo se muestran los 151 Pokémon originales2. **Molecules** (Moléculas): Combinaciones simples de átomos



**Steven**- Favoritos guardados localmente (no sincronizados)



Pokédex application developed with React, TypeScript, and GraphQL for Tita Media technical test (October 2025).- API GraphQL en beta (puede cambiar)   - `PokemonCard`, `Header`- **Endpoint**: `https://beta.pokeapi.co/graphql/v1beta`



## 🙏 Acknowledgments



- [PokeAPI](https://pokeapi.co/) for the public API---

- [Figma Community](https://www.figma.com/) for design references

- Tita Media for the opportunity



---## 👨‍💻 Autor3. **Organisms** (Organismos): Componentes complejos- **Caché**: InMemoryCache└── main.tsx            # Punto de entrada      // Remove tseslint.configs.recommended and replace with this



**⭐ Project created as technical test - October 2025**



**💼 Technical Test for:** Tita Media  **Steven** - Prueba técnica para Tita Media (Octubre 2025)   - `PokemonGrid`, `TypeFilterList`

**📅 Submission Date:** October 24, 2025  

**🚀 Deployed on:** Netlify  

**🔗 Live Demo:** https://precious-empanada-59452a.netlify.app

---- **Política**: Cache-first para optimizar rendimiento



## 🙏 Agradecimientos4. **Templates**: Layouts de página



- [PokeAPI](https://pokeapi.co/) por la API pública   - `MainLayout````      tseslint.configs.recommendedTypeChecked,

- Tita Media por la oportunidad



---

5. **Pages**: Páginas completas con lógica de negocio### GraphQL Queries

**⭐ Proyecto creado como prueba técnica - Octubre 2025**

   - `HomePage`, `DetailsPage`

      // Alternatively, use this for stricter rules

### GraphQL con Apollo Client

- `GET_POKEMONS`: Lista de Pokémon (primeros 151)

```typescript

// Configuración de Apollo Client- `GET_POKEMON_DETAILS`: Detalles completos de un Pokémon## 🎯 Arquitectura      tseslint.configs.strictTypeChecked,

const client = new ApolloClient({

  uri: 'https://beta.pokeapi.co/graphql/v1beta',- `SEARCH_POKEMON`: Búsqueda por nombre

  cache: new InMemoryCache(),

  defaultOptions: {- `GET_POKEMON_TYPES`: Lista de tipos disponibles      // Optionally, add this for stylistic rules

    watchQuery: { fetchPolicy: 'cache-first' }

  }

});

```## 📦 Instalación### Atomic Design      tseslint.configs.stylisticTypeChecked,



**Queries disponibles:**

- `GET_POKEMONS`: Lista de los 151 Pokémon

- `GET_POKEMON_DETAILS`: Detalles completos de un Pokémon```bash

- `SEARCH_POKEMON`: Búsqueda por nombre

- `GET_POKEMON_TYPES`: Lista de todos los tipos# Instalar dependencias



### State Managementnpm installEl proyecto sigue la metodología **Atomic Design** para organizar los componentes:      // Other configs...



- **Context API**: Gestión de favoritos con `FavoritesContext`

- **localStorage**: Persistencia de favoritos entre sesiones

- **React Hooks**: Estado local con `useState`, `useMemo`, `useEffect`# Iniciar servidor de desarrollo    ],



### Validación de Datosnpm run dev



La aplicación implementa validación estricta en el campo de búsqueda:1. **Atoms (Átomos)**: Componentes más pequeños e indivisibles    languageOptions: {



```typescript# Construir para producción

validateSearchInput(input: string): ValidationResult

```npm run build2. **Molecules (Moléculas)**: Grupos de átomos funcionando juntos      parserOptions: {



**Reglas de validación:**

- ✅ Mínimo 3 caracteres

- ✅ Solo letras (sin números ni caracteres especiales)# Vista previa de producción3. **Organisms (Organismos)**: Grupos de moléculas formando secciones        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- ✅ Regex: `/^[a-zA-Z\s]+$/`

- ✅ Feedback visual inmediato con mensajes de errornpm run preview



## 🛠️ Instalación y Uso```4. **Templates**: Estructura de página con componentes        tsconfigRootDir: import.meta.dirname,



### Requisitos Previos



- Node.js >= 16.0.0## 🎨 Características Implementadas5. **Pages**: Instancias específicas de templates con datos reales      },

- npm >= 8.0.0 (o yarn/pnpm)



### Instalación

### ✅ Tarea #1: Configuración Inicial      // other options...

```bash

# Clonar el repositorio- Proyecto React + TypeScript + Vite

git clone <repository-url>

cd pokedex-app- Estructura Atomic Design## 🔧 Configuración    },



# Instalar dependencias- Apollo Client configurado

npm install

```- Estilos base sin frameworks CSS  },



### Scripts Disponibles



```bash### ✅ Tarea #2: Consumo GraphQL y Lista de Pokémon### Apollo Client])

# Desarrollo - Inicia servidor en http://localhost:5173

npm run dev- **Queries GraphQL**: Definidas en `src/graphql/queries.ts`



# Build - Genera build de producción en /dist- **Hook personalizado**: `usePokemons` con gestión de estados```

npm run build

- **Ordenamiento**: Alfabético por nombre y por número

# Preview - Preview del build de producción

npm run preview- **Modelos TypeScript**: Interfaces completas en `src/types/`Configurado para conectarse al endpoint GraphQL de PokeAPI:



# Lint - Ejecuta ESLint- **Transformación de datos**: Utilidades para formatear datos de API

npm run lint

```- **Búsqueda**: Filtrado por nombre o número- **Endpoint**: `https://beta.pokeapi.co/graphql/v1beta`You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:



### Desarrollo- **Estados**: Loading, error y datos



```bash- **Caché**: Optimización con Apollo Client- **Caché**: InMemoryCache

# 1. Instalar dependencias

npm install



# 2. Iniciar servidor de desarrollo## 🎮 Funcionalidades- **Política**: Cache-and-network```js

npm run dev



# 3. Abrir navegador en http://localhost:5173

```### Lista de Pokémon// eslint.config.js



La aplicación se recargará automáticamente con los cambios (HMR - Hot Module Replacement).- Visualización en grid responsive



### Build de Producción- Ordenamiento por número o nombre alfabéticamente## 📦 Instalaciónimport reactX from 'eslint-plugin-react-x'



```bash- Búsqueda en tiempo real

# Generar build optimizado

npm run build- Imágenes de alta calidad (official artwork)import reactDom from 'eslint-plugin-react-dom'



# Preview del build- Badges de tipos con colores específicos

npm run preview

``````bash



Los archivos optimizados se generan en la carpeta `/dist` listos para deployment.### Sistema de Búsqueda



## 🎯 Funcionalidades Detalladas- Búsqueda por nombre (case-insensitive)# Instalar dependenciasexport default defineConfig([



### 1. Lista de Pokémon (HomePage)- Búsqueda por número (#001, 1, etc.)



- Muestra los 151 Pokémon de la primera generación- Resultados instantáneosnpm install  globalIgnores(['dist']),

- Tarjetas con imagen, número, nombre y tipos

- Click en tarjeta navega a página de detalles- Mensaje cuando no hay resultados

- Búsqueda en tiempo real con validación

- Filtrado por tipo (18 tipos disponibles)  {

- Ordenamiento por número o nombre

- Contador dinámico de Pokémon mostrados### Ordenamiento

- Estados de carga y error manejados

- Por número (Pokédex order)# Iniciar servidor de desarrollo    files: ['**/*.{ts,tsx}'],

### 2. Búsqueda Validada

- Por nombre (alfabéticamente A-Z)

**Validación en tiempo real:**

- ❌ `"pi"` → Error: "Search must be at least 3 characters"- Toggle entre ambos modosnpm run dev    extends: [

- ❌ `"p1k"` → Error: "Search can only contain letters"

- ✅ `"pikachu"` → Búsqueda válida



**Características:**## 🛠️ Utilidades      // Other configs...

- Mensaje de error visible debajo del input

- Border rojo en estado de error

- Previene filtrado con entrada inválida

- Animación slideDown suave### `pokemonHelpers.ts`# Construir para producción      // Enable lint rules for React



### 3. Filtrado por Tipo- `transformPokemonData()`: Transforma datos de API a modelo interno



- 18 tipos de Pokémon disponibles- `formatPokemonNumber()`: Formatea ID como #001npm run build      reactX.configs['recommended-typescript'],

- Badges con colores específicos por tipo

- Botón "All" para limpiar filtro- `capitalize()`: Capitaliza nombres

- Indicador visual de tipo activo

- Filtrado en el cliente (performance)- `sortPokemonByName()`: Ordenamiento alfabético      // Enable lint rules for React DOM

- Compatible con búsqueda simultánea

- `sortPokemonByNumber()`: Ordenamiento por ID

### 4. Página de Detalles

- `filterPokemons()`: Filtrado por término de búsqueda# Vista previa de producción      reactDom.configs.recommended,

**Información mostrada:**

- Nombre capitalizado y número (#001)- `getTypeColor()`: Obtiene color para cada tipo

- Imagen oficial artwork de alta calidad

- Tipos con badges de colores- `getPokemonImageUrl()`: Obtiene imagen de mejor calidadnpm run preview    ],

- Peso en kg (convertido de hectogramos)

- Altura en m (convertido de decímetros)

- 6 estadísticas base con barras animadas:

  - HP (Hit Points)## 📱 Responsive Design```    languageOptions: {

  - ATK (Attack)

  - DEF (Defense)

  - SATK (Special Attack)

  - SDEF (Special Defense)- **Desktop**: Grid de 6-7 columnas      parserOptions: {

  - SPD (Speed)

- **Tablet**: Grid de 3-4 columnas

**Características:**

- Background color dinámico basado en tipo principal- **Mobile**: Grid de 2 columnas## 🎨 Guía de Estilos        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- Botón de favorito en header

- Botón "Back" para regresar a lista- Imágenes optimizadas con lazy loading

- Animación float en imagen

- Responsive design- Controles adaptables a pantalla        tsconfigRootDir: import.meta.dirname,



### 5. Sistema de Favoritos



- Agregar/quitar favoritos con botón de corazón## 🎨 Guía de Estilos- **Sin frameworks CSS**: El proyecto NO utiliza Tailwind, Bootstrap, ni similares      },

- Persistencia en `localStorage`

- Indicador visual (corazón lleno/vacío)

- Animación heartBeat al marcar

- Sincronización automática- **Colores principales**: Rojo Pokémon (#dc0a2d), Amarillo (#ffcb05)- **CSS puro/CSS Modules**: Para implementar el diseño de Figma      // other options...



## 🎨 Diseño y Estilos- **Tipos**: Cada tipo tiene su color específico



### Paleta de Colores- **Transiciones**: 0.3s ease para interacciones- **Variables CSS**: Para colores y temas consistentes    },



```css- **Sombras**: Box-shadow para profundidad

/* Colores principales */

--primary: #667eea;- **Hover effects**: Elevación y escala de tarjetas- **Mobile-first**: Diseño responsivo desde móvil  },

--secondary: #764ba2;

--background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);



/* Colores por tipo de Pokémon */## 📊 Estado del Proyecto])

--fire: #F08030;

--water: #6890F0;

--grass: #78C850;

--electric: #F8D030;✅ **Configuración inicial completada**## 🏗️ Estado Actual```

/* ... 18 tipos en total */

```✅ **GraphQL queries definidas**



### Características de Diseño✅ **Hook usePokemons implementado**



- **Gradiente de fondo**: Morado/azul profesional✅ **Ordenamiento alfabético funcionando**✅ **Tarea #1 Completada: Configuración Inicial**

- **Cards elevadas**: Box-shadow y border-radius

- **Animaciones suaves**: Transiciones de 0.2-0.3s✅ **Modelos TypeScript completos**- Proyecto React + TypeScript + Vite creado

- **Hover effects**: Scale, translateY, brightness

- **Loading states**: Spinner animado✅ **UI básica con lista de Pokémon**- Estructura Atomic Design implementada

- **Empty states**: Mensajes informativos

- **Responsive breakpoints**: ✅ **Sistema de búsqueda**- Apollo Client configurado y funcionando

  - Mobile: < 768px

  - Tablet: 768px - 1024px✅ **Filtrado por tipo visual**- Estilos base sin frameworks CSS

  - Desktop: > 1024px

- Documentación inicial

### Tipografía

## 📝 Próximos Pasos

```css

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ## 📝 Próximos Pasos

             Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

```- Tarea #3: Componentes atomizados (atoms, molecules)



## 🧪 Testing- Tarea #4: Página de detalles de Pokémon- Tarea #2: Implementación de componentes base (atoms)



Para probar manualmente las funcionalidades:- Tarea #5: Navegación y routing- Tarea #3: Creación de la página principal con listado



### Test 1: Búsqueda Validada- Tarea #6: Animaciones y transiciones- Tarea #4: Sistema de búsqueda y filtrado

1. Escribe "p1" en el input → Debe mostrar error

2. Escribe "pik" → Búsqueda exitosa- Tarea #7: Testing y optimización- Tarea #5: Página de detalles de Pokémon

3. Escribe "pika!" → Debe mostrar error



### Test 2: Filtrado por Tipo

1. Click en tipo "fire" → Muestra solo Pokémon Fire## 👨‍💻 Desarrollo## 👨‍💻 Desarrollo

2. Click en "All" → Muestra todos nuevamente

3. Combina tipo "water" + búsqueda "squirt" → Solo Squirtle family



### Test 3: Favoritos```bash```bash

1. Entra a detalles de Pikachu

2. Click en botón de corazón → Se marca como favorito# Linter# Linter

3. Recarga la página → Favorito persiste

4. Click nuevamente → Se quita de favoritosnpm run lintnpm run lint



### Test 4: Navegación

1. Click en cualquier Pokémon → Navega a detalles

2. Click en "Back" → Regresa a lista# Type check# Type check

3. URL cambia: `/` ↔ `/pokemon/:id`

tsc --noEmittsc --noEmit

## 🚨 Troubleshooting

```

### Error: "Failed to fetch"

- Verifica conexión a internet# Ver estructura de queries

- PokeAPI GraphQL endpoint: `https://beta.pokeapi.co/graphql/v1beta`

# Revisar: src/graphql/README.md---

### Build falla

```bash```

# Limpia node_modules y reinstala

rm -rf node_modules package-lock.json**Desarrollado con ❤️ y ⚡ para el mundo Pokémon**

npm install

```---



### Puerto 5173 ocupado**Desarrollado con ❤️ y ⚡ para el mundo Pokémon**

```bash
# Cambia puerto en vite.config.ts
export default defineConfig({
  server: { port: 3000 }
})
```

## 📦 Dependencias

### Dependencias de Producción

```json
{
  "@apollo/client": "^3.12.10",
  "graphql": "^16.10.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^6.29.1"
}
```

### Dependencias de Desarrollo

```json
{
  "@eslint/js": "^10.1.0",
  "@types/react": "^19.0.13",
  "@types/react-dom": "^19.0.4",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.17.0",
  "eslint-plugin-react-hooks": "^5.1.0",
  "eslint-plugin-react-refresh": "^0.4.17",
  "globals": "^15.14.0",
  "typescript": "~5.9.3",
  "typescript-eslint": "^9.2.0",
  "vite": "^7.1.11"
}
```

## 🌟 Mejores Prácticas Implementadas

- ✅ **TypeScript estricto**: Tipado completo sin `any`
- ✅ **Atomic Design**: Arquitectura escalable y mantenible
- ✅ **Custom Hooks**: Reutilización de lógica
- ✅ **Code splitting**: Lazy loading de páginas
- ✅ **Performance**: useMemo, useCallback para optimización
- ✅ **Accesibilidad**: aria-labels, roles semánticos
- ✅ **SEO**: Meta tags, títulos descriptivos
- ✅ **Error handling**: Boundaries y estados de error
- ✅ **Loading states**: Feedback visual constante
- ✅ **Validación**: Input validation en tiempo real
- ✅ **Cache**: Apollo Client cache-first strategy
- ✅ **CSS Modules**: Estilos scoped sin colisiones
- ✅ **Responsive**: Mobile-first approach

## 📝 Notas Técnicas

### Apollo Client Cache

El cache está configurado con política `cache-first`:
- Primera carga: Fetch desde API
- Siguientes cargas: Datos desde cache
- Actualización: Automática con mutations

### LocalStorage

Los favoritos se guardan con la key `'pokedex-favorites'`:
```typescript
localStorage.setItem('pokedex-favorites', JSON.stringify(favorites));
```

### GraphQL Queries

Todas las queries están optimizadas para traer solo los datos necesarios:
- Sin over-fetching
- Campos específicos solicitados
- Relaciones anidadas eficientes

## 🔮 Futuras Mejoras

Posibles features para versiones futuras:

- [ ] **Página de Favoritos**: Vista dedicada de Pokémon favoritos
- [ ] **Comparador**: Comparar estadísticas de 2 Pokémon
- [ ] **Búsqueda avanzada**: Filtros por stats, generación, etc.
- [ ] **Modo oscuro**: Dark mode toggle
- [ ] **Animaciones**: Transiciones entre páginas
- [ ] **PWA**: Convertir en Progressive Web App
- [ ] **Tests**: Unit tests con Jest/Vitest
- [ ] **E2E Tests**: Tests con Playwright/Cypress
- [ ] **Internacionalización**: Multi-idioma (i18n)
- [ ] **Pokémon de otras generaciones**: Expandir a más de 151

## 👥 Autor

**Steven** - Proyecto Pokédex App  
Fecha: Octubre 2025

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando React, TypeScript y Vite**

🎮 ¡Atrápalos a todos!
