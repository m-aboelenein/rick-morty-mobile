import React from 'react';
import {Pressable, View} from 'react-native';
import Images from '../../assets/images';
import backHeaderStyles from './styles';
import {BackHeaderProps} from './types';

const BackHeader: React.FC<BackHeaderProps> = (props) => {
  const {ChevronLeft} = Images.common;
  const {goBack} = props;
  return (
    <View style={backHeaderStyles.headerContainer}>
      <Pressable
        testID="back-button"
        onPress={goBack}
        style={backHeaderStyles.backButton}>
        <ChevronLeft height={25} width={25} />
      </Pressable>
    </View>
  );
};

export default BackHeader;
