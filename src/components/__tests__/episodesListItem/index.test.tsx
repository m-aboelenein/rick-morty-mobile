import * as React from 'react';
import EpisodesListItem from '../../episodesListItem';
import renderer from 'react-test-renderer';

it('renders an episode', () => {
  const tree = renderer.create(
    <EpisodesListItem
      episode={{
        id: '1',
        name: 'pickle Rick',
        air_date: 'january 1st 2018',
      }}
    />,
  );
  expect(tree).toMatchSnapshot();
});
