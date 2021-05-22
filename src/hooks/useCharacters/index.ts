import {useLazyQuery} from '@apollo/client';
import {charactersQuery} from '../../apollo/queries/characters';
import {CharactersQuery, CharactersQueryVars} from './types';

const useCharacters = () => {
  const [getCharacters, {data, loading, error, fetchMore}] = useLazyQuery<
    CharactersQuery,
    CharactersQueryVars
  >(charactersQuery, {
    variables: {
      page: 1,
    },
  });
  return {
    data,
    loading,
    error,
    fetchMore,
    getCharacters,
  };
};

export default useCharacters;
