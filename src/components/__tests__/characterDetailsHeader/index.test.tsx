import * as React from 'react';
import CharacterDetailsHeader from '../../characterDetailsHeader';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import {Character} from '../../../hooks/useCharacter/types';

const testCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  gender: 'male',
  species: 'human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    {
      id: '1',
      name: 'first episode',
      air_date: '1 jan 2021',
    },
  ],
};

it('renders a character header information', () => {
  const tree = renderer.create(
    <CharacterDetailsHeader character={testCharacter} />,
  );
  expect(tree).toMatchSnapshot();
});

it('renders the correct character data', () => {
  const {getByText} = render(
    <CharacterDetailsHeader character={testCharacter} />,
  );

  expect(getByText('Rick Sanchez')).not.toBe(null);
  expect(getByText('male')).not.toBe(null);
  expect(getByText('human')).not.toBe(null);

});
