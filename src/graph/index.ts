import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { gql } from "apollo-server-express";

import { vacancy_resolvers, vancancy_type_defs } from "./vacancies";
import { getAllPhotos } from "../utils/unsplash.api";

const defaultTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [defaultTypeDefs, vancancy_type_defs],
  resolvers: [vacancy_resolvers],
});

export const initializeApolloServer = async (app: any) => {
  const apolloServer = new ApolloServer({
    schema,
    context: {
      all_photos: getAllPhotos,
    },
  });

  apolloServer.applyMiddleware({ app });
  console.log("APOLLO SERVER INITIALIZED");
};
