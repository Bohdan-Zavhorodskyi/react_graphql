import {
  ApolloClient,
  InMemoryCache,
  defaultDataIdFromObject,
} from '@apollo/client';
import { loader } from 'graphql.macro';

const typeDefs = loader('./schema.graphql');

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache({
    dataIdFromObject: (object: any) => defaultDataIdFromObject(object),
  }),
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  connectToDevTools: true,
  typeDefs,
});

export default client;
