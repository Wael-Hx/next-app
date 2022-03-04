import { gql } from "apollo-server-core";
import { data } from "../data";

export const typeDefs = gql`
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
    movies(offset: Int, limit: Int): [Movie]!
    getMovie(name: String!): Movie
  }
`;

export const resolvers = {
  Query: {
    movies: (_: any, { offset, limit }: MoviesQueryArgs) => {
      const sortedMovies = data.sort((a, b) => {
        let m2 = new Date(b.released).getFullYear() + b.score.imdb;
        let m1 = new Date(a.released).getFullYear() + a.score.imdb;
        return m2 - m1;
      });
      if (limit || offset) {
        limit = limit ?? data.length;
        offset = offset ?? 0;
        return sortedMovies.slice(offset, limit);
      }
      return sortedMovies;
    },
    getMovie: (_: any, { name }: { name: string }) => {
      const movie = data.find((mov) => mov.name === name);
      return movie;
    },
  },
};

interface MoviesQueryArgs {
  limit?: number;
  offset?: number;
}
