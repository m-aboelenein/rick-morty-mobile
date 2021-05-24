import {fireEvent, render} from '@testing-library/react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import BackHeader from '../../backHeader';

const goBack = jest.fn();

it('renders a Back Header', () => {
  const tree = renderer.create(<BackHeader goBack={goBack} />);
  expect(tree).toMatchSnapshot();
});

it('navigates back to characters screen', () => {
  const {getByTestId} = render(<BackHeader goBack={goBack} />);

  fireEvent.press(getByTestId('back-button'));
  expect(goBack).toHaveBeenCalled();
});
