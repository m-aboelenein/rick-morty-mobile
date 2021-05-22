import {StyleSheet} from 'react-native';
import {CharactersSearchBarStyles} from './types';

const characterSearchBarStyles = StyleSheet.create<CharactersSearchBarStyles>({
  container: {
    flex: 1,
  },
  searchField: {
    backgroundColor: 'white',
    color: 'black',
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default characterSearchBarStyles;
