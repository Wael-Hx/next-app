import { Button, IconButton } from "@chakra-ui/button";
import { Kbd, Stack, Text } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { ReactNode } from "react";
import { BsPlay } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { Movie } from "../../data";

const PopoverInfo = ({ triggerNode, movie, ...rest }: Props) => {
  return (
    <Popover {...rest}>
      <PopoverTrigger>{triggerNode}</PopoverTrigger>
      <PopoverContent maxW="250px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontFamily="Raleway" fontSize="xs" isTruncated>
          {movie.name}
        </PopoverHeader>
        <PopoverBody>
          <Stack
            mb="2"
            wrap="wrap"
            direction="row"
            fontSize={["xx-small", "xs"]}
            spacing={1}
          >
            <Text>{movie.released}</Text>
            <Text>|</Text>
            <Text>{movie.runtime} </Text>
          </Stack>
          <Stack mb="2" wrap="wrap" direction="row" spacing={2}>
            <Kbd className="rating" as="span">
              {movie.rating}
            </Kbd>

            <Kbd as="span" fontSize={["xx-small", "xs", "small"]}>
              IMDB|{movie.score.imdb}
              <sup>/10</sup>
            </Kbd>
          </Stack>

          <Stack
            mb="2"
            wrap="wrap"
            direction="row"
            spacing={2}
            fontSize={["xx-small", "xs"]}
          >
            <Text> {movie.genres.join(" , ")} </Text>
          </Stack>
          <Stack direction="row" mb="2" spacing={3}>
            <Button
              w="6em"
              h="2.2em"
              leftIcon={<BsPlay />}
              fontSize={["xx-small", "smaller"]}
              fontFamily="Raleway"
              variant="solid"
            >
              Watch
            </Button>
            <IconButton
              w="2.2em"
              h="2.2em"
              fontSize={["xx-small", "smaller"]}
              aria-label="add to favorite"
              icon={<MdFavoriteBorder />}
            />
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverInfo;

interface Props extends PopoverProps {
  triggerNode: ReactNode;
  movie: Movie;
}
