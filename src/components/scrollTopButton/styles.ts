import {StyleSheet} from 'react-native';
import {ScrollTopButtonStyles} from './types';

const scrollTopButtonStyles = StyleSheet.create<ScrollTopButtonStyles>({
  container: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default scrollTopButtonStyles;
