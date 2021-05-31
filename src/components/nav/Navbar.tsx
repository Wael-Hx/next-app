import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { DarkModeSwitch } from "../DarkModeSwitch";
import Link from "next/link";

const Navbar = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  return (
    <Flex
      position="sticky"
      top="0"
      zIndex={3}
      alignItems="center"
      as="nav"
      boxShadow="lg"
      marginBottom="5"
      w="full"
      bgColor={bg}
    >
      <Heading marginInline="5" fontFamily="Raleway" size="md" p="5px">
        <Link href="/"> Movies</Link>
      </Heading>
      <Spacer />
      <DarkModeSwitch />
      <Box>
        <Button
          fontFamily="Raleway"
          fontWeight="light"
          colorScheme="telegram"
          p="3"
          margin="3"
        >
          Log In
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
