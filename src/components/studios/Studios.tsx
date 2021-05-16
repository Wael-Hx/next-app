import { useColorModeValue } from "@chakra-ui/color-mode";
import { Grid } from "@chakra-ui/layout";
import { DC, Disney, Marvel, Pixar } from "../icons/Icons";
import NewSection from "../NewSection";
import StudioLogo from "./StudioLogo";

const Studios = () => {
  const color = useColorModeValue("black", "white");
  return (
    <NewSection title="Studios">
      <Grid
        mt="5"
        alignItems="center"
        gap="3"
        justifyItems="center"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      >
        <StudioLogo
          backgroundAnimation="/media/videos/DC.mp4"
          logo={<DC boxSize="20" zIndex={2} />}
        />
        <StudioLogo
          backgroundAnimation="/media/videos/Marvel.mp4"
          logo={<Marvel boxSize="28" zIndex={2} />}
        />
        <StudioLogo
          backgroundAnimation="/media/videos/Pixar.mp4"
          logo={<Pixar fill={color} boxSize="28" zIndex={2} />}
        />
        <StudioLogo
          backgroundAnimation="/media/videos/Disney.mp4"
          logo={<Disney fill={color} boxSize="28" zIndex={2} />}
        />
      </Grid>
    </NewSection>
  );
};

export default Studios;
