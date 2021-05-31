import { Box, Heading, Kbd, Stack, Text } from "@chakra-ui/layout";
import { Movie } from "../../types";
import styled from "@emotion/styled";
import { Button, IconButton } from "@chakra-ui/button";
import { BsPlay } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";

const DescriptionCard = ({ movieDetails }: DescriptionProps) => {
  const Seperator = () => (
    <Box color="gray.50" as="span">
      –
    </Box>
  );
  return (
    <Section
      textShadow="black 1px 0px 10px"
      left={["1ch", "2ch", "3ch"]}
      bottom={["18%", "10%"]}
    >
      <Heading
        color="gray.50"
        fontFamily="Raleway"
        as="h1"
        fontSize={["md", "2xl", "4xl"]}
        isTruncated
      >
        <Link href={`/movies/${movieDetails.name}`}>{movieDetails.name}</Link>
      </Heading>

      <Stack direction="row" spacing={3}>
        <Text fontSize={["xx-small", "xs"]} color="gray.50">
          {movieDetails.released}
        </Text>
        <Kbd
          textShadow="rgba(50, 50, 50, 0.5) 1px 0px 10px"
          as="span"
          fontSize={["xx-small", "xs", "small"]}
        >
          IMDB|{movieDetails.score.imdb}
          <sup>/10</sup>
        </Kbd>
      </Stack>

      <Stack direction="row" spacing={2} fontSize={["xx-small", "xs"]}>
        <Kbd
          textShadow="rgba(50, 50, 50, 0.5) 1px 0px 10px"
          className="rating"
          as="span"
        >
          {movieDetails.rating}
        </Kbd>
        <Seperator />
        <Text color="gray.50"> {movieDetails.genres.join(" , ")} </Text>
        <Seperator />
        <Text color="gray.50">{movieDetails.runtime} </Text>
      </Stack>
      <Text
        color="gray.50"
        fontSize="sm"
        className="movie-description"
        width="80ch"
        wordBreak="break-word"
      >
        {movieDetails.description}
      </Text>
      <Stack direction="row" spacing={3}>
        <Button
          w="6em"
          h="2.6em"
          leftIcon={<BsPlay />}
          fontSize={["xx-small", "smaller"]}
          fontFamily="Raleway"
          variant="solid"
        >
          Trailer
        </Button>
        <IconButton
          w="2.6em"
          h="2.6em"
          fontSize={["xx-small", "smaller"]}
          aria-label="add to favorite"
          icon={<MdFavoriteBorder />}
        />
      </Stack>
    </Section>
  );
};

export default DescriptionCard;

const Section = styled(Box)`
  position: absolute;
  min-width: fit-content;
  min-width: -moz-fit-content;
  & > * {
    margin-bottom: 5px;
  }

  @media (max-width: 900px) {
    .movie-description {
      display: none;
    }
  }
`;

interface DescriptionProps {
  movieDetails: Movie;
}
