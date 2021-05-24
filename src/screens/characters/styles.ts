import {StyleSheet} from 'react-native';
import {CharactersStyles} from './types';

const charactersStyles = StyleSheet.create<CharactersStyles>({
  screenContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 16,
  },
  listContentStyles: {
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: 'white',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default charactersStyles;
