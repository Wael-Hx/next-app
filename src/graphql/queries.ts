import { gql, makeVar } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query movies($offset: Int, $limit: Int) {
    movies(offset: $offset, limit: $limit) {
      name
      cover
      poster
      description
      genres
      trailer
      released
      rating
      runtime
      score {
        imdb
      }
    }
  }
`;

export const GET_MOVIE = gql`
  query GetMovie($name: String!) {
    getMovie(name: $name) {
      name
      cover
      poster
      description
      genres
      trailer
      released
      rating
      runtime
      score {
        imdb
      }
    }
  }
`;

export const fetchLimitVar = makeVar(8);
