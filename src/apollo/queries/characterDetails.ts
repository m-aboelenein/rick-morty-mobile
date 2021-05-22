import {gql} from '@apollo/client';

export const characterDetailsQuery = gql`
  query getCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      episode {
        id
        name
        air_date
      }
    }
  }
`;
