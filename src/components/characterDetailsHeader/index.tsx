import React from 'react';
import {Image, Text, View} from 'react-native';
import characterDetailsHeaderStyles from './styles';
import {CharacterDetailsHeaderProps} from './types';

const CharacterDetailsHeader: React.FC<CharacterDetailsHeaderProps> = (
  props,
) => {
  const {character} = props;
  return (
    <View key={character.id} style={characterDetailsHeaderStyles.container}>
      <Image
        source={{uri: character.image}}
        style={characterDetailsHeaderStyles.characterImage}
      />
      <View style={characterDetailsHeaderStyles.detailsContainer}>
        <View style={characterDetailsHeaderStyles.characterInfoContainer}>
          <Text style={characterDetailsHeaderStyles.characterInfo}>Name:</Text>
          <Text
            numberOfLines={1}
            style={characterDetailsHeaderStyles.characterInfo}>
            {character.name}
          </Text>
        </View>
        <View style={characterDetailsHeaderStyles.characterInfoContainer}>
          <Text style={characterDetailsHeaderStyles.characterInfo}>
            Species:
          </Text>
          <Text
            numberOfLines={1}
            style={characterDetailsHeaderStyles.characterInfo}>
            {character.species}
          </Text>
        </View>
        <View style={characterDetailsHeaderStyles.characterInfoContainer}>
          <Text style={characterDetailsHeaderStyles.characterInfo}>
            Gender:
          </Text>
          <Text
            numberOfLines={1}
            style={characterDetailsHeaderStyles.characterInfo}>
            {character.gender}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetailsHeader;
