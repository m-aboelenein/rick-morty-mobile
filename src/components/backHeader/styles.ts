import {StyleSheet} from 'react-native';
import {BackHeaderStyles} from './types';

const backHeaderStyles = StyleSheet.create<BackHeaderStyles>({
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  backButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default backHeaderStyles;
