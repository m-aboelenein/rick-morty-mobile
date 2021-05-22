import React from 'react';
import {View, TextInput} from 'react-native';
import charactersSearchBarStyles from './styles';
import {CharactersSearchBarProps} from './types';

const CharacterSearchBar: React.FC<CharactersSearchBarProps> = (props) => {
  const {searchValue, setSearchValue} = props;
  return (
    <View style={charactersSearchBarStyles.container}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Enter Character Name"
        style={charactersSearchBarStyles.searchField}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default CharacterSearchBar;
