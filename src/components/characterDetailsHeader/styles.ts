import {StyleSheet} from 'react-native';
import {CharacterDetailsHeaderStyles} from './types';

const characterDetailsHeaderStyles =
  StyleSheet.create<CharacterDetailsHeaderStyles>({
    container: {
      minHeight: 120,
      backgroundColor: 'white',
      paddingHorizontal: 16,
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 8,
      borderRadius: 16,
    },
    characterImage: {
      width: 90,
      height: 90,
      borderRadius: 45,
      resizeMode: 'cover',
      marginRight: 16,
    },
    detailsContainer: {
      paddingVertical: 16,
    },
    characterInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    characterInfo: {
      color: 'black',
      fontSize: 16,
    },
  });

export default characterDetailsHeaderStyles;
