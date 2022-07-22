import { gql } from 'graphql.macro';

export const GET_ALL_PEOPLE = gql`
  query allPeople {
    allPeople {
      people {
        name
        birthYear
        eyeColor
        gender
        skinColor
      }
      totalCount
    }
  }
`;
