import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import React, {useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  ListRenderItem,
  SafeAreaView,
  Text,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import BackHeader from '../../components/backHeader';
import CharacterDetailsHeader from '../../components/characterDetailsHeader';
import EpisodesListItem from '../../components/episodesListItem';
import useCharacter from '../../hooks/useCharacter';
import {Character, Episode} from '../../hooks/useCharacter/types';
import characterDetailsStyles from './styles';
import {CharacterDetailsNavigationParams} from './types';

const CharacterDetails: React.FC = () => {
  const {
    params: {id},
  } = useRoute<RouteProp<CharacterDetailsNavigationParams, 'Details'>>();

  const {getCharacterDetails, loading, data, error} = useCharacter();

  const {goBack} = useNavigation();

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

  const renderCharacterSummary: React.FC = () => {
    return data?.character ? (
      <CharacterDetailsHeader character={data?.character} />
    ) : null;
  };

  const renderEmptyList = useCallback(() => {
    if (loading) {
      return (
        <SafeAreaView style={characterDetailsStyles.loadingContainer}>
          <ActivityIndicator size="large" color="green" />
        </SafeAreaView>
      );
    }
    if (error) {
      return (
        <SafeAreaView style={characterDetailsStyles.errorContainer}>
          <Text style={characterDetailsStyles.errorMessage}>Sorry no data</Text>
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={characterDetailsStyles.screenContainer}>
        <Text>Sorry no data</Text>
      </SafeAreaView>
    );
  }, [loading, error]);

  return (
    <SafeAreaView style={characterDetailsStyles.screenContainer}>
      <BackHeader goBack={goBack} />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderCharacterSummary}
        data={data?.character.episode}
        ListEmptyComponent={renderEmptyList}
        renderItem={renderEpisodeItem}
        keyExtractor={(item: Character) => item.id.toString()}
        contentContainerStyle={characterDetailsStyles.listContentStyles}
      />
    </SafeAreaView>
  );
};

export default CharacterDetails;
