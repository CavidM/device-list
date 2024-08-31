import fetch from 'cross-fetch';
import {
  ApolloClient, HttpOptions, InMemoryCache, createHttpLink,
} from '@apollo/client';
import { getToken } from '@dl/services/auth-token';
import { setContext } from '@apollo/client/link/context';

const linkOptions: HttpOptions = {
  uri: 'http://localhost:3001/graphql',
};

if (process.env.NODE_ENV === 'test') {
  linkOptions.fetch = fetch;
}

const httpLink = createHttpLink(linkOptions);

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
