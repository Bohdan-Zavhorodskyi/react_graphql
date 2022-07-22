import { gql } from 'graphql.macro';

export const UPDATE_PEOPLE = gql`
  mutation people($payload: SupportMessageInput!) {
    people(payload: $payload) {
      sent
    }
  }
`;
