import {StyleSheet} from 'react-native';
import {CharacterListItemStyles} from './types';

const characterListItemStyles = StyleSheet.create<CharacterListItemStyles>({
  container: {
    minHeight: 60,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    borderRadius: 16,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    marginRight: 16,
  },
  characterName: {
    color: 'black',
    flex: 1,
    fontSize: 16,
  },
});

export default characterListItemStyles;
