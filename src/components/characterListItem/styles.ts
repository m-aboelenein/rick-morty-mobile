import {StyleSheet} from 'react-native';
import {CharacterListItemStyles} from './types';

const characterListItemStyles = StyleSheet.create<CharacterListItemStyles>({
  container: {
    minHeight: 80,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    borderRadius: 20,
  },
  characterImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
