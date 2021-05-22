import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {Character} from '../../hooks/useCharacter/types';

export interface CharacterDetailsHeaderProps {
  character: Character;
}

export interface CharacterDetailsHeaderStyles {
  container: ViewStyle;
  characterImage: ImageStyle;
  detailsContainer: ViewStyle;
  characterInfoContainer: ViewStyle;
  characterInfo: TextStyle;
}
