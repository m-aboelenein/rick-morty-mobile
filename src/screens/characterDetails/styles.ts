import {StyleSheet} from 'react-native';
import {CharacterDetailsStyles} from './types';

const characterDetailsStyles = StyleSheet.create<CharacterDetailsStyles>({
  screenContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  listContentStyles: {
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
export default characterDetailsStyles;
