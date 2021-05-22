import {gql} from '@apollo/client';

export const charactersQuery = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
      }
      info {
        next
        count
        pages
      }
    }
  }
`;
