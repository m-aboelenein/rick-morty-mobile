import React from 'react';
import {Pressable} from 'react-native';
import {ScrollTopButtonProps} from './types';
import Images from '../../assets/images';
import scrollTopButtonStyles from './styles';

const ScrollTopButton: React.FC<ScrollTopButtonProps> = (props) => {
  const {ChevronLeft} = Images.common;
  const {onPressScroll} = props;
  return (
    <Pressable
      testID="scroll-button"
      onPress={onPressScroll}
      style={scrollTopButtonStyles.container}>
      <ChevronLeft height={30} width={30} rotation={90} />
    </Pressable>
  );
};

export default ScrollTopButton;
