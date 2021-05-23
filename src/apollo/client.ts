import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import fetch from 'cross-fetch';
import {Character, CharactersData} from '../hooks/useCharacters/types';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

const LINK = createHttpLink({
  uri: BASE_URL,
  fetch,
});

const charactersPaginationHandler = () => ({
  keyArgs: ['filter'],
  merge(existing: CharactersData, incoming: CharactersData) {
    let results: Character[] = [];
    if (existing && existing.results?.length > 0) {
      results = results.concat(existing.results);
    }
    if (incoming && incoming.results?.length > 0) {
      results = results.concat(incoming.results);
    }
    return {
      ...incoming,
      results,
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
