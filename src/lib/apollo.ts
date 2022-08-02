import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl640rdhm7j2p01t77y5tc080/master",
  cache: new InMemoryCache(),
});
