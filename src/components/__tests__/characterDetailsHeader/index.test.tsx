import * as React from 'react';
import CharacterDetailsHeader from '../../characterDetailsHeader';
import renderer from 'react-test-renderer';

it('renders a character header information', () => {
  const tree = renderer.create(
    <CharacterDetailsHeader
      character={{
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
      }}
    />,
  );
  expect(tree).toMatchSnapshot();
});
