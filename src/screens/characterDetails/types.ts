import {TextStyle, ViewStyle} from 'react-native';

export interface CharacterDetailsStyles {
  screenContainer: ViewStyle;
  loadingContainer: ViewStyle;
  listContentStyles: ViewStyle;
  errorContainer: ViewStyle;
  errorMessage: TextStyle;
}

export type CharacterDetailsNavigationParams = {
  Details: {id: string};
};
