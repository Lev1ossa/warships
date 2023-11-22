import { gql } from '@apollo/client';

export const WARSHIPS_QUERY = gql`
  {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

export const DEFAULT_MIN_PAGE = 1;

export const DEFAULT_VEHICLES_PER_PAGE = 10;
