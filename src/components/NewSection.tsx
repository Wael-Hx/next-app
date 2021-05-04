import { Box, Divider, Heading } from "@chakra-ui/layout";
import { ReactNode } from "react";

const NewSection = (props: SectionProps) => {
  return (
    <Box as="section" w="90vw" m="2em auto">
      <Heading fontFamily="Raleway" fontWeight="light" size="xl" p="7px">
        {props.title}
      </Heading>
      <Divider orientation="horizontal" />
      {props.children}
    </Box>
  );
};

export default NewSection;

interface SectionProps {
  title: string;
  children?: ReactNode;
}
