import { Box, BoxProps, Divider, Heading } from "@chakra-ui/layout";
import { ReactNode } from "react";

const NewSection = ({ title, children, m, w, ...rest }: SectionProps) => {
  return (
    <Box {...rest} as="section" w={w ?? "90%"} m={m ?? "2em auto"}>
      <Heading fontFamily="Raleway" fontWeight="light" size="xl" p="7px">
        {title}
      </Heading>
      <Divider orientation="horizontal" />
      {children}
    </Box>
  );
};

export default NewSection;

interface SectionProps extends BoxProps {
  title: string;
  children?: ReactNode;
}
