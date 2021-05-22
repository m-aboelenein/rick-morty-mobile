import React from 'react';
import {Text, Image, Pressable} from 'react-native';
import {CharacterListItemProps} from './types';
import characterListItemStyles from './styles';

export const CharacterListItem: React.FC<CharacterListItemProps> = (props) => {
  const {character, onPressCharacter} = props;
  return (
    <Pressable
      key={character.id}
      style={characterListItemStyles.container}
      onPress={onPressCharacter}>
      <Image
        source={{uri: character.image}}
        style={characterListItemStyles.characterImage}
      />
      <Text numberOfLines={1} style={characterListItemStyles.characterName}>
        {character.name}
      </Text>
    </Pressable>
  );
};
