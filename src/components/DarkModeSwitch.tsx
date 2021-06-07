import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  if (isDark) {
    return (
      <MoonIcon
        aria-label="dark mode"
        marginInline="1em"
        boxSize="1.3em"
        color="lightblue"
        cursor="pointer"
        onClick={toggleColorMode}
      />
    );
  }
  return (
    <SunIcon
      aria-label="light mode"
      marginInline="1em"
      boxSize="1.3em"
      color="goldenrod"
      cursor="pointer"
      onClick={toggleColorMode}
    />
  );
};
