import { InfoOutlineIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Flex, Heading } from "@chakra-ui/layout";
import { Movie } from "../../types";
import PopoverInfo from "./PopoverInfo";
import Link from "next/link";
import { ChakraLink } from "../Trending/Styled";
import { Image } from "@chakra-ui/image";
import setPreviousPageState from "../../setPreviousPageState";

const MovieCard = ({ movieData }: MovieCardProps) => {
  return (
    <Box
      as="article"
      w={["150px", "200px", "240px"]}
      boxShadow=" 0 0 80px 10px rgba(0, 0, 0, 0.9) inset"
      pos="relative"
      m="8px"
    >
      <Flex
        pos="absolute"
        width="full"
        justifyContent="flex-end"
        alignItems="end"
        p="3"
        zIndex={1}
      >
        <PopoverInfo
          trigger="hover"
          triggerNode={
            <InfoOutlineIcon
              aria-label="movie-info"
              boxSize={4}
              color="gray.200"
            />
          }
          movie={movieData}
        />
      </Flex>

      <AspectRatio w="full" ratio={2 / 3}>
        <Image
          src={`/media/posters/${movieData.name}.jpg`}
          alt={movieData.name}
          fit="cover"
          loading="lazy"
          zIndex={-1}
        />
      </AspectRatio>

      <Heading
        color="gray.50"
        pos="absolute"
        w="90%"
        fontWeight="light"
        as="h3"
        left="1ch"
        bottom="1ch"
        fontSize={["x-small", "xs", "sm"]}
        isTruncated
      >
        <Link href={`/movies/${movieData.name}`} passHref>
          <ChakraLink onClick={setPreviousPageState}>
            {movieData.name}
          </ChakraLink>
        </Link>
      </Heading>
    </Box>
  );
};

export default MovieCard;

interface MovieCardProps {
  movieData: Movie;
}
