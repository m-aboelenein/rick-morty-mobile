import React from 'react';
import {Text, Pressable} from 'react-native';
import {CharacterListItemProps} from './types';
import characterListItemStyles from './styles';
import FastImage from 'react-native-fast-image'


export const CharacterListItem: React.FC<CharacterListItemProps> = (props) => {
  const {character, onPressCharacter} = props;
  return (
    <Pressable
      testID={'character-item'}
      key={character.id}
      style={characterListItemStyles.container}
      onPress={onPressCharacter}>
      <FastImage
        source={{uri: character.image}}
        style={characterListItemStyles.characterImage}
      />
      <Text numberOfLines={1} style={characterListItemStyles.characterName}>
        {character.name}
      </Text>
    </Pressable>
  );
};
export default CharacterListItem;
