import {TextStyle, ViewStyle} from 'react-native';
import {Episode} from '../../hooks/useCharacter/types';

export interface EpisodesListItemProps {
  episode: Episode;
}

export interface EpisodesListItemStyles {
  container: ViewStyle;
  airDate: TextStyle;
  name: TextStyle;
}
