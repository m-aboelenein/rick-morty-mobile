import {RouteProp, useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {ListRenderItem, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CharacterDetailsHeader from '../../components/characterDetailsHeader';
import EpisodesListItem from '../../components/episodesListItem';
import useCharacter from '../../hooks/useCharacter';
import {Episode} from '../../hooks/useCharacter/types';
import characterDetailsStyles from './styles';
import {CharacterDetailsNavigationParams} from './types';

const CharacterDetails: React.FC = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<CharacterDetailsNavigationParams, 'Details'>>();

  const {getCharacterDetails, loading, data, error} = useCharacter();

  useEffect(() => {
    getCharacterDetails({
      variables: {
        id,
      },
    });
  }, [id, getCharacterDetails]);

  const renderEpisodeItem: ListRenderItem<Episode> = ({item}) => (
    <EpisodesListItem episode={item} />
  );
  return (
    <SafeAreaView style={characterDetailsStyles.screenContainer}>
      <FlatList
        ListHeaderComponent={
          data?.character && (
            <CharacterDetailsHeader character={data?.character} />
          )
        }
        data={data?.character.episode}
        renderItem={renderEpisodeItem}
      />
    </SafeAreaView>
  );
};

export default CharacterDetails;
