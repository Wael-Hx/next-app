import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    light: {
      10: "#FEFEFE",
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
    },
  },

  breakpoints,
});

export default theme;
