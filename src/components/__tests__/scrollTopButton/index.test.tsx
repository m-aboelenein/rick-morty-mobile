import {fireEvent, render} from '@testing-library/react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import ScrollTopButton from '../../scrollTopButton';

const mockOnPressScroll = jest.fn();

it('renders a button that scrolls up', () => {
  const tree = renderer.create(
    <ScrollTopButton onPressScroll={mockOnPressScroll} />,
  );
  expect(tree).toMatchSnapshot();
});

it('calls the scroll handler onPress', () => {
  const {getByTestId} = render(
    <ScrollTopButton onPressScroll={mockOnPressScroll} />,
  );

  fireEvent.press(getByTestId('scroll-button'));
  expect(mockOnPressScroll).toHaveBeenCalled();
});
