import { Button, ButtonProps } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import React from "react";

const LoadMore = ({ callBack, ...rest }: LoadMoreProps & ButtonProps) => {
  return (
    <Center w="full" height="10vh">
      <Button
        fontFamily="Open Sans"
        fontWeight="light"
        fontSize={["xs", "small"]}
        {...rest}
        onClick={callBack}
      >
        Load More
      </Button>
    </Center>
  );
};

export default LoadMore;

interface LoadMoreProps {
  callBack: () => void;
}
