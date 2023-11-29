import { ApolloClient, InMemoryCache } from '@apollo/client';

const URI = 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL'

const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
});

export default client;