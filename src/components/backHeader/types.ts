import {ViewStyle} from 'react-native';

export interface BackHeaderStyles {
  headerContainer: ViewStyle;
  backButton: ViewStyle;
}

export interface BackHeaderProps {
  goBack: () => void;
}
