import { Flex } from "@chakra-ui/layout";
import { data } from "../../data";
import NewSection from "../NewSection";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  return (
    <NewSection title="Trending">
      <Flex wrap="wrap" justifyContent="space-evenly" alignItems="center">
        {data.map((movie) => (
          <MovieCard key={movie.name} movieData={movie} />
        ))}
      </Flex>
    </NewSection>
  );
};

export default MoviesList;
