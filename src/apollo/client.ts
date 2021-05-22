import {ApolloClient, InMemoryCache} from '@apollo/client';
import {Character, CharactersData} from '../hooks/useCharacters/types';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],
          merge(existing: CharactersData, incoming: CharactersData) {
            let results: Character[] = [];
            if (existing && existing.results.length > 0) {
              results = results.concat(existing.results);
            }
            if (incoming && incoming.results.length > 0) {
              results = results.concat(incoming.results);
            }
            return {
              ...incoming,
              results,
            };
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: BASE_URL,
  cache,
});

export default client;
