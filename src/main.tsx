import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client/react'
import apolloClient from './config/apolloClient.ts'
import { FavoritesProvider } from './context/FavoritesContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ApolloProvider>
  </StrictMode>,
)
