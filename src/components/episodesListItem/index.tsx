import React from 'react';
import {Text, View} from 'react-native';
import episodeListItemStyles from './styles';
import {EpisodesListItemProps} from './types';

const EpisodesListItem: React.FC<EpisodesListItemProps> = (props) => {
  const {episode} = props;
  return (
    <View style={episodeListItemStyles.container}>
      <Text numberOfLines={1} style={episodeListItemStyles.name}>{episode.name}</Text>
      <Text numberOfLines={1} style={episodeListItemStyles.airDate}>{episode.air_date}</Text>
    </View>
  );
};

export default EpisodesListItem;
