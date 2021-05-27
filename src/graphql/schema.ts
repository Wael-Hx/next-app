import { gql } from "apollo-server-core";
import { makeExecutableSchema } from "graphql-tools";
import { data } from "../data";

const typeDefs = gql`
  type Score {
    imdb: Float
    mc: Float
    rt: Float
  }
  type Movie {
    name: String!
    cover: String!
    poster: String!
    description: String!
    genres: [String!]!
    trailer: String!
    released: String!
    rating: String!
    runtime: String!
    score: Score
  }

  type Query {
    movies: [Movie]!
  }
`;

const resolvers = {
  Query: {
    movies: () => {
      return data;
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
