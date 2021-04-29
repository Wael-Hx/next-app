import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  if (isDark) {
    return (
      <MoonIcon
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
      marginInline="1em"
      boxSize="1.3em"
      color="goldenrod"
      cursor="pointer"
      onClick={toggleColorMode}
    />
  );
};
