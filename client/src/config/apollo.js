import ApolloClient from 'apollo-boost';

// Apollo client setup
export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});
