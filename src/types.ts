export type Movie = {
  name: string;
  cover: string;
  poster: string;
  description: string;
  genres: string[];
  trailer: string;
  released: string;
  rating: "G" | "PG" | "PG-13" | "R" | "NC-17" | "NR";
  runtime: string;
  score: {
    imdb: number;
    mc: number;
    rt: number;
  };
};
