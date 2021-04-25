import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Text as="h1">Hello World</Text>
  </Container>
);

export default Index;
