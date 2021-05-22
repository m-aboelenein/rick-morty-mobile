import {useLazyQuery} from '@apollo/client';
import {characterDetailsQuery} from '../../apollo/queries/characterDetails';
import {CharacterDetailsQuery, CharacterDetailsQueryVars} from './types';

const useCharacter = () => {
  const [getCharacterDetails, {data, loading, error, fetchMore}] = useLazyQuery<
    CharacterDetailsQuery,
    CharacterDetailsQueryVars
  >(characterDetailsQuery);
  return {
    data,
    loading,
    error,
    fetchMore,
    getCharacterDetails,
  };
};

export default useCharacter;
