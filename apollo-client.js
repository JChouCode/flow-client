import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://flow-server.onrender.com/",
    cache: new InMemoryCache(),
});

export default client;
