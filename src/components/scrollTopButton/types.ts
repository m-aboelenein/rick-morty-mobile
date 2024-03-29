import {ImageStyle, ViewStyle} from 'react-native';

export interface ScrollTopButtonProps {
  onPressScroll: () => void;
}

export interface ScrollTopButtonStyles {
  container: ViewStyle;
  arrow: ImageStyle;
}
