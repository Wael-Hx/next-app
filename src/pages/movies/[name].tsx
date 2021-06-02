import { Image } from "@chakra-ui/image";
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Kbd,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Movie } from "../../types";
import NewSection from "../../components/NewSection";
import { GET_MOVIE, MOVIES_QUERY } from "../../graphql/queries";
import { initializeApollo } from "../../graphql/client";
import Navbar from "../../components/nav/Navbar";
import styled from "@emotion/styled";
import Head from "next/head";
import { useColorMode } from "@chakra-ui/color-mode";

const MoviePage = (props: MoviePageProps) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title> {props.movieData.name} </title>
        <meta name="og:title" content={props.movieData.name} />
        <meta name="og:image" content={props.movieData.poster} />
        <meta name="og:description" content={props.movieData.description} />
      </Head>
      <Navbar />
      <BackDropImage
        colorMode={colorMode}
        src={`/media/covers/${props.movieData.name}.jpg`}
      />
      <Box as="main" w={["93%", "80%"]} m="auto" pb="5">
        <Stack as="section" direction="row" w="full" m="auto" spacing="1ch">
          <Box
            w={["150px", "200px", "240px"]}
            boxShadow=" 0 0 80px 10px rgba(0, 0, 0, 0.9) inset"
            pos="relative"
            m="8px"
          >
            <AspectRatio w="full" ratio={2 / 3}>
              <Image
                src={`/media/posters/${props.movieData.name}.jpg`}
                alt={props.movieData.name}
                fit="cover"
                loading="lazy"
              />
            </AspectRatio>
          </Box>
          <VStack pt="1em" align="start" spacing="1em">
            <HStack spacing="1ch">
              <Heading
                fontFamily="Raleway"
                fontSize={["md", "2xl", "4xl"]}
                as="h1"
              >
                {props.movieData.name}
              </Heading>
              <span> | </span>
              <Text fontSize={["xx-small", "xs"]}>
                {props.movieData.released}
              </Text>
            </HStack>
            <Text fontSize={["xx-small", "xs"]}>
              {props.movieData.genres.join(" , ")}
            </Text>
            <HStack spacing="2ch">
              <Kbd
                fontSize={["xx-small", "xs", "small"]}
                className="rating"
                as="span"
              >
                {props.movieData.rating}
              </Kbd>
              <Kbd as="span" fontSize={["xx-small", "xs", "small"]}>
                IMDB|{props.movieData.score.imdb}
                <sup>/10</sup>
              </Kbd>
            </HStack>
            <Text fontSize={["xx-small", "xs"]}>
              Runtime: {props.movieData.runtime}
            </Text>
          </VStack>
        </Stack>
        <NewSection title="Synopsis" m="1">
          <Box w="full" m="auto">
            <Text
              fontFamily="Open Sans"
              p="1ch"
              pt="2ch"
              maxW="90ch"
              fontSize={["small", "sm"]}
            >
              {props.movieData.description}
            </Text>
          </Box>
        </NewSection>
        <NewSection title="Media" m="1">
          <AspectRatio
            mt="2em"
            marginInline="auto"
            w={["full", "80%"]}
            ratio={16 / 9}
          >
            <iframe
              id="ytplayer"
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${props.movieData.trailer}`}
              allowFullScreen
              frameBorder="0"
              title="movie trailer"
            />
          </AspectRatio>
        </NewSection>
      </Box>
    </>
  );
};

export default MoviePage;

const BackDropImage = styled.div<StyledDivProps>`
  background-image: ${(props) => `url("${props.src}")`};
  object-fit: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ colorMode }) => (colorMode === "dark" ? 0.2 : 0)};
  z-index: -2;
`;

type MoviePageProps = {
  movieData: Movie;
};
type Params = {
  params: {
    name: string;
  };
};

type StyledDivProps = {
  src: string;
  colorMode?: "dark" | "light";
};
export async function getStaticProps({ params }: Params) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<{ getMovie: Movie }>({
    query: GET_MOVIE,
    variables: {
      name: params.name,
    },
  });

  return {
    props: {
      movieData: data.getMovie,
    },
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<{ movies: Movie[] }>({
    query: MOVIES_QUERY,
  });

  return {
    paths: data.movies.map(({ name }) => ({
      params: {
        name,
      },
    })),
    fallback: false,
  };
}
