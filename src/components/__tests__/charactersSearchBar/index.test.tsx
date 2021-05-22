import {fireEvent, render} from '@testing-library/react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import CharacterSearchBar from '../../charactersSearchBar';

const mockSetSearchValue = jest.fn();

it('renders a character search bar', () => {
  const tree = renderer.create(
    <CharacterSearchBar
      searchValue="rick"
      setSearchValue={mockSetSearchValue}
    />,
  );
  expect(tree).toMatchSnapshot();
});

it('searches for characters with the right values', () => {
  const {getByTestId} = render(
    <CharacterSearchBar
      searchValue="rick"
      setSearchValue={mockSetSearchValue}
    />,
  );

  fireEvent.changeText(getByTestId('search-bar'), 'rick');
  expect(mockSetSearchValue).toHaveBeenCalled();
  expect(mockSetSearchValue).toBeCalledWith('rick');
});
