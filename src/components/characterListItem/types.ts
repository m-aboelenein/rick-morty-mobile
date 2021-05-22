import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {Character} from '../../hooks/useCharacters/types';

export interface CharacterListItemProps {
  character: Character;
  onPressCharacter: () => void;
}

export interface CharacterListItemStyles {
  container: ViewStyle;
  characterImage: ImageStyle;
  characterName: TextStyle;
}
