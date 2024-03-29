import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  ListRenderItem,
  Text,
  View,
  SafeAreaView,
  Keyboard,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import styles from './styles';
import useCharacters from '../../hooks/useCharacters';
import {FlatList} from 'react-native-gesture-handler';
import {CharacterListItem} from '../../components/characterListItem';
import {Character} from '../../hooks/useCharacters/types';
import CharacterSearchBar from '../../components/charactersSearchBar';
import {useNavigation} from '@react-navigation/core';
import ScrollTopButton from '../../components/scrollTopButton';

const MAXIMUM_SCROLLING_OFFSET = 1000;

const Characters: React.FC<{}> = () => {
  const {getCharacters, loading, error, data, fetchMore} = useCharacters();
  const {navigate} = useNavigation();
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isScrollTopEnabled, setIsScrollTopEnabled] = useState<boolean>(false);
  const charactersListRef = useRef<FlatList<any> | null>(null);

  const nextPage = data?.characters.info.next;
  const canLoadMore = data?.characters.info.next;

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

  const onFilterCharacters = useCallback(
    async (value: string) => {
      setSearchValue(value);
      const valueToLowerCase = value.toLowerCase();
      try {
        getCharacters({
          variables: {
            filter: {
              name: valueToLowerCase,
            },
          },
        });
      } catch (err) {
        Promise.reject(err);
      }
    },
    [getCharacters],
  );

  const handleOnUserScrollList = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    let scrollOffset = event.nativeEvent.contentOffset.y;
    if (scrollOffset > MAXIMUM_SCROLLING_OFFSET) {
      setIsScrollTopEnabled(true);
    } else {
      setIsScrollTopEnabled(false);
    }
    Keyboard.dismiss();
  };

  const renderListHeader = useMemo(
    () => (
      <CharacterSearchBar
        searchValue={searchValue}
        setSearchValue={onFilterCharacters}
      />
    ),
    [searchValue, onFilterCharacters],
  );

  const onEndReachedHandler = useCallback(async () => {
    if (fetchMore && !isLoadingMore && canLoadMore) {
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
  }, [nextPage, fetchMore, isLoadingMore, canLoadMore]);

  const onPressCharacter = useCallback(
    (itemId: number) => {
      navigate('characterDerails', {id: itemId});
    },
    [navigate],
  );

  const renderCharacterItem: ListRenderItem<Character> = ({item}) => (
    <CharacterListItem
      character={item}
      onPressCharacter={() => onPressCharacter(item.id)}
    />
  );

  const onPressTopButton = () => {
    charactersListRef.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
  };

  const renderEmptyList = useCallback(() => {
    if (loading) {
      return (
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="green" />
        </SafeAreaView>
      );
    }
    if (error) {
      return (
        <SafeAreaView style={styles.errorContainer}>
          <Text style={styles.errorMessage}>Sorry no data</Text>
        </SafeAreaView>
      );
    }
    return (
      <View style={styles.screenContainer}>
        <Text>Sorry no data</Text>
      </View>
    );
  }, [loading, error]);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <FlatList
        ref={charactersListRef}
        data={data?.characters.results}
        renderItem={renderCharacterItem}
        onScroll={handleOnUserScrollList}
        keyExtractor={(item: Character) => item.id.toString()}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.listContentStyles}
        extraData={searchValue}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReachedHandler}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderListFooter}
        ListHeaderComponent={renderListHeader}
        stickyHeaderIndices={[0]}
      />
      {isScrollTopEnabled && (
        <ScrollTopButton onPressScroll={onPressTopButton} />
      )}
    </SafeAreaView>
  );
};
export default Characters;
