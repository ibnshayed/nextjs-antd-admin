"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

const GraphQLProvider = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
