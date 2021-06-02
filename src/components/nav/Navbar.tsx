import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Heading, HStack, Spacer } from "@chakra-ui/layout";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { RiMovieFill } from "react-icons/ri";
import Link from "next/link";
import { ChakraLink } from "../Trending/Styled";
import Icon from "@chakra-ui/icon";

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
      <Link href="/" passHref>
        <ChakraLink ml="3">
          <HStack spacing="0" align="center">
            <Icon boxSize="5" mb="1px" fill="teal" as={RiMovieFill} />
            <Heading
              marginInline="5"
              fontFamily="Raleway"
              fontWeight="medium"
              fontSize={["smaller", "sm"]}
              p="5px"
              as="h2"
            >
              MDB
            </Heading>
          </HStack>
        </ChakraLink>
      </Link>

      <HStack spacing="0.5" ml={["2", "5"]}>
        {["MOVIES", "TV SHOWS", "NEWS"].map((el) => (
          <ChakraLink
            key={el}
            fontFamily="Raleway"
            fontWeight="medium"
            fontSize={["xx-small", "xs", "sm"]}
            p="5px"
            as="h2"
          >
            {el}
          </ChakraLink>
        ))}
      </HStack>
      <Spacer />
      <DarkModeSwitch />

      <Button
        fontFamily="Raleway"
        fontWeight="medium"
        colorScheme="teal"
        p="2"
        m="3"
        fontSize={["xs", "sm"]}
      >
        Sign In
      </Button>
    </Flex>
  );
};

export default Navbar;
