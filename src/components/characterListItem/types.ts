import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {Character} from '../../shared/types';

export interface CharacterListItemProps {
  character: Character;
}

export interface CharacterListItemStyles {
  container: ViewStyle;
  characterImage: ImageStyle;
  characterName: TextStyle;
}
