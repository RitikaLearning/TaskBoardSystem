import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from "apollo-link-ws";
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import {SubscriptionClient} from 'subscriptions-transport-ws'
import { authToken } from './Main.js';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api',
  headers: {
    'Authorization': `Bearer ${authToken}`
  }
});

// Create a WebSocket link:
// const wsLink = new WebSocketLink(new SubscriptionClient(`https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api`, {
//   reconnect: true,
//   connectionParams: async () => {
//     return {
//       Authorization: `Bearer ${authToken}`
//     }
//   }
// }, undefined, []));

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink
// );
const client = new ApolloClient({
  uri: 'https://w6tcrg3sb4.execute-api.us-east-1.amazonaws.com/example-example-graphql-api',
  cache: new InMemoryCache(),
});
export default client