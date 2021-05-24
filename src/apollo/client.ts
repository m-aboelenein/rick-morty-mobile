import {
  ApolloClient,
  createHttpLink,
  FieldPolicy,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch';
import {CharactersData} from '../hooks/useCharacters/types';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

const LINK = createHttpLink({
  uri: BASE_URL,
  fetch,
});

const charactersPaginationHandler = (): FieldPolicy => ({
  keyArgs: ['filter'],
  merge(existing: CharactersData, incoming: CharactersData) {
    return {
      ...incoming,
      results: existing
        ? [...existing.results, ...incoming.results]
        : incoming.results,
    };
  },
});

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: charactersPaginationHandler(),
      },
    },
  },
});

const client = new ApolloClient({
  link: LINK,
  cache,
});

export default client;
