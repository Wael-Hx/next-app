import { Controls, MovieCover, Section, Shadow } from "./Styled";
import { data } from "../../data";
import { Box } from "@chakra-ui/layout";

const Trending = () => {
  return (
    <Section>
      {data.map((movie) => (
        <Box minW="100%" key={movie.name}>
          <MovieCover
            id={movie.name}
            w="100%"
            maxH="100%"
            src={movie.cover}
            objectFit="cover"
            draggable="false"
          />
          <Shadow />
        </Box>
      ))}
      <Controls>
        {data.map((movie) => (
          <a key={movie.name} href={`#${movie.name}`}>
            <li> </li>
          </a>
        ))}
      </Controls>
    </Section>
  );
};

export default Trending;
