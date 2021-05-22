import {StyleSheet} from 'react-native';
import {EpisodesListItemStyles} from './types';

const episodeListItemStyles = StyleSheet.create<EpisodesListItemStyles>({
  container: {
    backgroundColor: 'white',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  airDate: {
    color: 'black',
    fontSize: 14,
  },
  name: {
    color: 'black',
    fontSize: 14,
  },
});

export default episodeListItemStyles;
