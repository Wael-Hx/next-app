import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { DarkModeSwitch } from "../DarkModeSwitch";

const Navbar = () => {
  return (
    <Flex
      position="sticky"
      zIndex={2}
      alignItems="center"
      as="nav"
      boxShadow="lg"
      marginBottom="3"
    >
      <Heading marginInline="5" fontFamily="Raleway" size="md" p="5px">
        Movies
      </Heading>
      <Spacer />
      <DarkModeSwitch />
      <Box>
        <Button fontFamily="Raleway" colorScheme="teal" p="3" margin="3">
          Log In
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
