import { Center, Heading } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Center minW="full" minH="90vh">
      <Heading
        colorScheme="whiteAlpha"
        as="h1"
        fontFamily="Raleway"
        fontWeight="medium"
        fontSize="2xl"
      >
        Loading...
      </Heading>
    </Center>
  );
};

export default Loading;
