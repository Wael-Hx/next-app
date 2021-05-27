import { Center, Heading } from "@chakra-ui/layout";

const Loading = () => {
  return (
    <Center w="full" h="90vh">
      <Heading as="h1" size="2xl">
        waiting for data...
      </Heading>
    </Center>
  );
};

export default Loading;
