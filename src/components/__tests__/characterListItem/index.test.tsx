import * as React from 'react';
import CharacterListItem from '../../characterListItem';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

const mockOnPressCharacter = jest.fn();

it('renders a character item', () => {
  const tree = renderer.create(
    <CharacterListItem
      onPressCharacter={mockOnPressCharacter}
      character={{
        id: 1,
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }}
    />,
  );
  expect(tree).toMatchSnapshot();
});

it('navigates to character details', () => {
  const {getByTestId} = render(
    <CharacterListItem
      onPressCharacter={mockOnPressCharacter}
      character={{
        id: 1,
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }}
    />,
  );

  fireEvent.press(getByTestId('character-item'));
  expect(mockOnPressCharacter).toHaveBeenCalled();
});
