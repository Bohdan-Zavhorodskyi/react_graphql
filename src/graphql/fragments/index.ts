import { gql } from 'graphql.macro';

export const USER_DATA = gql`
  fragment UserData on User {
    _id
  }
`;
