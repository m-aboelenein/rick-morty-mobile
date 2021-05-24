import {StyleSheet} from 'react-native';
import {EpisodesListItemStyles} from './types';

const episodeListItemStyles = StyleSheet.create<EpisodesListItemStyles>({
  container: {
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderRadius: 8,
    margin: 8,
  },
  airDate: {
    color: 'green',
    fontSize: 14,
  },
  name: {
    color: 'black',
    fontSize: 13,
    flex: 1,
  },
});

export default episodeListItemStyles;
