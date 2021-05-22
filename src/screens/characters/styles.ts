import {StyleSheet} from 'react-native';
import {CharactersStyles} from './types';

const charactersStyles = StyleSheet.create<CharactersStyles>({
  screenContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  listContentStyles: {
    paddingHorizontal: 16,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default charactersStyles;
