import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  ListRenderItem,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import useCharacters from '../../hooks/useCharacters';
import {FlatList} from 'react-native-gesture-handler';
import {CharacterListItem} from '../../components/characterListItem';
import {Character} from '../../hooks/useCharacters/types';
import CharacterSearchBar from '../../components/charactersSearchBar';
import {useNavigation} from '@react-navigation/core';

const renderEmptyList = () => (
  <View style={styles.screenContainer}>
    <Text>Sorry no data</Text>
  </View>
);

const Characters: React.FC<{}> = () => {
  const {getCharacters, loading, error, data, fetchMore} = useCharacters();
  const {navigate} = useNavigation();
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const nextPage = data?.characters.info.next;

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const renderListFooter = () => {
    if (data && isLoadingMore) {
      return (
        <View>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    }
    return null;
  };

  const renderListHeader = useMemo(
    () => (
      <CharacterSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    ),
    [searchValue],
  );

  const onEndReachedHandler = useCallback(async () => {
    if (fetchMore && !isLoadingMore) {
      try {
        setIsLoadingMore(true);
        await fetchMore({
          variables: {
            page: nextPage,
          },
        });
      } catch (err) {
        setIsLoadingMore(false);
      } finally {
        setIsLoadingMore(false);
      }
    }
  }, [nextPage, fetchMore, isLoadingMore]);

  const onPressCharacter = (itemId: number) => {
    navigate('characterDerails', {id: itemId});
  };

  const renderCharacterItem: ListRenderItem<Character> = ({item}) => (
    <CharacterListItem
      character={item}
      onPressCharacter={() => onPressCharacter(item.id)}
    />
  );

  if (loading && !data) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="green" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <Text>{error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <FlatList
        data={data?.characters.results}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.listContentStyles}
        extraData={searchValue}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReachedHandler}
        ListFooterComponent={renderListFooter}
        ListHeaderComponent={renderListHeader}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};
export default Characters;
