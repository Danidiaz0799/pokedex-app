import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// GraphQL endpoint de PokeAPI
const GRAPHQL_ENDPOINT = 'https://beta.pokeapi.co/graphql/v1beta';

// Configuración del HttpLink
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

// Configuración del cliente Apollo
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

export default apolloClient;
