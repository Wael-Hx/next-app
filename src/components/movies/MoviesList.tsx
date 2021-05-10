import { Grid } from "@chakra-ui/layout";
import { data } from "../../data";
import NewSection from "../NewSection";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  return (
    <NewSection title="Trending">
      <Grid
        as="section"
        mt="5"
        alignItems="center"
        gap="3"
        justifyItems="center"
        gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
      >
        {data.map((movie) => (
          <MovieCard key={movie.name} movieData={movie} />
        ))}
      </Grid>
    </NewSection>
  );
};

export default MoviesList;
